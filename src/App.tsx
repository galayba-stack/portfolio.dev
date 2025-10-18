import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { Navigation } from "./components/Navigation.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { AboutSection } from "./components/AboutSection.tsx";
import { SkillsSection } from "./components/SkillsSection.tsx";
import { ProjectsSection } from "./components/ProjectsSection.tsx";
import { ExperienceSection } from "./components/ExperienceSection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import { Footer } from "./components/Footer.tsx";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="portfolio-theme"
    >
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}