'use client';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }) {
  return (
    // attribute="data-theme" olarak ayarlandığından emin olun
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
