import { Button } from "./ui/button.tsx";
import { List, X } from "phosphor-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle.tsx";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm dark:shadow-lg dark:shadow-primary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-poppins font-bold text-lg text-primary">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <button
                      key={item.id}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </button>
              ))}
              <div onClick={(e) => e.stopPropagation()}>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <div onClick={(e) => e.stopPropagation()}>
                <ThemeToggle />
              </div>
              <Button
                  variant="ghost"
                  size="sm"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMenuOpen(!isMenuOpen);
                  }}
              >
                {isMenuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="md:hidden pb-4 border-t border-border mt-4 pt-4">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                      <button
                          key={item.id}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id);
                          }}
                          className="text-left text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                      >
                        {item.label}
                      </button>
                  ))}
                </div>
              </div>
          )}
        </div>
      </nav>
  );
}
