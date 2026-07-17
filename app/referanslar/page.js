'use client';

import Image from 'next/image';
import { referenceLogos } from '@/data/mockData';

export default function ReferanslarPage() {
  const sektorler = [
    { ikon: '🏗️', isim: 'İnşaat ve Altyapı' },
    { ikon: '🏭', isim: 'Üretim ve Sanayi' },
    { ikon: '🚚', isim: 'Lojistik ve Operasyon' },
    { ikon: '🏢', isim: 'Kurumsal Hizmetler' }
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-[var(--brand)] font-semibold tracking-[0.16em] uppercase text-xs">Referanslarımız</span>
          <h1 className="text-4xl text-foreground sm:text-5xl mt-3 tracking-tight">Bize Güvenen Kurumlar</h1>
          <p className="mt-4 text-foreground/80">Eğitim, sertifikasyon ve belgelendirme süreçlerinde birlikte çalıştığımız kurumlardan bazıları.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {referenceLogos.map((ref, idx) => (
            <div
              key={ref.id}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="flex justify-center items-center p-8 h-32 overflow-hidden rounded-2xl group surface-card hover:border-[var(--brand)] hover:shadow-md transition-all duration-300"
            >
              <Image
                width={200}
                height={56}
                className="max-h-14 w-auto h-auto object-contain transition-transform duration-300 ease-out scale-95 group-hover:scale-100 dark:brightness-90"
                src={ref.logo}
                alt={ref.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto pt-16 text-center border-t border-gray-200/80" data-aos="fade-up">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.16em] mb-8">Hizmet Verilen Sektörler</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sektorler.map(sektor => (
              <div
                key={sektor.isim}
                className="surface-card rounded-2xl py-4 px-6 flex items-center justify-center gap-x-3 text-foreground font-medium text-sm transition-all duration-300"
              >
                <span>{sektor.ikon}</span>
                <span>{sektor.isim}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-foreground/75 max-w-2xl mx-auto">
            Projeyi referans sitenin kapsamına yaklaştırırken, marka dili ve görsel yaklaşımı daha yalın, modern ve okunabilir bir yapıya dönüştürdük.
          </p>
        </div>
      </div>
    </div>
  );
}
