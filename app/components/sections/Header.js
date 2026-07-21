'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import { navigationLinks } from '@/config/navigation';

const Header = () => {
  const [state, setState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = navigationLinks;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [state]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        state ? 'bg-background' : isScrolled ? 'bg-background/80 backdrop-blur-md  shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Arka plan karartma katmanı */}
      {!isScrolled && !state && <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-24 -z-10" />}

      {/* h-20 Sabit Yükseklikte Üst Bar */}
      <nav className="max-w-screen-xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative z-50 bg-transparent">
        {/* Logo */}
        <Link href="/" onClick={() => setState(false)} className="flex items-center gap-x-2 z-50">
          <Image src="/inci-isg-logo.png" width={80} height={34} alt="inci isg logo" loading="eager" className="object-contain w-auto h-auto" />
        </Link>

        {/* Masaüstü Navigasyon */}
        <div className="hidden md:flex items-center gap-x-8">
          <ul className="flex items-center space-x-8">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className={`relative text-sm font-medium tracking-wide uppercase py-2 transition-all duration-300 group ${
                    isScrolled ? 'text-foreground/80 hover:text-blue-600' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-white'
                  }`}
                >
                  {item.title}
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-blue-600' : 'bg-white'}`} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-l border-foreground/20 pl-6">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobil Sağ Butonlar */}
        <div className="flex items-center gap-x-4 md:hidden z-50">
          <ThemeToggle />
          <button
            className={`focus:outline-none p-2 transition-colors duration-300 ${state || isScrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}
            onClick={() => setState(!state)}
            aria-label="Menüyü Aç/Kapat"
          >
            {state ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* İSTEDİĞİNİZ AKICI GEÇİŞ (Slide & Fade-in transition) */}
        <div
          className={`md:hidden fixed top-20 inset-x-0 h-[calc(100vh-5rem)] bg-background flex flex-col justify-center items-center transform transition-all duration-500 ease-in-out border-t border-foreground/5 ${
            state ? 'translate-y-0 opacity-100 pointer-events-auto shadow-2xl' : '-translate-y-10 opacity-0 pointer-events-none'
          }`}
        >
          <ul className="space-y-6 text-center w-full px-6 -mt-16">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className={`w-full transform transition-all duration-500 ease-out delay-[${idx * 50}ms] ${state ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              >
                <Link
                  href={item.path}
                  onClick={() => setState(false)}
                  className="block text-xl font-bold tracking-wider text-foreground hover:text-blue-600 active:text-blue-700 py-3 uppercase transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
