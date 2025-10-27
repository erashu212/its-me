import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { themeMode, setTheme } = useTheme();

  const themes = [
    { mode: 'light' as const, icon: Sun, label: 'Light' },
    { mode: 'dark' as const, icon: Moon, label: 'Dark' },
    { mode: 'auto' as const, icon: Monitor, label: 'Auto' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex gap-2 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        {themes.map(({ mode, icon: Icon, label }) => (
          <motion.button
            key={mode}
            onClick={() => setTheme(mode)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-lg transition-all duration-200 ${
              themeMode === mode
                ? 'bg-primary-600 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title={label}
            aria-label={`Switch to ${label} mode`}
          >
            <Icon className="w-5 h-5" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;

