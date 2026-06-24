'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo ve Marka */}
          <Link href="/" className="flex items-center gap-x-2 z-50">
            <Image src="/inci-isg-logo.png" width={130} height={55} alt="inci isg logo" className="object-contain" />
          </Link>

          {/* Masaüstü Navigasyon Linkleri */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.path}
                    className={`relative text-sm font-medium tracking-wide uppercase py-2 transition-all duration-300 group ${
                      isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white drop-shadow-sm'
                    }`}
                  >
                    {item.title}

                    {/* Şık Sürmeli Hover Çizgisi Efecti */}
                    <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-blue-600' : 'bg-white'}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobil Hamburger Butonu (Z-index ile menünün üstünde kalması sağlandı) */}
          <div className="flex items-center md:hidden z-50">
            <button
              className={`focus:outline-none p-2 transition-colors duration-300 ${state || isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}
              onClick={() => setState(!state)}
              aria-label="Menüyü Aç/Kapat"
            >
              {state ? (
                // Çarpı İkonu
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger İkonu
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobil Tam Ekran Popover Menü */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col justify-center p-8 transition-all duration-300 md:hidden ${
            state ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ul className="space-y-6 text-center">
            {navigation.map((item, idx) => (
              <li key={idx} data-aos={state ? 'fade-up' : ''} data-aos-delay={idx * 50}>
                <Link
                  href={item.path}
                  onClick={() => setState(false)} // Linke tıklanınca menüyü kapat
                  className="block text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
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
