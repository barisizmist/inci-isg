'use client';

import Link from 'next/link';
import Image from 'next/image';
import { egitimlerData } from '@/data/egitimlerData';

export default function EgitimlerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--foreground) 6%, transparent)',
              color: 'color-mix(in srgb, var(--foreground) 50%, transparent)',
            }}
          >
            İnci İSG
          </span>
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Hizmet ve Eğitimler
          </h1>
          <p
            className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6"
            style={{ color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}
          >
            Hizmet ve Eğitimler, bireylerin ve kurumların gelişimini destekleyen, alanında uzman kişiler tarafından sunulan profesyonel çözümleri kapsar.
          </p>
          <div className="flex items-center justify-center gap-3 text-xs font-medium" style={{ color: 'color-mix(in srgb, var(--foreground) 40%, transparent)' }}>
            <span>{egitimlerData.length} Eğitim</span>
            <span>•</span>
            <span>Profesyonel Eğitmenler</span>
            <span>•</span>
            <span>Modern Eğitim</span>
          </div>
        </div>
      </section>

      {/* Eğitimler Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {egitimlerData.map((egitim) => (
              <Link
                key={egitim.id}
                href={`/egitimler/${egitim.slug}`}
                className="group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--background)',
                  borderColor: 'color-mix(in srgb, var(--foreground) 8%, transparent)',
                }}
              >
                {/* Görsel */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={egitim.image}
                    alt={egitim.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--background) 85%, transparent)',
                      color: 'color-mix(in srgb, var(--foreground) 70%, transparent)',
                    }}
                  >
                    {egitim.category}
                  </span>
                </div>

                {/* İçerik */}
                <div className="p-5">
                  <h2
                    className="text-base font-bold mb-2 transition-colors duration-200 group-hover:text-blue-600"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {egitim.title}
                  </h2>
                  <p
                    className="text-xs leading-relaxed mb-4"
                    style={{ color: 'color-mix(in srgb, var(--foreground) 50%, transparent)' }}
                  >
                    {egitim.shortDescription}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition-all duration-200 group-hover:gap-2.5">
                    İncele
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-4">
        <div
          className="max-w-4xl mx-auto text-center rounded-2xl p-10 border"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--foreground) 3%, var(--background))',
            borderColor: 'color-mix(in srgb, var(--foreground) 6%, transparent)',
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
            Eğitim Hakkında Bilgi Almak İster Misiniz?
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
