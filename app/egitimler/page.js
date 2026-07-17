import Link from 'next/link';
import { trainingCategories, trainingItems } from '@/data/trainingCatalog';

export const metadata = {
  title: 'Tüm Eğitimler | İnci Akademi',
  description: 'İSG zorunlu eğitimlerden iş makinesi operatörlüğüne, hijyen belgelerinden mesleki yeterlilik programlarına kapsamlı eğitim kataloğumuz.'
};

export default function EgitimlerPage() {
  return (
    <div className="min-h-screen bg-background pb-20 pt-28 text-foreground md:pt-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* ── Hero ─────────────────────────────────── */}
        <section className="surface-card p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Eğitim Programları</p>
          <h1 className="mt-3 text-3xl md:text-4xl">Tüm Eğitimler</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75 md:text-base">
            İnci Akademi olarak zorunlu İSG eğitimlerinden iş makinesi operatör eğitimlerine, hijyen belgelerinden mesleki yeterlilik programlarına kadar geniş bir eğitim kataloğu
            sunuyoruz.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {trainingCategories.map(cat => {
              const count = trainingItems.filter(t => t.categorySlug === cat.slug).length;
              return (
                <a
                  key={cat.slug}
                  href={`#${cat.slug}`}
                  className="rounded-full border border-foreground/15 bg-background px-3 py-1.5 text-xs transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  {cat.title}
                  <span className="ml-1.5 text-foreground/45">{count}</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* ── Trainings by category ─────────────────── */}
        {trainingCategories.map(cat => {
          const items = trainingItems.filter(t => t.categorySlug === cat.slug);
          if (!items.length) return null;
          return (
            <section key={cat.slug} id={cat.slug} className="mt-10 scroll-mt-28">
              <div className="flex items-baseline justify-between gap-4 mb-5">
                <h2 className="text-2xl">{cat.title}</h2>
                <span className="text-xs text-foreground/50">{items.length} eğitim</span>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map(item => (
                  <article key={item.slug} className="surface-card flex flex-col p-5 transition-transform duration-200 hover:-translate-y-0.5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full border border-foreground/12 bg-background px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-foreground/65">
                        {item.categoryLabel}
                      </span>
                      <span className="shrink-0 text-xs text-foreground/50">{item.duration}</span>
                    </div>

                    <h3 className="mt-3 text-lg leading-snug">{item.title}</h3>
                    <p className="mt-2 grow text-sm leading-relaxed text-foreground/65 line-clamp-2">{item.summary}</p>

                    <div className="mt-4 flex items-center justify-between border-t border-foreground/10 pt-4">
                      <span className="text-xs text-foreground/50">
                        Geçerlilik:&nbsp;<span className="text-foreground/75 font-medium">{item.validity}</span>
                      </span>
                      <Link href={`/hizmetler/${item.slug}`} className="brand-button rounded-lg px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em]">
                        İncele
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        {/* ── Bottom CTA ──────────────────────────────── */}
        <section className="mt-14 surface-card p-6 md:p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">Kurumsal Eğitim</p>
          <h2 className="mt-3 text-2xl md:text-3xl">Şirketinize özel eğitim programı mı istiyorsunuz?</h2>
          <p className="mt-3 mx-auto max-w-xl text-sm leading-relaxed text-foreground/70">
            Ekibimiz ihtiyaç analizinizi yaparak sektörünüze ve kadronuza uygun eğitim takvimi hazırlar.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/iletisim" className="brand-button rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]">
              Teklif Al
            </Link>
            <a
              href="https://wa.me/905000000000?text=Merhaba, kurumsal eğitim programı hakkında bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-foreground/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:border-[var(--brand)]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.05 4.94A9.94 9.94 0 0 0 12 2c-5.5 0-10 4.5-10 10 0 1.75.46 3.46 1.33 4.97L2 22l5.19-1.3A9.96 9.96 0 0 0 12 22c5.5 0 10-4.5 10-10 0-2.67-1.04-5.19-2.95-7.06ZM12 20.19a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.77.82-3-.2-.31a8.18 8.18 0 1 1 6.89 3.85Zm4.49-6.08c-.25-.13-1.47-.73-1.69-.82-.23-.08-.4-.12-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.07-.4-2.04-1.29-.75-.66-1.26-1.48-1.4-1.73-.15-.25-.02-.38.1-.5.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.42 1.44.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.09-.23-.15-.48-.27Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
