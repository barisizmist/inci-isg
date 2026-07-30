// src/data/sertifikalar.js

export const sertifikaKategorileri = [
  { id: 'ahsap-teknolojisi', label: 'Ahşap Teknolojisi' },
  { id: 'bahceclik', label: 'Bahçecilik' },
  { id: 'bilisim-teknolojileri', label: 'Bilişim Teknolojileri' },
  { id: 'biyomedikal-cihaz', label: 'Biyomedikal Cihaz Teknolojileri' },
  { id: 'buro-yonetimi', label: 'Büro Yönetimi Ve Sekreterlik' },
  { id: 'cocuk-gelisimi', label: 'Çocuk Gelişimi Ve Eğitimi' },
  { id: 'denizcilik', label: 'Denizcilik' },
  { id: 'din-egitimi', label: 'Din Eğitimi' },
  { id: 'el-sanatlari', label: 'El Sanatları Teknolojisi' },
  { id: 'elektrik-elektronik', label: 'Elektrik Elektronik Teknolojisi' },
  { id: 'endustriyel-otomasyon', label: 'Endüstriyel Otomasyon Teknolojileri' },
  { id: 'gazetecilik', label: 'Gazetecilik' },
  { id: 'gemi-yapimi', label: 'Gemi Yapımı' },
  { id: 'gida-teknolojisi', label: 'Gıda Teknolojisi' },
  { id: 'giyim-uretim', label: 'Giyim Üretim Teknolojisi' },
  { id: 'grafik-ve-fotograf', label: 'Grafik Ve Fotoğraf' },
  { id: 'halkla-iliskiler', label: 'Halkla İlişkiler Ve Organizasyon Hizmetleri' },
  { id: 'harita-tapu', label: 'Harita-Tapu-Kadastro' },
  { id: 'hasta-ve-yasli-hizmetleri', label: 'Hasta Ve Yaşlı Hizmetleri' },
  { id: 'hayvan-yagiligi', label: 'Hayvan Sağlığı' },
  { id: 'hayvan-yetistiriciligi', label: 'Hayvan Yetiştiriciliği' },
  { id: 'hukuk', label: 'Hukuk' },
  { id: 'insaat-teknolojisi', label: 'İnşaat Teknolojisi' },
  { id: 'kimya-teknolojisi', label: 'Kimya Teknolojisi' },
  { id: 'konaklama-seyahat', label: 'Konaklama Ve Seyahat Hizmetleri' },
  { id: 'kuyumculuk', label: 'Kuyumculuk Teknolojisi' },
  { id: 'makine-teknolojisi', label: 'Makine Teknolojisi' },
  { id: 'matbaa-teknolojisi', label: 'Matbaa Teknolojisi' },
  { id: 'maden-teknolojisi', label: 'Maden Teknolojisi' },
  { id: 'metal-teknolojisi', label: 'Metal Teknolojisi' },
  { id: 'metalurji-teknolojisi', label: 'Metalurji Teknolojisi' },
  { id: 'motorlu-araclar', label: 'Motorlu Araçlar Teknolojisi' },
  { id: 'muhasebe-finansman', label: 'Muhasebe Ve Finansman' },
  { id: 'müzik-ve-sahne', label: 'Müzik Ve Sahne Sanatları' },
  { id: 'okuma-yazma', label: 'Okuma Yazma' },
  { id: 'ogretmenlik-ve-egitim', label: 'Öğretmenlik Ve Eğitim' },
  { id: 'pazarlama-perakende', label: 'Pazarlama Ve Perakende' },
  { id: 'plastik-teknolojisi', label: 'Plastik Teknolojisi' },
  { id: 'radyo-televizyon', label: 'Radyo Televizyon' },
  { id: 'saglik-hizmetleri', label: 'Sağlık Hizmetleri' },
  { id: 'sanat-ve-tasarim', label: 'Sanat Ve Tasarım' },
  { id: 'sivil-havacilik', label: 'Sivil Havacılık' },
  { id: 'tarim-teknolojileri', label: 'Tarım Teknolojileri' },
  { id: 'tasarim-teknolojileri', label: 'Tasarım Teknolojileri' },
  { id: 'tekstil-teknolojisi', label: 'Tekstil Teknolojisi' },
  { id: 'tesisat-iklimlendirme', label: 'Tesisat Teknolojisi Ve İklimlendirme' },
  { id: 'ulastirma-hizmetleri', label: 'Ulaştırma Hizmetleri' },
  { id: 'yiyecek-icecek', label: 'Yiyecek İçecek Hizmetleri' }
];

export const sertifikalarData = [
  // --- AHŞAP TEKNOLOJİSİ ---
  {
    id: 'ahsap-isleme-elemani',
    category: 'ahsap-teknolojisi',
    categoryName: 'Ahşap Teknolojisi',
    title: 'Ahşap İşleme Teknolojisi Elemanı Eğitimi',
    code: 'AHS-001',
    duration: '120 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: 'Ahşap malzemenin işlenmesi, kesilmesi, şekillendirilmesi ve imalat süreçlerinde teknik yeterlilik sağlayan sertifika programı.'
  },
  {
    id: 'ahsap-oymaciligi',
    category: 'ahsap-teknolojisi',
    categoryName: 'Ahşap Teknolojisi',
    title: 'Ahşap Oymacılığı Ve Süsleme Eğitimi',
    code: 'AHS-002',
    duration: '80 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: 'Geleneksel ve modern ahşap oyma teknikleri, motif çizimleri ve ahşap yüzey işleme eğitimi.'
  },
  {
    id: 'mobilya-iskelet-imalati',
    category: 'ahsap-teknolojisi',
    categoryName: 'Ahşap Teknolojisi',
    title: 'Mobilya İskelet İmalatçısı Eğitimi',
    code: 'AHS-003',
    duration: '160 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: 'Ahşap mobilya gövde ve iskelet tasarımları, birleştirme teknikleri ve iş güvenliği standartları eğitimi.'
  },

  // --- BİLİŞİM TEKNOLOJİLERİ ---
  {
    id: 'web-tasarim-gellistirme',
    category: 'bilisim-teknolojileri',
    categoryName: 'Bilişim Teknolojileri',
    title: 'Web Tasarımı Ve Ön Yüz Geliştirme Eğitimi',
    code: 'BIL-001',
    duration: '200 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: 'HTML5, CSS3, JavaScript ve modern arayüz kütüphaneleri ile web sitesi geliştirme uzmanlığı programı.'
  },
  {
    id: 'python-yazilim-uzmanligi',
    category: 'bilisim-teknolojileri',
    categoryName: 'Bilişim Teknolojileri',
    title: 'Python İle Yazılım Geliştirme Eğitimi',
    code: 'BIL-002',
    duration: '180 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: 'Temel ve ileri seviye Python programlama, veri yapıları, nesne yönelimli programlama ve otomasyon eğitimi.'
  },
  {
    id: 'siber-guvenlik-elemani',
    category: 'bilisim-teknolojileri',
    categoryName: 'Bilişim Teknolojileri',
    title: 'Siber Güvenlik Ve Ağ Yönetimi Eğitimi',
    code: 'BIL-003',
    duration: '240 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: 'Ağ altyapıları, sızma testleri, sistem güvenliği ve siber tehditlere karşı koruma protokolleri eğitimi.'
  },

  // --- ELEKTRİK ELEKTRONİK TEKNOLOJİSİ ---
  {
    id: 'elektrik-pano-montorlugu',
    category: 'elektrik-elektronik',
    categoryName: 'Elektrik Elektronik Teknolojisi',
    title: 'Elektrik Pano Montörlüğü Eğitimi',
    code: 'ELK-001',
    duration: '150 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: 'Endüstriyel elektrik panolarının montajı, kablolama, şema okuma ve bakım-onarım teknikleri eğitimi.'
  },
  {
    id: 'plc-otomasyon-sistemleri',
    category: 'elektrik-elektronik',
    categoryName: 'Elektrik Elektronik Teknolojisi',
    title: 'PLC Ve Endüstriyel Otomasyon Eğitimi',
    code: 'ELK-002',
    duration: '160 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: 'PLC programlama, sensörler, aktüatörler ve fabrika otomasyon sistemlerinin yönetimi eğitimi.'
  },

  // --- İNŞAAT TEKNOLOJİSİ ---
  {
    id: 'santiye-sefligi-uzmanligi',
    category: 'insaat-teknolojisi',
    categoryName: 'İnşaat Teknolojisi',
    title: 'Şantiye Saha Yönetimi Ve İŞG Eğitimi',
    code: 'INS-001',
    duration: '100 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: 'İnşaat sahalarında yapım süreçlerinin kontrolü, malzeme takibi ve şantiye iş güvenliği yönetimi.'
  },
  {
    id: 'autocad-teknik-cizim',
    category: 'insaat-teknolojisi',
    categoryName: 'İnşaat Teknolojisi',
    title: 'AutoCAD İle Mimari Ve Teknik Çizim Eğitimi',
    code: 'INS-002',
    duration: '120 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: '2D ve 3D mimari proje çizimi, statik detaylandırma ve kat planı oluşturma eğitimi.'
  },

  // --- HASTA VE YAŞLI HİZMETLERİ ---
  {
    id: 'hasta-ve-yasli-bakim-elemani',
    category: 'hasta-ve-yasli-hizmetleri',
    categoryName: 'Hasta Ve Yaşlı Hizmetleri',
    title: 'Hasta Ve Yaşlı Bakım Elemanı Eğitimi',
    code: 'HYH-001',
    duration: '560 Saat',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600',
    description: 'Hasta ve yaşlı bireylerin öz bakımı, ilaç takibi, beslenme ve acil müdahale teknikleri yetkinlik sertifikası.'
  },
];
