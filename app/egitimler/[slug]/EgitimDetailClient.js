'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function EgitimDetailClient({ egitim }) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-toc]');
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120) current = index;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs" style={{ color: 'color-mix(in srgb, var(--foreground) 40%, transparent)' }}>
            <Link href="/" className="hover:text-blue-600 transition-colors">Anasayfa</Link>
            <span>/</span>
            <Link href="/egitimler" className="hover:text-blue-600 transition-colors">Eğitimler</Link>
            <span>/</span>
            <span style={{ color: 'color-mix(in srgb, var(--foreground) 60%, transparent)' }}>{egitim.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sol: İçerik */}
            <div className="flex-1 min-w-0">
              <span
                className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md mb-4"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--foreground) 6%, transparent)',
                  color: 'color-mix(in srgb, var(--foreground) 50%, transparent)',
                }}
              >
                {egitim.category}
              </span>
              <h1
                className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                {egitim.title}
              </h1>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}
              >
                {egitim.fullDescription}
              </p>

              {/* Özellikler */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {egitim.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs py-2 px-3 rounded-lg"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--foreground) 4%, transparent)' }}
                  >
                    <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: 'color-mix(in srgb, var(--foreground) 65%, transparent)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Başvuru Yap
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/egitimler"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-colors hover:bg-foreground/5"
                  style={{
                    color: 'color-mix(in srgb, var(--foreground) 70%, transparent)',
                    borderColor: 'color-mix(in srgb, var(--foreground) 12%, transparent)',
                  }}
                >
                  Tüm Eğitimler
                </Link>
              </div>
            </div>

            {/* Sağ: Görsel */}
            <div className="lg:w-[420px] flex-shrink-0">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src={egitim.image}
                  alt={egitim.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İçindekiler + Detay */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* İçindekiler (Sidebar) */}
            <aside className="lg:w-[260px] flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h3
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}
                >
                  İçindekiler
                </h3>
                <nav className="space-y-1">
                  {egitim.content.map((section, i) => (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className={`block text-xs py-2 px-3 rounded-lg transition-all duration-200 ${
                        activeSection === i
                          ? 'bg-blue-600/10 text-blue-600 font-semibold'
                          : 'hover:bg-foreground/5'
                      }`}
                      style={activeSection !== i ? { color: 'color-mix(in srgb, var(--foreground) 50%, transparent)' } : {}}
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Detay İçerik */}
            <div className="flex-1 min-w-0 space-y-12">
              {egitim.content.map((section, i) => (
                <div key={i} id={`section-${i}`} data-toc>
                  <h2
                    className="text-lg font-bold mb-3"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {section.heading}
                  </h2>
                  {section.text && (
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}
                    >
                      {section.text}
                    </p>
                  )}
                  {section.list && section.list.length > 0 && (
                    <ul className="space-y-2">
                      {section.list.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm"
                          style={{ color: 'color-mix(in srgb, var(--foreground) 60%, transparent)' }}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alt CTA */}
      <section className="pb-20 px-4">
        <div
          className="max-w-4xl mx-auto text-center rounded-2xl p-10 border"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--foreground) 3%, var(--background))',
            borderColor: 'color-mix(in srgb, var(--foreground) 6%, transparent)',
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
            Bu Eğitim Hakkında Bilgi Almak İster Misiniz?
          </h2>
          <p className="text-sm mb-6" style={{ color: 'color-mix(in srgb, var(--foreground) 50%, transparent)' }}>
            Uzman ekibimiz size yardımcı olmak için hazır.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            İletişime Geçin
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
