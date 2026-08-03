'use client';
import { useTheme } from '@/app/providers';

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Tema değiştir"
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
    >
      <span className="block dark:hidden">🌙</span>
      <span className="hidden dark:block">☀️</span>
    </button>
  );
}
