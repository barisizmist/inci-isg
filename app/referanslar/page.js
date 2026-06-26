'use client';

import Image from 'next/image';

export default function ReferanslarPage() {
  const referanslar = [
    { id: 1, name: 'Firma 1', logo: '/references/reference_logo_1.png' },
    { id: 2, name: 'Firma 2', logo: '/references/reference_logo_2.png' },
    { id: 3, name: 'Firma 3', logo: '/references/reference_logo_3.png' },
    { id: 4, name: 'Firma 4', logo: '/references/reference_logo_4.png' },
    { id: 5, name: 'Firma 5', logo: '/references/reference_logo_5.png' },
    { id: 6, name: 'Firma 6', logo: '/references/reference_logo_6.png' }
  ];

  const sektorler = [
    { ikon: '🏗️', isim: 'Ağır Sanayi & İnşaat' },
    { ikon: '🏭', isim: 'Üretim & Tekstil' },
    { ikon: '🚚', isim: 'Lojistik & Depolama' },
    { ikon: '🏥', isim: 'Sağlık & Kurumsal' }
  ];

  return (
    <div className="min-h-screen bg-background py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Üst Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Referanslarımız</span>
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl mt-2 tracking-tight">Bize Güvenen Markalar</h1>
        </div>

        {/* Referans Logoları */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {referanslar.map((ref, idx) => (
            <div
              key={ref.id}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="
            flex justify-center items-center p-8 h-32 overflow-hidden rounded-2xl group
            bg-card
            border border-gray-200/80
            hover:bg-accent
            hover:border-border
            hover:shadow-md
            transition-all duration-300
          "
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

        {/* Sektörler */}
        <div className="max-w-4xl mx-auto pt-16 text-center border-t border-gray-200/80" data-aos="fade-up">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Hizmet Sağladığımız Başlıca Sektörler</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sektorler.map((sektor, index) => (
              <div
                key={index}
                className="
              bg-card
              border border-gray-200/80
              hover:bg-accent
              hover:border-border
              rounded-2xl py-4 px-6 flex items-center justify-center gap-x-3
              text-foreground font-medium text-sm
              transition-all duration-300
            "
              >
                <span>{sektor.ikon}</span>
                <span>{sektor.isim}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
