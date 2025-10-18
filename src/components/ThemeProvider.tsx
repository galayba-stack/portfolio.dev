import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'portfolio-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(storageKey);
        return (stored as Theme) || defaultTheme;
      } catch (error) {
        console.error('Error reading theme from localStorage:', error);
        return defaultTheme;
      }
    }
    return defaultTheme;
  });

  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    
    console.log('Applying theme:', newTheme); // Debug log
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      
      console.log('System theme detected:', systemTheme); // Debug log
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
    
    console.log('Current classes:', root.classList.toString()); // Debug log
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      applyTheme(theme);
    }
  }, [theme]);

  // Listen for system theme changes when theme is set to 'system'
  useEffect(() => {
    if (theme === 'system' && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = () => {
        console.log('System theme changed'); // Debug log
        applyTheme(theme);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      console.log('Theme change requested:', newTheme); // Debug log
      
      // Update localStorage
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(storageKey, newTheme);
        } catch (error) {
          console.error('Error saving theme to localStorage:', error);
        }
      }
      
      // Update state
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};