'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import { navigationLinks } from '@/config/navigation';
import { certificateCategories, certificateCatalogSummary } from '@/data/certificateCatalog';

const Header = () => {
  const [state, setState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const megaMenuCloseTimerRef = useRef(null);

  const navigation = navigationLinks.filter(item => item.path !== '/' && item.path !== '/egitimler');
  const textClass = isScrolled ? 'text-foreground/80 hover:text-[var(--brand)]' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-white';
  let headerClass = 'bg-transparent';
  if (state) {
    headerClass = 'bg-background';
  } else if (isScrolled) {
    headerClass = 'bg-background/90 backdrop-blur-lg shadow-sm border-b border-foreground/10';
  }

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

  useEffect(() => {
    return () => {
      if (megaMenuCloseTimerRef.current) {
        clearTimeout(megaMenuCloseTimerRef.current);
      }
    };
  }, []);

  const openMenu = name => {
    if (megaMenuCloseTimerRef.current) {
      clearTimeout(megaMenuCloseTimerRef.current);
      megaMenuCloseTimerRef.current = null;
    }
    setActiveMenu(name);
  };

  const scheduleCloseMenu = () => {
    if (megaMenuCloseTimerRef.current) {
      clearTimeout(megaMenuCloseTimerRef.current);
    }
    megaMenuCloseTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
      megaMenuCloseTimerRef.current = null;
    }, 150);
  };

  const closeMenuImmediately = () => {
    if (megaMenuCloseTimerRef.current) {
      clearTimeout(megaMenuCloseTimerRef.current);
      megaMenuCloseTimerRef.current = null;
    }
    setActiveMenu(null);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerClass}`}>
      {!isScrolled && !state && <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-24 -z-10" />}

      <nav className="max-w-screen-xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative z-50">
        <Link href="/" onClick={() => setState(false)} className="flex items-center gap-x-3 z-50">
          <Image src="/inci-isg-logo.png" width={84} height={36} alt="inci akademi logo" loading="eager" className="object-contain w-auto h-auto" />
          <div className="hidden sm:block">
            <p className={`text-[11px] uppercase tracking-[0.22em] ${isScrolled || state ? 'text-foreground/70' : 'text-white/80'}`}>Online Eğitim Platformu</p>
            <p className={`text-sm font-semibold ${isScrolled || state ? 'text-foreground' : 'text-white'}`}>İnci Akademi</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-x-8">
          <ul className="flex items-center space-x-6">
            <li className="relative group" onMouseLeave={scheduleCloseMenu}>
              <Link
                href="/sertifikalar"
                className={`relative text-xs font-semibold tracking-[0.14em] uppercase py-2 transition-all duration-300 ${textClass}`}
                aria-haspopup="true"
                aria-expanded={activeMenu === 'sertifikalar'}
                onMouseEnter={() => openMenu('sertifikalar')}
                onFocus={() => openMenu('sertifikalar')}
                onBlur={scheduleCloseMenu}
                onClick={closeMenuImmediately}
              >
                SERTİFİKALAR{' '}
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[var(--brand)]' : 'bg-white'}`} />
              </Link>

              <div
                className={`fixed left-1/2 -translate-x-1/2 top-[76px] z-[60] w-[min(1100px,calc(100vw-24px))] transition-opacity duration-150 ${
                  activeMenu === 'sertifikalar' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onMouseEnter={() => openMenu('sertifikalar')}
                onMouseLeave={scheduleCloseMenu}
              >
                <div className="surface-card bg-[var(--surface)] p-6 shadow-2xl overflow-hidden">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--brand)] font-semibold">Sertifika Katalogu</p>
                      <p className="text-sm text-foreground/75 mt-1">
                        {certificateCatalogSummary.categoryCount} kategoride {certificateCatalogSummary.trainingCount} egitim ve sertifika
                      </p>
                    </div>
                    <Link href="/sertifikalar" onClick={closeMenuImmediately} className="text-xs uppercase tracking-[0.14em] font-semibold text-[var(--brand)]">
                      Tum Kategoriler
                    </Link>
                  </div>

                  <div className="max-h-[420px] overflow-y-auto pr-2">
                    <div className="columns-1 md:columns-2 xl:columns-3 gap-4 [column-fill:_balance]">
                      {certificateCategories.map(item => (
                        <Link
                          key={item.slug}
                          href={`/sertifikalar/${item.slug}`}
                          onClick={closeMenuImmediately}
                          className="break-inside-avoid mb-2 rounded-lg border border-foreground/10 bg-background px-3 py-2 flex items-start justify-between gap-3 hover:border-[var(--brand)] transition-colors"
                        >
                          <span className="text-sm text-foreground/85 leading-snug min-w-0 break-words">{item.title}</span>
                          <span className="text-xs text-foreground/55 mt-0.5 shrink-0">{item.count > 0 ? item.count : '-'}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="relative group" onMouseLeave={scheduleCloseMenu}>
              <Link
                href="/egitimler"
                className={`relative text-xs font-semibold tracking-[0.14em] uppercase py-2 transition-all duration-300 ${textClass}`}
                aria-haspopup="true"
                aria-expanded={activeMenu === 'egitimler'}
                onMouseEnter={() => openMenu('egitimler')}
                onFocus={() => openMenu('egitimler')}
                onBlur={scheduleCloseMenu}
                onClick={closeMenuImmediately}
              >
                EĞİTİMLER{' '}
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[var(--brand)]' : 'bg-white'}`} />
              </Link>

              <div
                className={`fixed left-1/2 -translate-x-1/2 top-[76px] z-[60] w-72 transition-opacity duration-150 ${
                  activeMenu === 'egitimler' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onMouseEnter={() => openMenu('egitimler')}
                onMouseLeave={scheduleCloseMenu}
              >
                <div className="surface-card bg-[var(--surface)] py-2 shadow-2xl overflow-hidden">
                  {[
                    { title: 'Yangın Tatbikatı ve Eğitimleri', slug: 'yangin-egitimi-ve-tatbikati' },
                    { title: 'Yüksekte Çalışma Eğitimi', slug: 'yuksekte-calisma-egitimi' },
                    { title: 'İşaretçi Sapancı Eğitimleri', slug: 'isaretci-sapanci-egitimi' },
                    { title: 'Kapalı Kısıtlı Alanda Çalışma', slug: 'kapali-kisitli-alanda-calisma' },
                    { title: 'Acil Durum Müdahale Ekipleri Eğitimi', slug: 'acil-durum-mudahale-ekipleri' },
                    { title: 'Yaşam Hattı Uygulamaları', slug: 'yasam-hatti-uygulamalari' },
                    { title: 'Güvenlik Ağı Montaj Hizmetleri', slug: 'guvenlik-agi-montaj' },
                    { title: 'İlk Yardım Eğitimi', slug: 'ilk-yardim-egitimi' },
                    { title: 'Mobil Sağlık Hizmetleri', slug: 'mobil-saglik-hizmetleri' }
                  ].map(item => (
                    <Link
                      key={item.slug}
                      href={`/egitimler/${item.slug}`}
                      onClick={closeMenuImmediately}
                      className="block px-5 py-2.5 text-sm text-foreground/85 hover:bg-[var(--brand)]/8 hover:text-[var(--brand)] transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {navigation.map(item => (
              <li key={item.path}>
                <Link href={item.path} className={`relative text-xs font-semibold tracking-[0.14em] uppercase py-2 transition-all duration-300 group ${textClass}`}>
                  {item.title}
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[var(--brand)]' : 'bg-white'}`} />
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/iletisim" className="brand-button px-4 py-2 text-xs uppercase tracking-[0.14em] font-bold rounded-xl shadow-lg shadow-cyan-900/20 transition-colors">
            Hızlı Başvuru
          </Link>

          <div className="border-l border-foreground/20 pl-5">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-x-4 lg:hidden z-50">
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

        <div
          className={`lg:hidden fixed top-20 inset-x-0 h-[calc(100vh-5rem)] bg-background flex flex-col justify-center items-center transform transition-all duration-500 ease-in-out border-t border-foreground/5 ${
            state ? 'translate-y-0 opacity-100 pointer-events-auto shadow-2xl' : '-translate-y-10 opacity-0 pointer-events-none'
          }`}
        >
          <ul className="space-y-6 text-center w-full px-6 -mt-12">
            <li>
              <Link href="/" onClick={() => setState(false)} className="block text-xl font-bold tracking-wider text-foreground hover:text-[var(--brand)] py-2 uppercase">
                ANASAYFA
              </Link>
            </li>
            <li>
              <Link href="/egitimler" onClick={() => setState(false)} className="block text-xl font-bold tracking-wider text-foreground hover:text-[var(--brand)] py-2 uppercase">
                EĞİTİMLER
              </Link>
            </li>
            {navigation.map((item, idx) => (
              <li
                key={item.path}
                className={`w-full transform transition-all duration-500 ease-out delay-[${idx * 50}ms] ${state ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              >
                <Link
                  href={item.path}
                  onClick={() => setState(false)}
                  className="block text-xl font-bold tracking-wider text-foreground hover:text-[var(--brand)] py-2 uppercase transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/sertifikalar"
                onClick={() => setState(false)}
                className="block text-xl font-bold tracking-wider text-foreground hover:text-[var(--brand)] py-2 uppercase"
              >
                SERTIFIKALAR
              </Link>
            </li>
          </ul>

          <Link href="/iletisim" onClick={() => setState(false)} className="mt-10 brand-button px-6 py-3 rounded-xl text-xs uppercase tracking-[0.16em] font-bold">
            Hızlı Başvuru
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
