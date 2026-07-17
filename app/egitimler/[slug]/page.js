import { notFound } from 'next/navigation';
import Link from 'next/link';
import { trainingItems, getTrainingBySlug } from '@/data/trainingCatalog';

export function generateStaticParams() {
  return trainingItems.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);
  if (!training) return { title: 'Eğitim Detayı | İnci Akademi' };
  return {
    title: `${training.title} | İnci Akademi`,
    description: training.summary
  };
}

export default async function HizmetDetayPage({ params }) {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);
  if (!training) notFound();

  const relatedTrainings = trainingItems.filter(t => t.slug !== training.slug && t.categorySlug === training.categorySlug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-20 pt-28 text-foreground md:pt-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* ── Breadcrumb ───────────────────────────── */}
        <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-foreground/55">
          <Link href="/" className="hover:text-[var(--brand)] transition-colors">
            Anasayfa
          </Link>
          <span>/</span>
          <Link href="/egitimler" className="hover:text-[var(--brand)] transition-colors">
            Tüm Eğitimler
          </Link>
          <span>/</span>
          <span className="text-foreground/80">{training.title}</span>
        </nav>

        <div className="grid items-start gap-6 lg:grid-cols-[1fr_340px]">
          {/* ── Main content ─────────────────────────── */}
          <article className="surface-card overflow-hidden p-6 md:p-8">
            <span className="inline-flex rounded-full border border-foreground/15 bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
              {training.categoryLabel}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl">{training.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">{training.summary}</p>

            {/* Stats row */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-foreground/10 bg-background p-3 text-center">
                <p className="text-[11px] uppercase tracking-[0.12em] text-foreground/55">Süre</p>
                <p className="mt-1 text-sm font-semibold">{training.duration}</p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-3 text-center">
                <p className="text-[11px] uppercase tracking-[0.12em] text-foreground/55">Geçerlilik</p>
                <p className="mt-1 text-sm font-semibold">{training.validity}</p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-3 text-center">
                <p className="text-[11px] uppercase tracking-[0.12em] text-foreground/55">Format</p>
                <p className="mt-1 text-sm font-semibold">Teorik + Pratik</p>
              </div>
            </div>

            {/* Goal */}
            <section className="mt-8">
              <h2 className="text-2xl">{training.title} Eğitiminin Amacı</h2>
              <ul className="mt-4 space-y-2.5">
                {training.goal.map(g => (
                  <li key={g} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand)]" />
                    {g}
                  </li>
                ))}
              </ul>
            </section>

            {/* Legal */}
            <section className="mt-8">
              <h2 className="text-2xl">Yasal Dayanaklar</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{training.legal}</p>
            </section>

            {/* Modules */}
            <section className="mt-8">
              <h2 className="text-2xl">Eğitim İçeriği</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-foreground/10 bg-background p-4">
                  <h3 className="font-semibold">Teorik Modüller</h3>
                  <ul className="mt-3 space-y-2">
                    {training.theoryModules.map(m => (
                      <li key={m} className="flex items-start gap-2 text-sm text-foreground/75">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand)]" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-foreground/10 bg-background p-4">
                  <h3 className="font-semibold">Pratik Uygulamalar</h3>
                  <ul className="mt-3 space-y-2">
                    {training.practicalModules.map(m => (
                      <li key={m} className="flex items-start gap-2 text-sm text-foreground/75">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand)]" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Schedule table */}
            <section className="mt-8">
              <h2 className="text-2xl">Eğitim Detayları</h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-foreground/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-background">
                      <th className="px-4 py-3 text-left text-[11px] uppercase tracking-[0.12em] text-foreground/55 font-semibold">Eğitim Türü</th>
                      <th className="px-4 py-3 text-left text-[11px] uppercase tracking-[0.12em] text-foreground/55 font-semibold">Süre</th>
                      <th className="px-4 py-3 text-left text-[11px] uppercase tracking-[0.12em] text-foreground/55 font-semibold">Sertifika Geçerliliği</th>
                    </tr>
                  </thead>
                  <tbody>
                    {training.schedule.map((s, i) => (
                      <tr key={s.type} className={`border-t border-foreground/8 ${i % 2 === 0 ? 'bg-[var(--surface)]' : 'bg-background'}`}>
                        <td className="px-4 py-3 font-medium">{s.type}</td>
                        <td className="px-4 py-3 text-foreground/70">{s.duration}</td>
                        <td className="px-4 py-3 text-foreground/70">{s.validity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Certificate */}
            <section className="mt-8 rounded-xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 p-5">
              <h2 className="text-xl font-semibold">Sertifika Bilgileri</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{training.certificateNote}</p>
            </section>
          </article>

          {/* ── Sidebar ──────────────────────────────── */}
          <aside className="space-y-5 lg:sticky lg:top-28">
            {/* CTA card */}
            <div className="surface-card p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-foreground/55">Uzman Kadromuzla</p>
              <p className="mt-2 text-xl font-semibold">Hemen Başvurun</p>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">Deneyimli eğitmenlerimiz ve esnek takvimimizle sürecinizi birlikte planlayalım.</p>
              <div className="mt-4 grid gap-2">
                <Link href="/iletisim" className="brand-button rounded-xl px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em]">
                  Başvuru Yap
                </Link>
                <a
                  href={`https://wa.me/905000000000?text=Merhaba, ${encodeURIComponent(training.title)} hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-foreground/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:border-[#25d366] hover:text-[#25d366]"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.05 4.94A9.94 9.94 0 0 0 12 2c-5.5 0-10 4.5-10 10 0 1.75.46 3.46 1.33 4.97L2 22l5.19-1.3A9.96 9.96 0 0 0 12 22c5.5 0 10-4.5 10-10 0-2.67-1.04-5.19-2.95-7.06ZM12 20.19a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.77.82-3-.2-.31a8.18 8.18 0 1 1 6.89 3.85Zm4.49-6.08c-.25-.13-1.47-.73-1.69-.82-.23-.08-.4-.12-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.07-.4-2.04-1.29-.75-.66-1.26-1.48-1.4-1.73-.15-.25-.02-.38.1-.5.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.42 1.44.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.09-.23-.15-.48-.27Z" />
                  </svg>
                  WhatsApp ile Ulaş
                </a>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-foreground/65">
                {['Sertifikalı', 'Sahada Uygulama', 'Kurumsal', '7/24 Destek'].map(tag => (
                  <div key={tag} className="rounded-lg border border-foreground/10 bg-background px-2.5 py-2 text-center">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Pre-registration form */}
            <div className="surface-card p-6">
              <h3 className="text-xl font-semibold">Ön Başvuru Formu</h3>
              <p className="mt-1 text-sm text-foreground/60">Bilgilerinizi bırakın, sizi arayalım.</p>
              <form className="mt-4 space-y-3" action="/iletisim" method="get">
                <input
                  name="ad"
                  className="w-full rounded-xl border border-foreground/15 bg-background px-3 py-2.5 text-sm focus:border-[var(--brand)] focus:outline-none transition-colors"
                  placeholder="Ad Soyad"
                />
                <input
                  name="tel"
                  type="tel"
                  className="w-full rounded-xl border border-foreground/15 bg-background px-3 py-2.5 text-sm focus:border-[var(--brand)] focus:outline-none transition-colors"
                  placeholder="Telefon"
                />
                <input
                  name="eposta"
                  type="email"
                  className="w-full rounded-xl border border-foreground/15 bg-background px-3 py-2.5 text-sm focus:border-[var(--brand)] focus:outline-none transition-colors"
                  placeholder="E-posta"
                />
                <input type="hidden" name="egitim" value={training.title} />
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs text-foreground/55 uppercase tracking-[0.12em]">İletişim Yöntemi</p>
                  <div className="flex gap-3 text-sm">
                    {['Telefon', 'WhatsApp', 'E-posta'].map(method => (
                      <label key={method} className="flex items-center gap-1.5 cursor-pointer">
                        <input type="radio" name="iletisim" value={method} className="accent-[var(--brand)]" defaultChecked={method === 'Telefon'} />
                        {method}
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="brand-button w-full rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-opacity hover:opacity-90">
                  Gönder
                </button>
              </form>
            </div>
          </aside>
        </div>

        {/* ── Related Trainings ─────────────────────── */}
        {relatedTrainings.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl mb-5">İlgili Eğitimler</h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedTrainings.map(item => (
                <Link key={item.slug} href={`/egitimler/${item.slug}`} className="surface-card block p-5 transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-foreground/55">{item.categoryLabel}</span>
                  <p className="mt-1.5 text-lg leading-snug hover:text-[var(--brand)] transition-colors">{item.title}</p>
                  <p className="mt-2 text-xs text-foreground/55">
                    {item.duration} · Geçerlilik: {item.validity}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
