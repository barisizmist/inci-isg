'use client';

import Link from 'next/link';

export default function HizmetlerPage() {
  const hizmetler = [
    {
      id: 1,
      icon: '🛡️',
      title: 'İş Güvenliği Uzmanlığı Hizmetleri',
      desc: 'İş yerinizin tehlike sınıfına uygun (A, B, C sınıfı) uzman görevlendirilmesi, yasal denetimlere hazırlık ve kurumsal rehberlik süreçleri.'
    },
    {
      id: 2,
      icon: '🩺',
      title: 'İşyeri Hekimliği ve Sağlık Hizmetleri',
      desc: 'Çalışanların işe giriş ve periyodik sağlık muayenelerinin yapılması, meslek hastalıklarının takibi ve yasal sağlık raporlamaları.'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Risk Değerlendirmesi ve Analizi',
      desc: 'İşletmedeki tüm operasyonel risklerin belirlenmesi, analiz edilmesi ve tehlikeleri kaynağında yok edecek proaktif eylem planları.'
    },
    {
      id: 4,
      icon: '🔥',
      title: 'İSG ve Yangın Eğitimi Hizmetleri',
      desc: 'Mevzuata uygun temel İSG eğitimleri, çalışan temsilcisi eğitimleri, acil durum ve uygulamalı yangın söndürme tatbikatları.'
    },
    {
      id: 5,
      icon: '🚨',
      title: 'Acil Durum Planlarının Hazırlanması',
      desc: 'Deprem, yangın, sel gibi senaryolara karşı ekiplerin kurulması, tahliye plan krokilerinin ve kaçış stratejilerinin hazırlanması.'
    },
    {
      id: 6,
      icon: '📐',
      title: 'Ortam Ölçümleri ve Periyodik Kontroller',
      desc: 'Gürültü, toz, aydınlatma gibi iş hijyeni ölçümleri ile basınçlı kaplar ve kaldırma araçlarının periyodik teknik kontrolleri.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-28 lg:py-24">
      <div className="container mx-auto px-6 mt-10">
        {/* 1. Üst Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Profesyonel Çözümler</span>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-2 tracking-tight">Hizmet Alanlarımız</h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            6331 sayılı kanun kapsamındaki tüm yasal yükümlülüklerinizi eksiksiz yerine getiriyor, iş yerinizi daha güvenli hale getiriyoruz.
          </p>
        </div>

        {/* 2. Hizmet Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hizmetler.map((hizmet, idx) => (
            <div
              key={hizmet.id}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div>
                {/* İkon Kutusu */}
                <div className="w-14 h-14 bg-blue-50 text-3xl rounded-2xl flex items-center justify-center mb-6 shadow-inner">{hizmet.icon}</div>
                {/* Hizmet Başlığı */}
                <h3 className="text-xl font-bold text-gray-950 mb-3 tracking-tight">{hizmet.title}</h3>
                {/* Hizmet Açıklaması */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{hizmet.desc}</p>
              </div>

              {/* İletişime Yönlendiren Link Butonu */}
              <div className="border-t border-gray-50 pt-4">
                <Link href="/iletisim" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group">
                  Teklif ve Bilgi Al
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Alt Kapanış / CTA (Call to Action) Alanı */}
        <div className="mt-20 max-w-4xl mx-auto bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-lg relative overflow-hidden" data-aos="zoom-in">
          {/* Arka plan dekoratif daireler */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-500 rounded-full opacity-30 blur-lg"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-blue-700 rounded-full opacity-40 blur-xl"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">İş Yeriniz İçin Risk Analizi Yaptırdınız mı?</h2>
            <p className="mt-4 text-blue-100 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Yasal yaptırımlarla karşılaşmamak ve en önemlisi çalışanlarınızı korumak için hemen uzmanlarımızla görüşün.
            </p>
            <div className="mt-8">
              <Link href="/iletisim" className="inline-block bg-white text-blue-600 font-bold px-8 py-3.5 rounded-xl shadow hover:bg-gray-50 transition-colors">
                Hemen Ücretsiz Danışın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
