'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

function formatPrice(value) {
  return `${new Intl.NumberFormat('tr-TR').format(value)} TL`;
}

const cardVisuals = [
  '/certificates/stock-1.svg',
  '/certificates/stock-2.svg',
  '/certificates/stock-3.svg',
  '/certificates/stock-4.svg',
  '/certificates/stock-5.svg',
  '/certificates/stock-6.svg'
];

export default function SertifikalarCatalogClient({ categories, summary }) {
  const [query, setQuery] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('Tum Kategoriler');
  const [visibleCount, setVisibleCount] = useState(24);

  const labels = useMemo(() => {
    const uniqueLabels = Array.from(new Set(categories.map(item => item.label))).sort((a, b) => a.localeCompare(b, 'tr'));
    return ['Tum Kategoriler', ...uniqueLabels];
  }, [categories]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('tr');

    return categories.filter(item => {
      const matchesLabel = selectedLabel === 'Tum Kategoriler' || item.label === selectedLabel;
      const matchesQuery =
        normalizedQuery.length === 0 || item.title.toLocaleLowerCase('tr').includes(normalizedQuery) || item.label.toLocaleLowerCase('tr').includes(normalizedQuery);

      return matchesLabel && matchesQuery;
    });
  }, [categories, query, selectedLabel]);

  const listedItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background text-foreground pb-16 pt-28 md:pt-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <section className="surface-card overflow-hidden">
          <div className="grid gap-6 bg-[var(--surface)] p-6 md:grid-cols-[1.4fr_1fr] md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">Sertifika Programlari</p>
              <h1 className="mt-3 text-3xl md:text-4xl">Tum Sertifikalar</h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75 md:text-base">
                Inci Akademi ile tum sertifika programlarini tek ekranda inceleyebilir, uygun programi secerek online basvuru baslatabilir ve destek ekibimizden hizli geri donus
                alabilirsiniz.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-foreground/70 md:text-sm">
                <span className="rounded-full border border-foreground/15 bg-background px-3 py-1.5">E-Devlet Onayli</span>
                <span className="rounded-full border border-foreground/15 bg-background px-3 py-1.5">Universite Onayli</span>
                <span className="rounded-full border border-foreground/15 bg-background px-3 py-1.5">WhatsApp Kayit</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-foreground/10 bg-background/80 p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/55">01 Toplam Kategori</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--brand-strong)]">{summary.categoryCount}</p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background/80 p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/55">02 Toplam Egitim</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--brand-strong)]">{summary.trainingCount}</p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background/80 p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/55">03 Online Basvuru</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--brand-strong)]">7/24</p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background/80 p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/55">04 Hizli Destek</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--brand-strong)]">WhatsApp</p>
              </div>
            </div>
          </div>
        </section>

        <section className="surface-card mt-6 p-5 md:p-6">
          <div className="grid gap-3 md:grid-cols-[2fr_1fr_auto] md:items-center">
            <label className="relative block">
              <span className="sr-only">Sertifika ara</span>
              <input
                value={query}
                onChange={event => {
                  setQuery(event.target.value);
                  setVisibleCount(24);
                }}
                placeholder="Program veya kategori adi ile ara..."
                className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--brand)]"
              />
            </label>

            <select
              value={selectedLabel}
              onChange={event => {
                setSelectedLabel(event.target.value);
                setVisibleCount(24);
              }}
              className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--brand)]"
            >
              {labels.map(label => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedLabel('Tum Kategoriler');
                setVisibleCount(24);
              }}
              className="rounded-xl border border-foreground/15 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-[var(--brand)]"
            >
              Temizle
            </button>
          </div>

          <p className="mt-4 text-sm text-foreground/70">{filteredItems.length} program listeleniyor</p>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {listedItems.map(item => (
            <article
              key={item.slug}
              className="group relative overflow-hidden rounded-2xl border border-foreground/15 bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(16,26,43,0.45)]"
            >
              <Link href={`/sertifikalar/${item.slug}`} aria-label={`${item.title} detay sayfasi`} className="absolute inset-0 z-10" />

              <div className="pointer-events-none relative h-72 overflow-hidden bg-slate-100">
                <Image src={cardVisuals[item.id % cardVisuals.length]} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                  <span className="rounded-2xl bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#446a5d] shadow-sm">{item.label}</span>
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-[#1f7d53] px-3 py-2 text-[11px] font-semibold text-white shadow-sm">
                    <span className="text-[12px] leading-none text-[#9cf2c6]">●</span>
                    <span>Online</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <p className="rounded-xl bg-black/24 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-[2px]">Inci Akademi</p>
                  <p className="rounded-xl border border-white/50 bg-white/20 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-[2px]">Sertifika</p>
                </div>
              </div>

              <div className="pointer-events-none p-5">
                <h2 className="line-clamp-2 text-2xl leading-snug text-[#0f5e4a]">{item.title}</h2>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <span className="rounded-xl border border-foreground/12 bg-background px-2 py-2.5 text-center text-[11px] font-medium leading-tight text-foreground/70">
                    📜 E-Devlet Onayli
                  </span>
                  <span className="rounded-xl border border-foreground/12 bg-background px-2 py-2.5 text-center text-[11px] font-medium leading-tight text-foreground/70">
                    ⚡ Hizli Kayit
                  </span>
                  <span className="rounded-xl border border-foreground/12 bg-background px-2 py-2.5 text-center text-[11px] font-medium leading-tight text-foreground/70">
                    🔒 Guvenli Odeme
                  </span>
                </div>

                <div className="mt-4 flex items-end justify-between gap-3 border-t border-foreground/10 pt-4">
                  <div>
                    <p className="text-sm text-foreground/55">Fiyat</p>
                    <p className="mt-0.5 text-2xl font-bold leading-none text-foreground">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/905000000000?text=Merhaba, ${encodeURIComponent(item.title)} programi hakkinda bilgi almak istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.title} icin WhatsApp`}
                      title="WhatsApp"
                      className="pointer-events-auto relative z-20 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#25d366] text-white transition-colors hover:bg-[#1ebe5c]"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19.05 4.94A9.94 9.94 0 0 0 12 2c-5.5 0-10 4.5-10 10 0 1.75.46 3.46 1.33 4.97L2 22l5.19-1.3A9.96 9.96 0 0 0 12 22c5.5 0 10-4.5 10-10 0-2.67-1.04-5.19-2.95-7.06ZM12 20.19a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.77.82-3-.2-.31a8.18 8.18 0 1 1 6.89 3.85Zm4.49-6.08c-.25-.13-1.47-.73-1.69-.82-.23-.08-.4-.12-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.07-.4-2.04-1.29-.75-.66-1.26-1.48-1.4-1.73-.15-.25-.02-.38.1-.5.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.42 1.44.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.09-.23-.15-.48-.27Z" />
                      </svg>
                    </a>
                    <Link
                      href={`/sertifikalar/${item.slug}`}
                      className="pointer-events-auto relative z-20 inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-[#0c6b43] px-5 text-sm font-bold text-white transition-colors hover:bg-[#095a37]"
                    >
                      Hemen Basvur
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {visibleCount < filteredItems.length && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount(current => current + 24)}
              className="brand-button rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]"
            >
              Daha Fazla Goster
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
