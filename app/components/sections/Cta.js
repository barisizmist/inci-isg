import Image from 'next/image';
import Link from 'next/link';
import { serviceTrainings, machineTrainings } from '@/data/mockData';

const Cta = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-10">
        <div className="items-center gap-8 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5 relative">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&fit=crop"
              width={600}
              height={500}
              className="w-full h-auto rounded-3xl"
              alt="online egitim ve kurumsal belgelendirme"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -left-5 bg-[var(--surface)] border border-foreground/10 rounded-2xl p-4 shadow-lg max-w-[220px]">
              <p className="text-xs uppercase tracking-[0.16em] text-foreground/60">Güvenli Süreç</p>
              <p className="text-sm mt-1 font-semibold">Ön danışmanlık, program eşleşmesi ve hızlı başvuru akışı.</p>
            </div>
          </div>

          <div className="lg:col-span-7 surface-card p-6 md:p-8 space-y-5">
            <h3 className="text-[var(--brand)] text-xs font-semibold tracking-[0.18em] uppercase">Hizmet ve Eğitim</h3>
            <p className="text-3xl sm:text-4xl">Kariyerinize Uygun Programı Bulun</p>
            <p className="leading-relaxed text-foreground/80">
              Geniş eğitim kapsamını korurken kullanıcı deneyimini sadeleştirdik. Eğitim, sertifika ve belgelendirme süreçlerini tek panelden yöneterek operasyonel hız kazanın.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {serviceTrainings.slice(0, 4).map(item => (
                <Link key={item.id} href={`/egitimler/${item.slug}`} className="surface-card p-3 hover:border-[var(--brand)] transition-colors">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-foreground/70 text-xs mt-1">{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="surface-card p-6 md:p-8">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h4 className="text-2xl">İş Makinesi Eğitimleri</h4>
            <Link href="/egitimler" className="text-xs uppercase tracking-[0.16em] font-semibold text-[var(--brand)]">
              Tüm Eğitimler
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {machineTrainings.map(item => (
              <div key={item.id} className="rounded-xl bg-background border border-foreground/10 p-3 text-sm font-medium hover:border-[var(--brand)] transition-colors">
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
