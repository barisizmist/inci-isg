import { testimonials, certificates, isoDocuments } from '@/data/mockData';

const Team = () => {
  return (
    <section className="pb-16 md:pb-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-10">
        <div className="surface-card p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">Sertifikalar</p>
              <h3 className="text-3xl mt-2">Öne Çıkan Programlar</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {certificates.slice(0, 4).map(item => (
                  <div key={item.id} className="rounded-xl bg-background border border-foreground/10 p-3">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-foreground/60 mt-1">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">Belgelendirme</p>
              <h3 className="text-3xl mt-2">ISO Çözümleri</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {isoDocuments.slice(0, 4).map(item => (
                  <div key={item.id} className="rounded-xl bg-background border border-foreground/10 p-3">
                    <p className="font-semibold text-sm">{item.code}</p>
                    <p className="text-xs text-foreground/60 mt-1">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand)] mb-3">Katılımcı Deneyimi</p>
          <ul className="grid gap-4 md:grid-cols-3">
            {testimonials.map(item => (
              <li key={item.id} className="surface-card p-5">
                <p className="text-foreground/80 leading-relaxed">&ldquo;{item.text}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-foreground/60">{item.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
