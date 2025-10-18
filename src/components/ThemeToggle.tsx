import { useEffect, useState } from "react";
import { Button } from "./ui/button.tsx";
import { CloudSun, CloudMoon } from "phosphor-react";
import { useTheme } from "./ThemeProvider.tsx";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const iconBaseClass =
        "transition-all duration-300 hover:scale-125";

    if (!mounted) {
        return (
            <Button variant="ghost" size="sm" className="w-9 px-0">
                <CloudSun size={16} className={iconBaseClass} color="#facc15" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            className="w-9 px-0 relative hover:bg-transparent"
            aria-label="Toggle theme"
            type="button"
            onClick={toggleTheme}
        >
            <CloudSun
                size={24}
                color="#facc15"
                className={`${iconBaseClass} absolute ${
                    theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
            />
            <CloudMoon
                size={24}
                color="#60a5fa"
                className={`${iconBaseClass} absolute ${
                    theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
            />
        </Button>
    );
}
