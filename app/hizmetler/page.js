'use client';

import Link from 'next/link';

export default function HizmetlerPage() {
  const hizmetler = [
    {
      id: 1,
      icon: '🛡️',
      title: 'İş Güvenliği Uzmanlığı ve İşyeri Hekimliği',
      desc: 'İş yerinizin tehlike sınıfına uygun (A, B, C sınıfı) uzman görevlendirilmesi, yasal denetimlere hazırlık ve kurumsal rehberlik süreçleri. Çalışanların işe giriş ve periyodik sağlık muayenelerinin yapılması, meslek hastalıklarının takibi ve yasal sağlık raporlamaları.'
    },
    {
      id: 2,
      icon: '🚨',
      title: 'Risk Değerlendirmesi ve Acil Durum Planları',
      desc: 'İşletmedeki tüm operasyonel risklerin belirlenmesi, analiz edilmesi ve tehlikeleri kaynağında yok edecek proaktif eylem planları. Deprem, yangın, sel gibi senaryolara karşı ekiplerin kurulması, tahliye plan krokilerinin ve kaçış stratejilerinin hazırlanması.'
    },
    {
      id: 3,
      icon: '🔥',
      title: 'İSG ve Yangın Eğitimi Hizmetleri',
      desc: 'Mevzuata uygun temel İSG eğitimleri, çalışan temsilcisi eğitimleri, acil durum ve uygulamalı yangın söndürme tatbikatları.'
    },
    {
      id: 4,
      icon: '📐',
      title: 'Ortam Ölçümleri ve Periyodik Kontroller',
      desc: 'Gürültü, toz, aydınlatma gibi iş hijyeni ölçümleri ile basınçlı kaplar ve kaldırma araçlarının periyodik teknik kontrolleri.'
    },
    {
      id: 5,
      icon: '🏗️',
      title: 'Yüksekte Güvenli Çalışma Eğitimleri',
      desc: 'Yüksekte çalışma ekipmanları kullanımı, güvenlik önlemleri ve uygulamalı eğitimler.'
    },
    {
      id: 6,
      icon: '🚦',
      title: 'İşaretçi ve Sapancı Eğitimleri',
      desc: 'Kaldırma ve taşıma işlemlerinde güvenli işaretleme ve sapancılık eğitimleri.'
    },
    {
      id: 7,
      icon: '🆘',
      title: 'Arama Kurtarma ve Koruma (Tahliye) Ekipleri Eğitimi',
      desc: 'Acil durumlarda etkili müdahale için arama kurtarma ve tahliye ekipleri eğitimleri.'
    },
    {
      id: 8,
      icon: '🚨',
      title: 'Acil Durum ve Yangın Tatbikatları',
      desc: 'Gerçekçi senaryolarla acil durum ve yangın tatbikatları, ekip uyumunu artırma.'
    },
    {
      id: 9,
      icon: '🏥',
      title: 'İlk Yardım Eğitimleri',
      desc: 'Çalışanlara temel ilk yardım bilgisi ve uygulamalı eğitimler verilmesi.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 py-16">
      <div className="container mx-auto px-6">
        {/* 1. Üst Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-down">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Profesyonel Çözümler</span>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl mt-2 tracking-tight">Hizmet Alanlarımız</h1>
          <p className="mt-4 leading-relaxed text-foreground/80">
            6331 sayılı kanun kapsamındaki tüm yasal yükümlülüklerinizi eksiksiz yerine getiriyor, iş yerinizi daha güvenli hale getiriyoruz.
          </p>
        </div>

        {/* 2. Hizmet Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hizmetler.map((hizmet, idx) => (
            <div
              key={hizmet.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-card border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* İkon Kutusu: Dark modda daha az parlak */}
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950 text-3xl rounded-2xl flex items-center justify-center mb-6 border border-blue-100 dark:border-blue-900 shadow-inner">
                  {hizmet.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{hizmet.title}</h3>
                <p className="leading-relaxed text-foreground/80 mb-6">{hizmet.desc}</p>
              </div>

              <div className="border-t border-border pt-4">
                <Link href="/iletisim" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors group">
                  Teklif ve Bilgi Al
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 3. CTA Alanı: Mavi yerine daha "Premium" bir ton (Slate/Blue karışımı) */}
        <div
          className="mt-20 max-w-4xl mx-auto
             rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
          data-aos="zoom-in"
        >
          {/* Dekoratif efektler - Opaklıkları mod değişimine göre ayarladık */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-64 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">İş Yeriniz İçin Risk Analizi Yaptırdınız mı?</h2>
            <p className="mt-4 max-w-xl mx-auto leading-relaxed text-foreground/80">
              Yasal yaptırımlarla karşılaşmamak ve en önemlisi çalışanlarınızı korumak için hemen uzmanlarımızla görüşün.
            </p>
            <div className="mt-8">
              <Link
                href="/iletisim"
                className="inline-block bg-blue-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                Hemen Ücretsiz Danışın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
