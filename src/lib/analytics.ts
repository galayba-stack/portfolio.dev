import { supabase } from "./supabase";

const VISITOR_KEY = "portfolio_visitor_id";
const SESSION_KEY = "portfolio_session_id";
const SESSION_TS_KEY = "portfolio_session_ts";
const SESSION_TIMEOUT_MS = 30 * 60 * 1000;
console.log("[analytics] initAnalytics called");

function uuid() {
    return (crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`).toString();
}

function getVisitorId() {
    let vid = localStorage.getItem(VISITOR_KEY);
    if (!vid) {
        vid = uuid();
        localStorage.setItem(VISITOR_KEY, vid);
    }
    return vid;
}

function getOrCreateSessionId() {
    const now = Date.now();
    const last = Number(localStorage.getItem(SESSION_TS_KEY) || "0");
    let sid = localStorage.getItem(SESSION_KEY);

    if (!sid || (last && now - last > SESSION_TIMEOUT_MS)) {
        sid = uuid();
        localStorage.setItem(SESSION_KEY, sid);
    }

    localStorage.setItem(SESSION_TS_KEY, String(now));
    return sid;
}

function touchSession() {
    localStorage.setItem(SESSION_TS_KEY, String(Date.now()));
}

type EventName =
    | "pageview"
    | "session_start"
    | "session_end"
    | "heartbeat"
    | "click"
    | "scroll_depth"
    | "download_resume";

async function insertEvent(event_name: EventName, props: Record<string, any> = {}) {
    console.log("[analytics] event", event_name, props);

    const payload = {
        session_id: getOrCreateSessionId(),
        visitor_id: getVisitorId(),
        path: location.pathname + location.search + location.hash,
        referrer: document.referrer || null,
        event_name,
        props,
        user_agent: navigator.userAgent,
    };

    // fire-and-forget (bez .catch(), żeby TS nie krzyczał)
    (async () => {
        try {
            await supabase.from("events").insert(payload);
        } catch {
            // analytics must never break UX
        }
    })();
}

let started = false;
let heartbeatTimer: number | null = null;

function stopHeartbeat() {
    if (heartbeatTimer !== null) {
        clearInterval(heartbeatTimer);
        heartbeatTimer = null;
    }
}

function trackScrollDepth() {
    const thresholds = [25, 50, 75, 100];
    const fired = new Set<number>();

    const handler = () => {
        const doc = document.documentElement;
        const scrollTop = doc.scrollTop || document.body.scrollTop;
        const scrollHeight = doc.scrollHeight - doc.clientHeight;
        if (scrollHeight <= 0) return;

        const pct = Math.round((scrollTop / scrollHeight) * 100);
        for (const t of thresholds) {
            if (!fired.has(t) && pct >= t) {
                fired.add(t);
                insertEvent("scroll_depth", { pct: t });
            }
        }
    };

    window.addEventListener("scroll", handler, { passive: true });
}

function trackClicks() {
    document.addEventListener(
        "click",
        (e) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            const el = target.closest("[data-track]") as HTMLElement | null;
            if (!el) return;

            const name = el.getAttribute("data-track") || "click";
            const href = (el as HTMLAnchorElement).href || null;
            const text = (el.textContent || "").trim().slice(0, 80);

            insertEvent("click", { name, href, text });
            touchSession();
        },
        { capture: true }
    );
}

function trackVisibilityAndEnd() {
    const end = (reason: string) => {
        insertEvent("session_end", { reason });
        stopHeartbeat();
    };

    window.addEventListener("pagehide", () => end("pagehide"));

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            end("hidden");
        } else {
            touchSession();
        }
    });
}

export function track(name: EventName | string, props: Record<string, any> = {}) {
    if (name === "download_resume") return insertEvent("download_resume", props);
    if (name === "pageview") return insertEvent("pageview", props);

    // wszystko inne mapujemy na click (z nazwą)
    return insertEvent("click", { name, ...props });
}

export function initAnalytics() {
    if (started) return;
    started = true;

    insertEvent("session_start");
    insertEvent("pageview");

    window.addEventListener("hashchange", () => insertEvent("pageview", { hash: location.hash }));

    trackClicks();
    trackScrollDepth();
    trackVisibilityAndEnd();

    const tick = () => {
        if (document.visibilityState === "visible") {
            insertEvent("heartbeat");
            touchSession();
        }
    };

    heartbeatTimer = window.setInterval(tick, 15000);
}
