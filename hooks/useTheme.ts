'use client';

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type ThemeMode = 'auto' | 'light' | 'dark';

// Check if it's daytime (6 AM - 6 PM)
const isDaytime = () => {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18;
};

// Get system preference
const getSystemTheme = (): Theme => {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
};

// Determine theme based on mode
const determineTheme = (mode: ThemeMode): Theme => {
  if (mode === 'auto') {
    // First check system preference, fallback to time-based
    const systemTheme = getSystemTheme();
    if (systemTheme === 'dark' || !isDaytime()) {
      return 'dark';
    }
    return 'light';
  }
  return mode;
};

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto');
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage after mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('themeMode') as ThemeMode;
    if (saved) {
      setThemeMode(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const theme = determineTheme(themeMode);
    setCurrentTheme(theme);

    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save preference
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (themeMode === 'auto') {
        const theme = determineTheme('auto');
        setCurrentTheme(theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode, mounted]);

  // Check time every minute when in auto mode
  useEffect(() => {
    if (!mounted || themeMode !== 'auto') return;
    
    const interval = setInterval(() => {
      const theme = determineTheme('auto');
      if (theme !== currentTheme) {
        setCurrentTheme(theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [themeMode, currentTheme, mounted]);

  const setTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
  };

  return { currentTheme, themeMode, setTheme, mounted };
};
