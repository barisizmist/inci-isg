'use client';

import { useState } from 'react';

const KATEGORI_ACIKLAMALARI = {
  hepsi:
    'Sertifika eğitimlerini tek ekranda inceleyebilir, size uygun programı seçerek online başvuru oluşturabilir ve WhatsApp üzerinden hızlıca bilgi alabilirsiniz.',
  'hijyen-egitimleri':
    'Hijyen eğitimleri, kişisel hijyen, gıda güvenliği, temizlik ve sanitasyon konularında bilgi ve beceri kazandırmak amacıyla düzenlenen sertifika ve belge programlarını kapsar.',
  'tesisat-teknolojisi-ve-iklimlendirme-ozel-egitimler':
    'Tesisat ve iklimlendirme alanında uzmanlık kazandıran sertifika programları. Klima, doğalgaz, su tesisatı ve daha fazlası için profesyonel eğitimler.',
  'gida-teknolojisi-ozel-egitimler': 'Gıda sektöründe hijyen, üretim, paketleme ve kalite kontrol konularında kapsamlı sertifika eğitimleri.',
  'mesleki-yeterlilik-belgesi': 'MYK onaylı mesleki yeterlilik belgeleri ile alanında uzmanlaştığınızı resmi olarak tescilleyin.',
  'kalfalik-ustalik-egitimleri': 'Kalfalık ve ustalık belgesi ile mesleki kariyerinizi ileri taşıyın. Uygulamalı eğitim programları.',
  'bilisim-teknolojileri': 'Yazılım, ağ güvenliği, veri tabanı ve bilişim alanında güncel teknolojilerle sertifika eğitimleri.',
  'buro-yonetimi': 'Büro yönetimi, sekreterlik ve ofis programları kullanımı alanında profesyonel sertifika eğitimleri.',
  'el-sanatlari-teknolojisi': 'Geleneksel ve modern el sanatları alanında yaratıcı sertifika programları.',
  'elektrik-elektronik-teknolojisi': 'Elektrik tesisatı, pano montajı, otomasyon ve elektronik sistemler alanında sertifika eğitimleri.',
  'kaldirma-ve-yukleme': 'Forklift, vinç, platform ve kaldırma ekipmanları kullanımı için zorunlu sertifika eğitimleri.',
  'guzellik-ve-sac-bakim-hizmetleri': 'Kuaförlük, cilt bakımı, makyaj ve güzellik hizmetleri alanında sertifika programları.',
  'harita-tapu-kadastro': 'Harita, tapu ve kadastro alanında teknik bilgi ve beceri kazandıran sertifika eğitimleri.',
  'insaat-teknolojisi': 'İnşaat sektöründe kalıp, demir, boya, yalıtım ve daha fazlası için mesleki sertifika eğitimleri.',
  'insaat-teknolojisi-ozel-egitimler': 'İnşaat teknolojisi alanında özel eğitim programları ile uzmanlaşın.',
  'insaat-teknolojisi-tehlikeli-isler': 'Tehlikeli işlerde çalışanlar için inşaat teknolojisi özel sertifika programları.',
  'motorlu-araclar-teknolojisi': 'Otomotiv tamir, bakım ve onarım alanında sertifika eğitimleri.',
  'motorlu-araclar-teknolojisi-ozel-egitimler': 'Motorlu araçlar teknolojisi özel eğitim programları.',
  'motorlu-araclar-teknolojisi-tehlikeli-isler': 'Tehlikeli işlerde motorlu araçlar teknolojisi sertifika programları.',
  'metal-teknolojisi': 'Kaynak, talaşlı imalat, sac işleri ve metal yüzey işleme alanında sertifika eğitimleri.',
  'metal-teknolojisi-ozel-egitimler': 'Metal teknolojisi özel eğitim programları ile mesleki uzmanlık kazanın.',
  'metal-teknolojisi-tehlikeli-isler': 'Tehlikeli işlerde metal teknolojisi sertifika programları.',
  'makine-teknolojisi': 'CNC, torna, freze ve makine bakımı alanında sertifika eğitimleri.',
  'makine-teknolojisi-ozel-egitimler': 'Makine teknolojisi özel eğitim programları.',
  'makine-teknolojisi-tehlikeli-isler': 'Tehlikeli işlerde makine teknolojisi sertifika programları.',
  'kimya-teknolojisi': 'Kimya sektöründe laboratuvar, proses ve üretim alanlarında sertifika eğitimleri.',
  'kimya-teknolojisi-tehlikeli-isler': 'Tehlikeli işlerde kimya teknolojisi sertifika programları.',
  'kimya-petrol-lastik-ve-plastik-sektoru': 'Kimya, petrol, lastik ve plastik sektöründe mesleki sertifika eğitimleri.',
  'tekstil-teknolojisi': 'Dokuma, boyama, örme ve tekstil üretim süreçlerinde sertifika eğitimleri.',
  'tekstil-teknolojisi-tehlikeli-isler': 'Tehlikeli işlerde tekstil teknolojisi sertifika programları.',
  'plastik-teknolojisi': 'Plastik enjeksiyon, ekstrüzyon ve üretim süreçlerinde sertifika eğitimleri.',
  'plastik-teknolojisi-ozel-egitimler': 'Plastik teknolojisi özel eğitim programları.',
  'plastik-teknolojisi-tehlikeli-isler': 'Tehlikeli işlerde plastik teknolojisi sertifika programları.',
  'tarim-teknolojileri-ozel-egitimler': 'Tarım, bahçecilik ve hayvan yetiştiriciliği alanında sertifika eğitimleri.',
  'tarim-teknolojileri-tehlikeli-isler': 'Tehlikeli işlerde tarım teknolojileri sertifika programları.',
  'hayvan-yetistiriciligi-ve-sagligi': 'Hayvan yetiştiriciliği, besleme ve sağlık alanında sertifika eğitimleri.',
  'denizcilik-ozel-egitim': 'Denizcilik alanında gemiadamı, telsiz ve güvenlik sertifika eğitimleri.',
  'denizcilik-tehlikeli-isler': 'Tehlikeli işlerde denizcilik sertifika programları.',
  'madencilik-ve-maden-cikarma': 'Madencilik, sondaj ve yeraltı çalışmalarında sertifika eğitimleri.',
  'madencilik-ve-maden-cikarma-ozel-egitim': 'Madencilik özel eğitim programları.',
  'yer-bilimleri-tehlikeli-isler': 'Tehlikeli işlerde yer bilimleri sertifika programları.',
  'can-ve-mal-guvenligi': 'İş sağlığı ve güvenliği, yangın eğitimi ve ilk yardım sertifika eğitimleri.',
  'is-ve-yonetim': 'İnsan kaynakları, muhasebe, pazarlama ve yönetim alanında sertifika eğitimleri.',
  'konaklama-ve-seyahat-hizmetleri': 'Otelcilik, turizm ve seyahat alanında sertifika eğitimleri.',
  'konaklama-ve-seyahat-hizmetleri-ozel-egitimler': 'Konaklama ve seyahat hizmetleri özel eğitim programları.',
  'yiyecek-icecek-hizmetleri': 'Aşçılık, pastacılık, servis ve mutfak alanında sertifika eğitimleri.',
  'yiyecek-icecek-hizmetleri-ozel-egitimler': 'Yiyecek içecek hizmetleri özel eğitim programları.',
  'saglik-ozel-egitimler': 'Sağlık alanında hasta bakımı, tıbbi sekreterlik ve ilk yardım sertifika eğitimleri.',
  'cocuk-gelisimi-ve-egitimi': 'Çocuk gelişimi, eğitimi ve bakımında sertifika programları.',
  'cocuk-gelisimi-ve-egitimi-ozel-egitimler': 'Çocuk gelişimi ve eğitimi özel eğitim programları.',
  'halkla-iliskiler-ve-organizasyon-hizmetleri-ozel-egitimler': 'Halkla ilişkiler, organizasyon ve etkinlik yönetimi sertifika eğitimleri.',
  'eglence-hizmetleri-ozel-egitimler': 'Eğlence, animasyon ve rekreasyon alanında sertifika eğitimleri.',
  'pazarlama-ve-perakende': 'Satış, pazarlama ve perakende alanında sertifika eğitimleri.',
  'pazarlama-ve-perakende-ozel-egitimler': 'Pazarlama ve perakende özel eğitim programları.',
  'muhasebe-ve-finansman': 'Muhasebe, finans ve danışmanlık alanında sertifika eğitimleri.',
  'muhasebe-ve-finansman-ozel-egitimler': 'Muhasebe ve finansman özel eğitim programları.',
  'grafik-ve-fotograf': 'Grafik tasarım, fotoğrafçılık ve görsel iletişim alanında sertifika eğitimleri.',
  'grafik-ve-fotograf-ozel-egitimler': 'Grafik ve fotoğraf özel eğitim programları.',
  'guzellik-ve-sac-bakim-hizmetleri-ozel-egitimler': 'Güzellik ve saç bakım hizmetleri özel eğitim programları.',
  'seramik-ve-cam-teknolojisi': 'Seramik, cam ve dekoratif üretim alanında sertifika eğitimleri.',
  'seramik-ve-cam-teknolojisi-ozel-egitimler': 'Seramik ve cam teknolojisi özel eğitim programları.',
  'seramik-ve-cam-teknolojisi-tehlikeli-isler': 'Tehlikeli işlerde seramik ve cam teknolojisi sertifika programları.',
  'kuyumculuk-teknolojisi': 'Kuyumculuk, takı tasarımı ve altın işleme alanında sertifika eğitimleri.',
  'kuyumculuk-teknolojisi-ozel-egitimler': 'Kuyumculuk teknolojisi özel eğitim programları.',
  'mobilya-ve-ic-mekan-tasarimi': 'Mobilya üretimi, iç mekan tasarımı ve dekorasyon alanında sertifika eğitimleri.',
  'moda-tasarim-teknolojileri': 'Moda tasarımı, dikim ve konfeksiyon alanında sertifika eğitimleri.',
  'giyim-uretim-teknolojisi-ozel-egitimler': 'Giyim üretim teknolojisi özel eğitim programları.',
  'matbaa-ozel-egitimler': 'Matbaa, baskı ve ambalaj alanında sertifika eğitimleri.',
  'matbaa-teknolojisi': 'Matbaa teknolojisi ve baskı süreçlerinde sertifika eğitimleri.',
  'matbaa-tehlikeli-isler': 'Tehlikeli işlerde matbaa teknolojisi sertifika programları.',
  'ormancilik-ozel-egitimler': 'Ormancılık ve ağaç işleme alanında sertifika eğitimleri.',
  'dagiticilik-ve-sevkiyat': 'Lojistik, dağıtım ve sevkiyat alanında sertifika eğitimleri.',
  'ulasim-hizmetleri': 'Ulaştırma ve lojistik alanında sertifika eğitimleri.',
  'ulasim-hizmetleri-ozel-egitimler': 'Ulaştırma hizmetleri özel eğitim programları.',
  'ulasim-lojistik-ve-haberlesme': 'Ulaştırma, lojistik ve haberleşme alanında sertifika eğitimleri.',
  'yabanci-diller-ozel-egitimler': 'Yabancı dil eğitimleri ile global kariyer fırsatları.',
  'din-egitimi-ozel-egitimler': 'Din eğitimi alanında sertifika programları.',
  spor: 'Spor, fitness ve beden eğitimi alanında sertifika eğitimleri.',
  'enerji-sektoru': 'Enerji sektöründe yenilenebilir kaynaklar ve santral işletmeciliği sertifika eğitimleri.',
  'gazetecilik-ozel-egitimler': 'Gazetecilik ve medya alanında sertifika eğitimleri.',
  'kagit-uretim-teknolojisi-tehlikeli-isler': 'Tehlikeli işlerde kağıt üretim teknolojisi sertifika programları.',
  'rayli-sistemler-teknolojisi-ozel-egitimler': 'Raylı sistemler ve demiryolu alanında sertifika eğitimleri.',
  'rayli-sistemler-teknolojisi-tehlikeli-isler': 'Tehlikeli işlerde raylı sistemler teknolojisi sertifika programları.',
  'ucak-bakim-tehlikeli-isler': 'Tehlikeli işlerde uçak bakım sertifika programları.',
  'ozel-egitimler': 'Özel eğitim programları ile farklı alanlarda sertifika ve belge alın.',
  'one-cikanlar': 'En çok tercih edilen ve öne çıkan sertifika programları.',
  'is-sagligi-ve-guvenligi': 'İş sağlığı ve güvenliği alanında zorunlu sertifika eğitimleri.',
  'yangin-egitimi': 'Yangın eğitimi, tatbikat ve söndürme teknikleri sertifika programları.',
  'ilk-yardim-egitimi': 'Sağlık Bakanlığı onaylı ilk yardım sertifika eğitimleri.',
  'yuksekte-calisma-egitimi': 'Yükseklerde güvenli çalışma için zorunlu sertifika eğitimleri.',
  'is-makinesi-egitimleri': 'Forklift, vinç, ekskavatör ve diğer iş makineleri operatörlük sertifikaları.',
  'gida-ve-hijyen-egitimi': 'Gıda hijyeni, sanitasyon ve kişisel hijyen konularında sertifika eğitimleri.',
  'kisisel-ve-mesleki-gelisim': 'Kişisel gelişim, iletişim ve meslek edinme alanında sertifika eğitimleri.',
  'madencilik-ve-tasocakciligi': 'Madencilik, taş ocakcılığı ve yeraltı çalışmalarında sertifika eğitimleri.'
};

export default function SertifikaHeroFilter({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  kategoriler = [],
  totalCount = 0,
  onReset
}) {
  const [activeBadge, setActiveBadge] = useState(null);

  const selectedCat = kategoriler.find(k => k.id === selectedCategory);
  const isAll = selectedCategory === 'hepsi' || !selectedCategory;
  const categoryName = isAll ? null : selectedCat?.label || selectedCategory;

  const description = KATEGORI_ACIKLAMALARI[selectedCategory] || KATEGORI_ACIKLAMALARI['hepsi'];

  const handleResetAll = () => {
    setSearchQuery('');
    setSelectedCategory('hepsi');
    setSortBy('one-cikanlar');
    setActiveBadge(null);
    if (onReset) onReset();
  };

  return (
    <div className="w-full mb-10 pt-8 pb-6">
        {/* Hero İçerik */}
        <div className="mb-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'color-mix(in srgb, var(--foreground) 40%, transparent)' }}
          >
            İnci İSG
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            {isAll ? (
              <>Tüm Sertifikalar</>
            ) : (
              <>{categoryName} Sertifikaları</>
            )}
          </h1>
          <p
            className="text-sm sm:text-base max-w-2xl leading-relaxed mb-6"
            style={{ color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}
          >
            {description}
          </p>

          {/* İstatistik Satırı */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--foreground) 6%, var(--background))',
                  color: 'var(--foreground)',
                }}
              >
                {isAll ? kategoriler.length : totalCount}
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}
              >
                {isAll ? 'Kategori' : 'Eğitim'}
              </span>
            </div>
            <div
              className="w-px h-5"
              style={{ backgroundColor: 'color-mix(in srgb, var(--foreground) 12%, transparent)' }}
            />
            <div className="flex items-center gap-2">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--foreground) 6%, var(--background))',
                  color: 'var(--foreground)',
                }}
              >
                {totalCount.toLocaleString('tr-TR')}
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}
              >
                Toplam Eğitim
              </span>
            </div>
            <div
              className="w-px h-5"
              style={{ backgroundColor: 'color-mix(in srgb, var(--foreground) 12%, transparent)' }}
            />
            <div className="flex items-center gap-2">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{
                  backgroundColor: 'color-mix(in srgb, #25D366 10%, var(--background))',
                  color: '#25D366',
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}
              >
                WhatsApp Destek
              </span>
            </div>
          </div>
        </div>

        {/* Filtre Barı */}
        <div
          className="flex flex-col md:flex-row md:items-center gap-2.5 p-2.5 md:p-3 rounded-xl border"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--foreground) 3%, var(--background))',
            borderColor: 'color-mix(in srgb, var(--foreground) 8%, transparent)',
          }}
        >
          {/* Arama — her zaman tam genişlik */}
          <div className="relative flex-1 min-w-0 w-full md:min-w-[200px]">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: 'color-mix(in srgb, var(--foreground) 35%, transparent)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Sertifika ara..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'color-mix(in srgb, var(--foreground) 10%, transparent)',
                color: 'var(--foreground)',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs cursor-pointer"
                style={{ color: 'color-mix(in srgb, var(--foreground) 40%, transparent)' }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Dropdown'lar — mobilde alt alta, masaustude yan yana */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto">
            {/* Kategori Dropdown */}
            <div className="relative w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto py-2.5 pl-3 pr-9 rounded-lg border text-sm focus:outline-none cursor-pointer min-w-0 appearance-none"
                style={{
                  backgroundColor: 'var(--background)',
                  borderColor: 'color-mix(in srgb, var(--foreground) 10%, transparent)',
                  color: 'var(--foreground)',
                }}
              >
                <option value="hepsi">Kategori</option>
                {kategoriler.map(kat => (
                  <option key={kat.id} value={kat.id}>
                    {kat.label}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none transition-transform duration-200"
                style={{ color: 'color-mix(in srgb, var(--foreground) 50%, transparent)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>

            {/* Sıralama Dropdown */}
            <div className="relative w-full md:w-auto">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full md:w-auto py-2.5 pl-3 pr-9 rounded-lg border text-sm focus:outline-none cursor-pointer min-w-0 appearance-none"
                style={{
                  backgroundColor: 'var(--background)',
                  borderColor: 'color-mix(in srgb, var(--foreground) 10%, transparent)',
                  color: 'var(--foreground)',
                }}
              >
                <option value="one-cikanlar">Sırala</option>
                <option value="yeni">En Yeniler</option>
                <option value="a-z">A&apos;dan Z&apos;ye</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none transition-transform duration-200"
                style={{ color: 'color-mix(in srgb, var(--foreground) 50%, transparent)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>

            {/* Temizle — sadece mobilde */}
            <button
              onClick={handleResetAll}
              className="w-full md:hidden py-2.5 flex items-center justify-center gap-1.5 rounded-lg border text-xs font-medium cursor-pointer"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'color-mix(in srgb, var(--foreground) 10%, transparent)',
                color: 'color-mix(in srgb, var(--foreground) 45%, transparent)',
              }}
              title="Filtreleri temizle"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Filtreleri Temizle
            </button>
          </div>

          {/* Sayac + Temizle — sadece masaüstü */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <div
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg border text-xs font-medium whitespace-nowrap"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--foreground) 3%, var(--background))',
                borderColor: 'color-mix(in srgb, var(--foreground) 8%, transparent)',
                color: 'color-mix(in srgb, var(--foreground) 55%, transparent)',
              }}
            >
              <strong style={{ color: 'var(--foreground)' }}>{totalCount.toLocaleString('tr-TR')}</strong> eğitim
            </div>

            <button
              onClick={handleResetAll}
              className="py-2.5 px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'color-mix(in srgb, var(--foreground) 10%, transparent)',
                color: 'color-mix(in srgb, var(--foreground) 50%, transparent)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#ef4444';
                e.currentTarget.style.color = '#ef4444';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--foreground) 10%, transparent)';
                e.currentTarget.style.color = 'color-mix(in srgb, var(--foreground) 50%, transparent)';
              }}
            >
              Temizle
            </button>
          </div>

        </div>
    </div>
  );
}
