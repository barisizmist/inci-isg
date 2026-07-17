import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { certificateCategories, getCertificateCategoryLabel, getCertificatePrice } from '@/data/certificateCatalog';

function formatPrice(value) {
  return `${new Intl.NumberFormat('tr-TR').format(value)} TL`;
}

const certificateVisuals = [
  '/certificates/stock-1.svg',
  '/certificates/stock-2.svg',
  '/certificates/stock-3.svg',
  '/certificates/stock-4.svg',
  '/certificates/stock-5.svg',
  '/certificates/stock-6.svg'
];

function getCertificateVisualById(id) {
  return certificateVisuals[id % certificateVisuals.length];
}

function buildProgramText(title) {
  return {
    intro: `${title} programi, mesleki gelisim hedeflerinize hizli ve uygulanabilir bir yol haritasi sunar. Program boyunca teorik bilgi ve saha odakli uygulamalar birlikte ele alinir.`,
    importance:
      'Bu alanda dogru egitim almak, hem yasal uyumluluk hem de profesyonel yetkinlik acisindan kritik bir avantaj saglar. Egitim sonunda edinilen bilgi, sahada daha guvenli ve verimli calisma disiplini kazandirir.',
    scope:
      'Egitim modulunde temel kavramlar, surec yonetimi, vaka analizleri ve guncel mevzuat basliklari yer alir. Katilimcilar, sinav ve degerlendirme adimlarina hazir hale getirilir.',
    certificate:
      'Programi basariyla tamamlayan katilimcilara universite is birligiyle dijital sertifika duzenlenir. Belgelendirme sureci danisman ekibimizin yonlendirmesiyle adim adim takip edilir.',
    audience:
      'Bu program sektore yeni adim atmak isteyenler, mevcut yetkinligini belgelemek isteyen profesyoneller ve kariyerinde uzmanlasmayi hedefleyen tum katilimcilar icin uygundur.'
  };
}

function buildRelatedItems(slug) {
  return certificateCategories
    .filter(item => item.slug !== slug)
    .slice(0, 6)
    .map(item => ({
      slug: item.slug,
      title: item.title,
      price: getCertificatePrice(item)
    }));
}

export function generateStaticParams() {
  return certificateCategories.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = certificateCategories.find(item => item.slug === slug);

  if (!category) {
    return {
      title: 'Sertifika Detayi | Inci Akademi'
    };
  }

  return {
    title: `${category.title} | Sertifika Detayi`,
    description: `${category.title} sertifika programinin detaylari, kayit adimlari ve on kayit formu.`
  };
}

export default async function SertifikalarDetayPage({ params }) {
  const { slug } = await params;
  const category = certificateCategories.find(item => item.slug === slug);

  if (!category) {
    notFound();
  }

  const label = getCertificateCategoryLabel(category);
  const price = getCertificatePrice(category);
  const content = buildProgramText(category.title);
  const relatedItems = buildRelatedItems(category.slug);

  return (
    <div className="min-h-screen bg-background pb-16 pt-28 text-foreground md:pt-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <nav className="mb-4 text-xs uppercase tracking-[0.14em] text-foreground/60">
          <Link href="/" className="hover:text-[var(--brand)]">
            Anasayfa
          </Link>{' '}
          /{' '}
          <Link href="/sertifikalar" className="hover:text-[var(--brand)]">
            Sertifikalar
          </Link>{' '}
          / <span className="text-foreground/80">{category.title}</span>
        </nav>

        <div className="grid items-start gap-6 lg:grid-cols-[1.45fr_0.95fr]">
          <article className="surface-card overflow-hidden p-6 md:p-8">
            <span className="inline-flex rounded-full border border-foreground/15 bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/70">
              {label}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl">{category.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">{content.intro}</p>

            <div className="mt-6 overflow-hidden rounded-xl border border-foreground/10">
              <div className="relative h-64 bg-slate-100 md:h-72">
                <Image src={getCertificateVisualById(category.id)} alt={category.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-strong)]">
                  E-Devlet Onayli
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-xl border border-foreground/10 bg-background p-3 text-sm">E-Devlet Onayli</div>
              <div className="rounded-xl border border-foreground/10 bg-background p-3 text-sm">Universite Is Birligi</div>
              <div className="rounded-xl border border-foreground/10 bg-background p-3 text-sm">Hizli Kayit ve Danismanlik</div>
              <div className="rounded-xl border border-foreground/10 bg-background p-3 text-sm">Guvenli Odeme</div>
              <div className="rounded-xl border border-foreground/10 bg-background p-3 text-sm">Belge Dogrulama</div>
              <div className="rounded-xl border border-foreground/10 bg-background p-3 text-sm">7/24 Destek</div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-foreground/15 bg-background px-3 py-1 text-xs">Aciklama</span>
              <span className="rounded-full border border-foreground/15 bg-background px-3 py-1 text-xs">Sikca Sorulanlar</span>
              <span className="rounded-full border border-foreground/15 bg-background px-3 py-1 text-xs">Sinav</span>
              <span className="rounded-full border border-foreground/15 bg-background px-3 py-1 text-xs">Yorum</span>
            </div>

            <section className="mt-6 space-y-6 text-foreground/80">
              <div>
                <h2 className="text-2xl">{category.title} Egitimi ile Fark Yaratin</h2>
                <p className="mt-2 leading-relaxed">{content.importance}</p>
              </div>
              <div>
                <h3 className="text-xl">Egitim Icerigi ve Hedefler</h3>
                <p className="mt-2 leading-relaxed">{content.scope}</p>
              </div>
              <div>
                <h3 className="text-xl">Sertifika ve Belgelendirme</h3>
                <p className="mt-2 leading-relaxed">{content.certificate}</p>
              </div>
              <div>
                <h3 className="text-xl">Kimler Katilabilir?</h3>
                <p className="mt-2 leading-relaxed">{content.audience}</p>
              </div>
            </section>

            <section className="mt-8 rounded-xl border border-foreground/10 bg-background p-5">
              <h3 className="text-xl">Sikca Sorulanlar</h3>
              <div className="mt-4 space-y-3 text-sm text-foreground/75">
                <p className="rounded-lg border border-foreground/10 p-3">Egitim online olarak canli ve kayitli iceriklerle sunulur.</p>
                <p className="rounded-lg border border-foreground/10 p-3">Belgelendirme sureci basvuru evraklari tamamlandiktan sonra baslatilir.</p>
                <p className="rounded-lg border border-foreground/10 p-3">Program detaylari icin kayit oncesinde danisman gorusmesi saglanir.</p>
              </div>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="surface-card p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Kayit Ucreti</p>
              <p className="mt-2 text-4xl font-semibold text-[var(--brand-strong)]">{formatPrice(price)}</p>
              <p className="mt-2 text-sm text-foreground/70">Guvenli odeme altyapisi ile kaydinizi aninda tamamlayabilirsiniz.</p>

              <div className="mt-4 grid gap-2">
                <Link href="/iletisim" className="brand-button rounded-xl px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em]">
                  Hemen Kayit Ol
                </Link>
                <div className="flex justify-center">
                  <a
                    href={`https://wa.me/905000000000?text=Merhaba, ${encodeURIComponent(category.title)} programi hakkinda bilgi almak istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${category.title} icin WhatsApp ile iletisime gec`}
                    title="WhatsApp"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition-colors hover:border-[var(--brand)]"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19.05 4.94A9.94 9.94 0 0 0 12 2c-5.5 0-10 4.5-10 10 0 1.75.46 3.46 1.33 4.97L2 22l5.19-1.3A9.96 9.96 0 0 0 12 22c5.5 0 10-4.5 10-10 0-2.67-1.04-5.19-2.95-7.06ZM12 20.19a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.77.82-3-.2-.31a8.18 8.18 0 1 1 6.89 3.85Zm4.49-6.08c-.25-.13-1.47-.73-1.69-.82-.23-.08-.4-.12-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.07-.4-2.04-1.29-.75-.66-1.26-1.48-1.4-1.73-.15-.25-.02-.38.1-.5.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.42 1.44.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.09-.23-.15-.48-.27Z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-foreground/70">
                <div className="rounded-lg border border-foreground/10 bg-background p-2.5">E-Devlet</div>
                <div className="rounded-lg border border-foreground/10 bg-background p-2.5">Universite Onayli</div>
                <div className="rounded-lg border border-foreground/10 bg-background p-2.5">Guvenli Odeme</div>
                <div className="rounded-lg border border-foreground/10 bg-background p-2.5">7/24 Destek</div>
              </div>
            </div>

            <div className="surface-card p-6">
              <h3 className="text-xl">On Kayit Formu</h3>
              <p className="mt-2 text-sm text-foreground/70">Bilgilerinizi birakin, size hizlica geri donus saglayalim.</p>
              <form className="mt-4 space-y-3" action="/iletisim">
                <input className="w-full rounded-xl border border-foreground/15 bg-background px-3 py-2.5 text-sm" placeholder="Ad Soyad" />
                <input className="w-full rounded-xl border border-foreground/15 bg-background px-3 py-2.5 text-sm" placeholder="TC Kimlik No" />
                <input className="w-full rounded-xl border border-foreground/15 bg-background px-3 py-2.5 text-sm" placeholder="Telefon" />
                <input className="w-full rounded-xl border border-foreground/15 bg-background px-3 py-2.5 text-sm" placeholder="Dogum Tarihi" />
                <button type="submit" className="brand-button w-full rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]">
                  Kayit Ol
                </button>
              </form>
            </div>
          </aside>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl">Ilgili Sertifikalar</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedItems.map(item => (
              <article key={item.slug} className="surface-card p-4 transition-transform duration-200 hover:-translate-y-1">
                <p className="text-sm text-foreground/65">Sertifika Programi</p>
                <Link href={`/sertifikalar/${item.slug}`} className="mt-1 block text-lg leading-snug hover:text-[var(--brand)]">
                  {item.title}
                </Link>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm text-[var(--brand-strong)]">{formatPrice(item.price)}</p>
                  <a
                    href={`https://wa.me/905000000000?text=Merhaba, ${encodeURIComponent(item.title)} programi hakkinda bilgi almak istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.title} icin WhatsApp ile iletisime gec`}
                    title="WhatsApp"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-foreground/15 hover:border-[var(--brand)]"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19.05 4.94A9.94 9.94 0 0 0 12 2c-5.5 0-10 4.5-10 10 0 1.75.46 3.46 1.33 4.97L2 22l5.19-1.3A9.96 9.96 0 0 0 12 22c5.5 0 10-4.5 10-10 0-2.67-1.04-5.19-2.95-7.06ZM12 20.19a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.77.82-3-.2-.31a8.18 8.18 0 1 1 6.89 3.85Zm4.49-6.08c-.25-.13-1.47-.73-1.69-.82-.23-.08-.4-.12-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.07-.4-2.04-1.29-.75-.66-1.26-1.48-1.4-1.73-.15-.25-.02-.38.1-.5.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.42 1.44.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.09-.23-.15-.48-.27Z" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
