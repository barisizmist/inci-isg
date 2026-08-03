'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import { navigationLinks } from '@/config/navigation';
import { sertifikaKategorileri, SERTIFIKA_SAYISI } from '@/data/sertifikaMeta';
import { egitimlerData } from '@/data/egitimlerData';

const MEGA_MENU_CATEGORIES = sertifikaKategorileri;

const Header = () => {
  const [state, setState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isEgitimOpen, setIsEgitimOpen] = useState(false);
  const megaTimerRef = useRef(null);
  const egitimTimerRef = useRef(null);

  const navigation = navigationLinks;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = state ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [state]);

  const handleMegaEnter = () => {
    clearTimeout(megaTimerRef.current);
    setIsMegaMenuOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimerRef.current = setTimeout(() => setIsMegaMenuOpen(false), 200);
  };

  const handleEgitimEnter = () => {
    clearTimeout(egitimTimerRef.current);
    setIsEgitimOpen(true);
  };
  const handleEgitimLeave = () => {
    egitimTimerRef.current = setTimeout(() => setIsEgitimOpen(false), 200);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        state ? 'bg-background shadow-md' : 'bg-transparent'
      }`}
    >
      {!state && <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent h-24 -z-10" />}

      <nav className="max-w-screen-xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative z-50">
        <Link href="/" onClick={() => setState(false)} className="flex items-center gap-x-2 z-50">
          <Image src="/inci-isg-logo.png" width={80} height={34} alt="inci isg logo" loading="eager" className="object-contain w-auto h-auto" />
        </Link>

        {/* Masaüstü */}
        <div className="hidden lg:flex items-center gap-x-8">
          <ul className="flex items-center space-x-8">
            {navigation.map((item, idx) => {
              const isHeaderDark = state;

              if (item.path === '/sertifikalar' || item.isMegaMenu) {
                return (
                  <li
                    key={idx}
                    className="relative group/py-7"
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsMegaMenuOpen(false)}
                      className={`relative text-sm font-medium tracking-wide uppercase py-2 transition-all duration-300 flex items-center gap-1.5 ${
                        isHeaderDark ? 'text-foreground/80 hover:text-blue-600' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-white'
                      }`}
                    >
                      {item.title}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-blue-600' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Boşluk köprüsü — <li> ile mega menü arasındaki boşluğu doldurur */}
                    <div
                      className="absolute left-0 right-0 top-full h-6 z-40"
                      onMouseEnter={handleMegaEnter}
                    />

                    {/* Mega Menü — container genişliğinde, border her yerde görünür */}
                    <div
                      className={`fixed top-20 left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-screen-xl rounded-xl border-x border-b shadow-xl transition-all duration-200 ${
                        isMegaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                      }`}
                      style={{ backgroundColor: 'color-mix(in srgb, var(--background) 95%, transparent)', backdropFilter: 'blur(12px)', borderColor: 'color-mix(in srgb, var(--foreground) 10%, transparent)' }}
                      onMouseEnter={handleMegaEnter}
                    >
                      <div className="px-8 pt-5 pb-6">
                        {/* Üst: Başlık + Tümünü Gör */}
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tüm Kategoriler</h3>
                          <Link
                            href="/sertifikalar"
                            onClick={() => setIsMegaMenuOpen(false)}
                            className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                          >
                            Sertifikaları Keşfet
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>

                        {/* Kategori Grid — tam genişlik, 5-6 kolon */}
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-0 pb-8">
                          {MEGA_MENU_CATEGORIES.map(cat => (
                            <Link
                              key={cat.id}
                              href={`/sertifikalar?kategori=${cat.id}`}
                              onClick={() => setIsMegaMenuOpen(false)}
                              className="group py-2 text-[12px] font-medium text-foreground/60 hover:text-blue-600 transition-colors truncate"
                              style={{ borderBottom: '1px solid color-mix(in srgb, var(--foreground) 6%, transparent)' }}
                            >
                              {cat.label}
                            </Link>
                          ))}
                        </div>

                        {/* Alt */}
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              <span className="font-semibold text-foreground">{MEGA_MENU_CATEGORIES.length}</span> kategoride{' '}
                              <span className="font-semibold text-foreground">{SERTIFIKA_SAYISI.toLocaleString('tr-TR')}</span> eğitim
                            </span>
                            <Link
                              href="/sertifikalar"
                              onClick={() => setIsMegaMenuOpen(false)}
                              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                              Aradığınız kategoriyi bulamadınız mı?
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }

              if (item.hasDropdown) {
                return (
                  <li
                    key={idx}
                    className="relative"
                    onMouseEnter={handleEgitimEnter}
                    onMouseLeave={handleEgitimLeave}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsEgitimOpen(false)}
                      className={`relative text-sm font-medium tracking-wide uppercase py-2 transition-all duration-300 flex items-center gap-1.5 ${
                        isHeaderDark ? 'text-foreground/80 hover:text-blue-600' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-white'
                      }`}
                    >
                      {item.title}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isEgitimOpen ? 'rotate-180 text-blue-600' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Boşluk köprüsü */}
                    <div
                      className="absolute left-0 right-0 top-full h-6 z-40"
                      onMouseEnter={handleEgitimEnter}
                    />

                    {/* Dropdown */}
                    <div
                      className={`fixed left-1/2 -translate-x-1/2 top-20 w-[320px] rounded-xl shadow-xl transition-all duration-200 ${
                        isEgitimOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                      }`}
                      style={{ backgroundColor: 'color-mix(in srgb, var(--background) 95%, transparent)', backdropFilter: 'blur(12px)' }}
                      onMouseEnter={handleEgitimEnter}
                    >
                      <div className="p-3">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2 px-2" style={{ color: 'color-mix(in srgb, var(--foreground) 40%, transparent)' }}>
                          Eğitimler
                        </h3>
                        <nav className="space-y-0.5">
                          {egitimlerData.map((egitim) => (
                            <Link
                              key={egitim.id}
                              href={`/egitimler/${egitim.slug}`}
                              onClick={() => setIsEgitimOpen(false)}
                              className="block text-xs font-medium py-2 px-2.5 rounded-lg transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/30"
                              style={{ color: 'color-mix(in srgb, var(--foreground) 60%, transparent)' }}
                            >
                              {egitim.title}
                            </Link>
                          ))}
                        </nav>
                        <div className="mt-2 pt-2 border-t" style={{ borderColor: 'color-mix(in srgb, var(--foreground) 8%, transparent)' }}>
                          <Link
                            href="/egitimler"
                            onClick={() => setIsEgitimOpen(false)}
                            className="block text-[11px] font-semibold text-blue-600 hover:text-blue-700 px-2.5 py-1.5 transition-colors"
                          >
                            Tüm Eğitimler →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={idx}>
                  <Link
                    href={item.path}
                    className={`relative text-sm font-medium tracking-wide uppercase py-2 transition-all duration-300 group ${
                      isHeaderDark ? 'text-foreground/80 hover:text-blue-600' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-white'
                    }`}
                  >
                    {item.title}
                    <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isHeaderDark ? 'bg-blue-600' : 'bg-white'}`} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="border-l border-foreground/20 pl-6">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobil Butonlar */}
        <div className="flex items-center gap-x-4 lg:hidden z-50">
          <ThemeToggle />
          <button
            className={`focus:outline-none p-2 transition-colors duration-300 ${state ? 'text-foreground' : 'text-white drop-shadow-md'}`}
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

        {/* Mobil Menü */}
        <div
          className={`lg:hidden fixed top-20 inset-x-0 h-[calc(100vh-5rem)] bg-background flex flex-col justify-start overflow-y-auto items-center transform transition-all duration-500 ease-in-out border-t border-border p-6 ${
            state ? 'translate-y-0 opacity-100 pointer-events-auto shadow-2xl' : '-translate-y-10 opacity-0 pointer-events-none'
          }`}
        >
          <ul className="space-y-4 text-center w-full max-w-sm">
            {navigation.map((item, idx) => (
              <li key={idx} className="w-full">
                {item.hasDropdown ? (
                  <Link
                    href={item.path}
                    onClick={() => setState(false)}
                    className="block text-lg font-bold tracking-wider text-foreground hover:text-blue-600 py-2.5 uppercase transition-colors"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => setState(false)}
                    className="block text-lg font-bold tracking-wider text-foreground hover:text-blue-600 py-2.5 uppercase transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
