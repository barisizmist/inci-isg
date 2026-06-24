'use client';

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
    <div className="bg-gray-50 min-h-screen pt-28">
      <div className="container mx-auto px-6 mt-5">
        {/* Üst Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Referanslarımız</span>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-2 tracking-tight">Bize Güvenen Markalar</h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Türkiye genelinde farklı sektörlerden lider firmalara iş sağlığı ve güvenliği süreçlerinde proaktif çözümlerimizle yol arkadaşlığı yapıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {referanslar.map((ref, idx) => {
            const isWhiteLogo = ref.id === 6;

            return (
              <div
                key={ref.id}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className={`flex justify-center items-center p-8 rounded-2xl border transition-all duration-300 h-32 overflow-hidden group hover:shadow-md ${
                  isWhiteLogo ? 'bg-gray-900 border-gray-800 hover:bg-gray-950' : 'bg-slate-50/60 border-gray-100/70 hover:bg-white hover:border-blue-500/20'
                }`}
              >
                <img className="max-h-14 w-full object-contain transition-transform duration-500 ease-out scale-95 group-hover:scale-105" src={ref.logo} alt={ref.name} />
              </div>
            );
          })}
        </div>

        {/* Sektörel Çeşitlilik Alanı (Güven tazeleyen ekstra bölüm) */}
        <div className="max-w-4xl mx-auto border-t border-gray-200/60 pt-16 text-center" data-aos="fade-up">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Hizmet Sağladığımız Başlıca Sektörler</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sektorler.map((sektor, index) => (
              <div
                key={index}
                className="bg-gray-100/60 border border-gray-200/30 rounded-xl py-4 px-6 flex items-center justify-center gap-x-3 text-gray-700 font-medium text-sm hover:bg-white hover:shadow-sm transition-all duration-200"
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
