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
      type="button"
      onClick={toggleTheme}
      aria-label="Tema değiştir"
      className="relative w-11 h-6 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-1 cursor-pointer"
    >
      <span className="absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white dark:bg-slate-950 shadow-md flex items-center justify-center transition-transform duration-300 dark:translate-x-5">
        <svg className="w-3.5 h-3.5 text-amber-500 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <svg className="w-3.5 h-3.5 text-indigo-300 hidden dark:block" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
