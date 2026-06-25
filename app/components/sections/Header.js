'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const [state, setState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { title: 'HAKKIMIZDA', path: '/hakkimizda' },
    { title: 'HİZMETLER', path: '/hizmetler' },
    { title: 'REFERANSLAR', path: '/referanslar' },
    { title: 'GALERİ', path: '/galeri' },
    { title: 'BLOG', path: '/blog' },
    { title: 'İLETİŞİM', path: '/iletisim' }
  ];

  // Sayfa kaydırıldıkça header stilini değiştirmek için scroll dinleyicisi
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

  // Mobil menü açıkken arkadaki sayfanın kaymasını engelleme (UX Dokunuşu)
  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [state]);

  return (
    // Header.jsx güncellenmiş hali
    // Header.jsx - Tailwind v4 Değişken Yapısına Uyumlu
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-foreground/10 shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      {/* Sadece resim üzerinde (isScrolled=false) iken metinlerin arkasına hafif karartma ekleyen katman */}
      {!isScrolled && <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-24 -z-10" />}

      <nav className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-2 z-50">
            <Image src="/inci-isg-logo.png" width={130} height={55} alt="inci isg logo" className="object-contain" />
          </Link>

          {/* Masaüstü Nav + ThemeToggle */}
          <div className="hidden md:flex items-center gap-x-8">
            <ul className="flex items-center space-x-8">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.path}
                    // drop-shadow ile resim üzerinde bile okunabilir olmasını sağladık
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

          {/* Mobil Hamburger + ThemeToggle */}
          <div className="flex items-center gap-x-4 md:hidden z-50">
            <ThemeToggle />
            <button
              className={`focus:outline-none p-2 transition-colors duration-300 ${state || isScrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}
              onClick={() => setState(!state)}
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
