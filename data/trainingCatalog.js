export const trainingCategories = [
  { id: 1, slug: 'isg-zorunlu', title: 'İSG Zorunlu Eğitimler' },
  { id: 2, slug: 'is-makinesi', title: 'İş Makinesi Operatör Eğitimleri' },
  { id: 3, slug: 'hijyen', title: 'Hijyen Eğitimleri' },
  { id: 4, slug: 'yangin-acil-durum', title: 'Yangın ve Acil Durum' },
  { id: 5, slug: 'mesleki-teknik', title: 'Mesleki Teknik Eğitimler' }
];

export const trainingItems = [
  // ─────────────────────────────────────────
  // İSG Zorunlu
  // ─────────────────────────────────────────
  {
    id: 1,
    slug: 'yuksekte-calisma-egitimi',
    title: 'Yüksekte Çalışma Eğitimi',
    categorySlug: 'isg-zorunlu',
    categoryLabel: 'İSG Zorunlu',
    duration: '8-16 Saat',
    validity: '2 Yıl',
    summary:
      '6331 sayılı İSG Kanunu kapsamında zorunlu tutulan bu eğitim, yüksekte çalışan personelin güvenli çalışma tekniklerini öğrenmesini ve düşme riskini minimize etmesini sağlar.',
    goal: [
      'Düşme riski bulunan alanlarda güvenlik önlemlerini uygulama',
      'Kişisel koruyucu ekipmanları doğru şekilde kullanma',
      'Yüksekte çalışma yönetmeliklerine hakim olma',
      'Acil durum prosedürlerini öğrenme'
    ],
    legal:
      '6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında zorunlu kılınan bu eğitim; Yapı İşlerinde İSG Yönetmeliği Ek-4 Madde 2/g uyarınca yüksekte çalışan tüm personelin alması gereken bir eğitimdir.',
    theoryModules: [
      'Yükseklik kavramları ve tanımlar',
      'Düşme faktörleri ve korunma yöntemleri',
      'Kişisel koruyucu donanımların seçimi ve kullanımı',
      'Yasal mevzuat ve standartlar'
    ],
    practicalModules: ['Emniyet kemeri kullanım teknikleri', 'Düşme durdurma sistemleri kurulumu', 'Kurtarma prosedürleri tatbikatı', 'İskele güvenlik kontrolleri'],
    schedule: [
      { type: 'Temel Eğitim', duration: '8 Saat', validity: '2 Yıl Geçerli' },
      { type: 'İleri Seviye', duration: '16 Saat', validity: '2 Yıl Geçerli' }
    ],
    certificateNote:
      'Eğitimi başarıyla tamamlayan katılımcılara İnci Akademi onaylı, üzerinde katılımcı adı, eğitim adı, sertifika numarası ve geçerlilik tarihi bulunan resmi sertifika düzenlenir.'
  },
  {
    id: 2,
    slug: 'ilk-yardim-egitimi',
    title: 'İlk Yardım Eğitimi',
    categorySlug: 'isg-zorunlu',
    categoryLabel: 'İSG Zorunlu',
    duration: '16 Saat',
    validity: '3 Yıl',
    summary: 'İşyerlerinde acil durumlarda doğru ve hızlı müdahale yetkinliği kazandıran, yasal zorunluluklar çerçevesinde düzenlenen sertifikalı eğitim programı.',
    goal: [
      'Temel yaşam desteği (TYD) ve CPR teknikleri',
      'Kanamaları durdurma ve yara bakımı',
      'Şok, bilinç kaybı ve yaralanmalara müdahale',
      'Acil durum organizasyonu ve iletişim'
    ],
    legal: '6331 sayılı İSG Kanunu ve İlkyardım Yönetmeliği kapsamında zorunludur. Her 10 çalışan için en az 1 ilk yardımcı bulundurulması yasal yükümlülüktür.',
    theoryModules: [
      'Temel yaşam desteği prensipleri',
      'İlkyardım öncelikleri ve vücut anatomisi',
      'Yaralanma tipleri ve bakım protokolleri',
      'Acil durum yönetimi ve çağrı prosedürleri'
    ],
    practicalModules: ['CPR ve AED uygulaması', 'Kırık, çıkık ve burkulma müdahalesi', 'Yanık ve zehirlenme tedavisi', 'Koma pozisyonu uygulamaları'],
    schedule: [
      { type: 'Standart Eğitim', duration: '16 Saat', validity: '3 Yıl Geçerli' },
      { type: 'Yenileme Eğitimi', duration: '8 Saat', validity: '3 Yıl Geçerli' }
    ],
    certificateNote: 'Sağlık Bakanlığı onaylı eğitim kurumları aracılığıyla verilen eğitim sonunda resmi ilk yardım sertifikası düzenlenir.'
  },
  {
    id: 3,
    slug: 'is-sagligi-guvenligi-egitimi',
    title: 'İş Sağlığı ve Güvenliği Eğitimi',
    categorySlug: 'isg-zorunlu',
    categoryLabel: 'İSG Zorunlu',
    duration: '8-16 Saat',
    validity: '2 Yıl',
    summary: 'İşe giriş ve periyodik olarak tüm çalışanlara verilmesi zorunlu olan temel İSG eğitimi; risk tanıma, güvenli çalışma ve acil durum bilinci kazandırır.',
    goal: [
      'İşyeri tehlikelerini tanıma ve risk değerlendirmesi yapabilme',
      'Kişisel koruyucu donanım (KKD) seçimi ve doğru kullanımı',
      'Acil durum planlarına ve tahliye prosedürlerine hakim olma',
      'İSG mevzuatı hakkında temel bilgi edinme'
    ],
    legal: 'Çalışanların Eğitimi Hakkında Yönetmelik Madde 5 uyarınca işe başlamadan önce ve periyodik aralıklarla İSG eğitimi zorunludur.',
    theoryModules: ['İSG kavramları ve temel mevzuat', 'Risk değerlendirme yöntemleri', 'KKD türleri ve kullanım kriterleri', 'Acil durum prosedürleri ve tahliye planları'],
    practicalModules: ['Risk tanımlama alıştırmaları', 'KKD takma ve çıkarma uygulaması', 'Acil çıkış ve toplanma noktası senaryoları', 'Tehlike bildirim uygulamaları'],
    schedule: [
      { type: 'Az Tehlikeli İşyeri', duration: '8 Saat', validity: '2 Yıl Geçerli' },
      { type: 'Tehlikeli / Çok Tehlikeli', duration: '16 Saat', validity: '2 Yıl Geçerli' }
    ],
    certificateNote: 'Eğitim sonunda onaylı İSG eğitim katılım belgesi ve bireysel eğitim kartı düzenlenir.'
  },
  {
    id: 4,
    slug: 'elektrik-guvenligi-egitimi',
    title: 'Elektrik Güvenliği Eğitimi',
    categorySlug: 'isg-zorunlu',
    categoryLabel: 'İSG Zorunlu',
    duration: '8 Saat',
    validity: '2 Yıl',
    summary:
      'Elektrikli ekipman ve tesisatlarla çalışan personele yönelik; elektrik çarpması riskini azaltmayı, güvenli müdahale yöntemlerini ve yasal yükümlülükleri aktaran eğitim.',
    goal: [
      'Elektrik tehlikelerini ve risk düzeylerini tanıma',
      'Güvenli çalışma izni (LOTO) prosedürlerini uygulama',
      'KKD ve izolasyon ekipmanı kullanımı',
      'Elektrik çarpması durumunda ilk müdahale'
    ],
    legal: 'Elektrik İç Tesisleri Yönetmeliği ve 6331 sayılı İSG Kanunu kapsamında elektrikle çalışan personele yönelik eğitim zorunludur.',
    theoryModules: [
      'Elektrik tehlikeleri ve vücut üzerindeki etkileri',
      'Kilitleyip-etiketleme (LOTO) prosedürleri',
      'Güvenli çalışma mesafeleri ve bölge sınıfları',
      'Yasal standartlar ve bakım gereklilikleri'
    ],
    practicalModules: ['KKD ve izolasyon araçları tanıtımı', 'LOTO uygulaması tatbikatı', 'Tehlikeli alan sınıflandırması', 'Acil durum müdahale tatbikatı'],
    schedule: [{ type: 'Temel Eğitim', duration: '8 Saat', validity: '2 Yıl Geçerli' }],
    certificateNote: 'Elektrik güvenliği eğitim katılım sertifikası düzenlenir ve çalışan dosyasına eklenir.'
  },
  {
    id: 5,
    slug: 'mobil-saglik-hizmetleri',
    title: 'Mobil Sağlık Hizmetleri',
    categorySlug: 'isg-zorunlu',
    categoryLabel: 'İSG Zorunlu',
    duration: 'Periyodik',
    validity: 'Yıllık',
    summary: 'İşletmelere yerinde sağlık taraması, periyodik kontroller ve çalışan sağlık dosyalarının güncel takibini sağlayan bütünleşik hizmet paketi.',
    goal: [
      'Periyodik sağlık muayenelerini yerinde gerçekleştirme',
      'Çalışan sağlık kayıtlarını düzenli ve eksiksiz tutma',
      'Risk değerlendirmesine dayalı takip planı oluşturma',
      'Yasal mevzuat uyumluluğunu sağlama'
    ],
    legal: 'İş Sağlığı ve Güvenliği Kanunu Madde 15 uyarınca işverenler, çalışanların sağlık gözetimini sağlamakla yükümlüdür.',
    theoryModules: ['İşyeri sağlık tarama protokolleri', 'Periyodik muayene kriterleri ve sıklıkları', 'Sağlık kayıt yönetimi ve gizlilik', 'Mevzuat gereklilikleri'],
    practicalModules: ['Saha tarama uygulaması ve ekipman kullanımı', 'Sağlık dosyası hazırlama', 'Risk bildirimi ve ilgili birimlere yönlendirme', 'Raporlama ve takip süreçleri'],
    schedule: [
      { type: 'Başlangıç Taraması', duration: '1 Gün', validity: 'Periyodik' },
      { type: 'Yıllık Takip', duration: 'Periyodik', validity: 'Yıllık' }
    ],
    certificateNote: 'Gerçekleştirilen sağlık taramalarına ilişkin resmi raporlar ve çalışan bazlı sağlık kayıtları düzenlenerek teslim edilir.'
  },
  // ─────────────────────────────────────────
  // İş Makinesi
  // ─────────────────────────────────────────
  {
    id: 6,
    slug: 'forklift-operatoru-egitimi',
    title: 'Forklift Operatörü Eğitimi',
    categorySlug: 'is-makinesi',
    categoryLabel: 'İş Makinesi',
    duration: '24 Saat',
    validity: '5 Yıl',
    summary:
      'İş makinesi operatörü eğitimleri kapsamında forklift kullanımı, bakım ve iş güvenliği kurallarını teorik ve uygulamalı olarak aktaran ulusal yeterlilik çerçevesindeki eğitim.',
    goal: [
      'Forklift mekanik yapısını ve kontrol sistemlerini öğrenme',
      'Güvenli yükleme, taşıma ve boşaltma prosedürleri',
      'İşyeri trafik kurallarına uyum',
      'Günlük bakım ve kontrol prosedürleri'
    ],
    legal: 'İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği kapsamında forklift kullanımı için operatör eğitimi ve belgesi zorunludur.',
    theoryModules: ['Forklift tipleri ve mekanik yapısı', 'Yük kapasitesi ve denge prensipleri', 'Yasal mevzuat ve standartlar', 'Acil durum prosedürleri'],
    practicalModules: ['Manevra ve park tatbikatları', 'Yük alma, taşıma ve bırakma', 'Rampa ve dar alan sürüşü', 'Günlük bakım kontrolleri'],
    schedule: [
      { type: 'Temel Eğitim', duration: '24 Saat', validity: '5 Yıl Geçerli' },
      { type: 'Yenileme Eğitimi', duration: '8 Saat', validity: '5 Yıl Geçerli' }
    ],
    certificateNote: 'Eğitim sonunda MYK onaylı Forklift Operatörü Yeterlilik Belgesi düzenlenir.'
  },
  {
    id: 7,
    slug: 'vinc-operatoru-egitimi',
    title: 'Vinç Operatörü Eğitimi',
    categorySlug: 'is-makinesi',
    categoryLabel: 'İş Makinesi',
    duration: '24-40 Saat',
    validity: '5 Yıl',
    summary: 'Sabit, mobil ve köprü vinçleri güvenli ve verimli şekilde kullanmak için gereken teorik bilgi ve uygulamalı beceriyi kazandıran ulusal yeterlilik kapsamlı eğitim.',
    goal: [
      'Vinç tiplerini ve çalışma prensiplerini öğrenme',
      'Yük hesaplama ve askı düzeni kurma',
      'Haberleşme sinyallerini ve prosedürleri öğrenme',
      'Bakım ve arıza tespit süreçleri'
    ],
    legal: 'İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği uyarınca vinç operasyonu için eğitim ve belge zorunludur.',
    theoryModules: ['Vinç tipleri ve mekanik yapısı', 'Kapasite ve stabilite hesabı', 'Yasal mevzuat ve sertifikasyon gereklilikleri', 'İşaret ve sinyal protokolleri'],
    practicalModules: ['Kanca ve askı sistemi kurulumu', 'Yük kaldırma ve taşıma tatbikatı', 'Parkur ve hassasiyet tatbikatları', 'Periyodik kontrol uygulaması'],
    schedule: [
      { type: 'Mobil Vinç', duration: '40 Saat', validity: '5 Yıl Geçerli' },
      { type: 'Köprü Vinç', duration: '24 Saat', validity: '5 Yıl Geçerli' }
    ],
    certificateNote: 'MYK onaylı Vinç Operatörü sertifikası düzenlenir.'
  },
  {
    id: 8,
    slug: 'ekskavatör-operatoru-egitimi',
    title: 'Ekskavatör Operatörü Eğitimi',
    categorySlug: 'is-makinesi',
    categoryLabel: 'İş Makinesi',
    duration: '32-40 Saat',
    validity: '5 Yıl',
    summary: 'Paletli ve tekerlekli ekskavatör işletimi, zemin analizi, güvenli kazı teknikleri ve yasal yükümlülüklere uygun operasyon becerisi kazandıran kapsamlı eğitim.',
    goal: [
      'Ekskavatör bileşenlerini ve hidrolik sistemini tanıma',
      'Güvenli kazı ve hafriyat tekniklerini uygulama',
      'Hat ve boru koruma prosedürleri',
      'Zemin stabilitesi ve heyelan riskini yönetme'
    ],
    legal: 'İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği kapsamında iş makinesi operatörlüğü belgesi zorunludur.',
    theoryModules: ['Ekskavatör tipleri ve bileşenleri', 'Zemin sınıfları ve stabilite faktörleri', 'Kazı güvenliği ve mevzuat', 'Bakım kontrol listeleri'],
    practicalModules: ['Düz ve eğimli zeminde operasyon', 'Derin kazı güvenlik tatbikatı', 'Makine bakım uygulaması', 'Acil durdurma prosedürleri'],
    schedule: [
      { type: 'Paletli Ekskavatör', duration: '40 Saat', validity: '5 Yıl Geçerli' },
      { type: 'Tekerlekli Ekskavatör', duration: '32 Saat', validity: '5 Yıl Geçerli' }
    ],
    certificateNote: 'MYK onaylı Ekskavatör Operatörü Yeterlilik Belgesi düzenlenir.'
  },
  // ─────────────────────────────────────────
  // Hijyen
  // ─────────────────────────────────────────
  {
    id: 9,
    slug: 'gida-hijyeni-egitimi',
    title: 'Gıda Hijyeni Eğitimi',
    categorySlug: 'hijyen',
    categoryLabel: 'Hijyen',
    duration: '8 Saat',
    validity: '2 Yıl',
    summary: 'Gıda sektöründe zorunlu hijyen belgesini edinmek ve gıda güvenliği standartlarını uygulamak için gereken bilgi ve becerileri aktaran mevzuat uyumlu eğitim.',
    goal: [
      'Gıda güvenliği tehlikelerini tanıma',
      'HACCP prensiplerini anlama ve uygulama',
      'Kişisel hijyen ve temizlik prosedürleri',
      'Yasal gıda hijyen gerekliliklerini öğrenme'
    ],
    legal: '5996 sayılı Veteriner Hizmetleri, Bitki Sağlığı, Gıda ve Yem Kanunu ile Gıda Hijyeni Yönetmeliği kapsamında gıda işletmelerinde çalışanlara hijyen eğitimi zorunludur.',
    theoryModules: ['Gıda kaynaklı hastalıklar ve tehlikeler', 'HACCP ve ön koşul programları', 'Gıda depolama, taşıma ve soğuk zincir', 'Yasal mevzuat ve denetim süreçleri'],
    practicalModules: ['Yüzey temizliği ve dezenfeksiyon uygulaması', 'Sıcaklık kontrolü alıştırmaları', 'Kayıt ve belgelendirme', 'Denetim simülasyonu'],
    schedule: [
      { type: 'Standart Eğitim', duration: '8 Saat', validity: '2 Yıl Geçerli' },
      { type: 'Yenileme', duration: '4 Saat', validity: '2 Yıl Geçerli' }
    ],
    certificateNote: 'Gıda Tarım ve Hayvancılık Bakanlığı kapsamında geçerli hijyen belgesi düzenlenir.'
  },
  {
    id: 10,
    slug: 'kisisel-hijyen-egitimi',
    title: 'Kişisel Hijyen ve Sanitasyon Eğitimi',
    categorySlug: 'hijyen',
    categoryLabel: 'Hijyen',
    duration: '4 Saat',
    validity: '2 Yıl',
    summary: 'Tüm sektörlerdeki çalışanlara yönelik, kişisel hijyen alışkanlıkları, çalışma ortamı temizliği ve enfeksiyon kontrolü konularını kapsayan temel eğitim.',
    goal: [
      'El yıkama, iş kıyafeti ve hijyen kurallarına uyum',
      'Enfeksiyöz hastalıkların yayılmasını önleme',
      'Çalışma ortamı sanitasyon prosedürleri',
      'Kişisel koruyucu ekipman kullanımı'
    ],
    legal: 'İşyerlerinde sağlık ve güvenliğin sağlanmasına ilişkin yönetmelikler ve sektörel standartlar uyarınca gereklidir.',
    theoryModules: ['Mikroorganizmalar ve enfeksiyon yolları', 'Kişisel hijyen prensipleri', 'Sanitasyon yöntemleri ve dezenfektanlar', 'Yasal düzenlemeler'],
    practicalModules: ['Doğru el yıkama tekniği demonstrasyonu', 'Sanitasyon ekipmanı kullanımı', 'Çalışma alanı temizlik protokolleri', 'KKD giyim prosedürleri'],
    schedule: [{ type: 'Temel Eğitim', duration: '4 Saat', validity: '2 Yıl Geçerli' }],
    certificateNote: 'Kişisel hijyen ve sanitasyon eğitim katılım belgesi düzenlenir.'
  },
  // ─────────────────────────────────────────
  // Yangın ve Acil Durum
  // ─────────────────────────────────────────
  {
    id: 11,
    slug: 'yangin-egitimi-ve-tatbikati',
    title: 'Yangın Eğitimi ve Tatbikatı',
    categorySlug: 'yangin-acil-durum',
    categoryLabel: 'Yangın ve Acil Durum',
    duration: '4-8 Saat',
    validity: '1 Yıl',
    summary: 'Risk sınıfına uygun yangın söndürme teknikleri, tahliye planı uygulaması ve ekip koordinasyonunu kapsayan sahada uygulanabilir eğitim.',
    goal: [
      'Yangın sınıflarını ve söndürücü türlerini tanıma',
      'Güvenli tahliye yollarını ve prosedürlerini uygulama',
      'Yangın ihbar sistemlerini doğru şekilde kullanma',
      'Panik yönetimi ve ekip koordinasyonu'
    ],
    legal: '6331 sayılı İSG Kanunu ve Binaların Yangından Korunması Hakkında Yönetmelik kapsamında tüm işyerlerinde yıllık yangın eğitimi ve tatbikatı zorunludur.',
    theoryModules: ['Yangın kimyası ve sınıfları', 'Söndürme sistemleri ve malzemeleri', 'Tahliye planları ve toplanma noktaları', 'Yasal yükümlülükler ve kayıt tutma'],
    practicalModules: ['Söndürücü kullanım tatbikatı', 'Tahliye senaryosu uygulaması', 'İhbar ve acil arama prosedürleri', 'Tatbikat sonrası değerlendirme'],
    schedule: [
      { type: 'Temel Eğitim', duration: '4 Saat', validity: '1 Yıl Geçerli' },
      { type: 'Tatbikat Dahil', duration: '8 Saat', validity: '1 Yıl Geçerli' }
    ],
    certificateNote: 'Yangın eğitimi katılım sertifikası ve tatbikat tutanağı düzenlenerek kayıt altına alınır.'
  },
  {
    id: 12,
    slug: 'acil-durum-tahliye-egitimi',
    title: 'Acil Durum ve Tahliye Eğitimi',
    categorySlug: 'yangin-acil-durum',
    categoryLabel: 'Yangın ve Acil Durum',
    duration: '4-8 Saat',
    validity: '1 Yıl',
    summary: 'Deprem, yangın ve diğer acil durumlarda personelin sakin, hızlı ve koordineli hareket edebilmesi için senaryolu tatbikatlar eşliğinde verilen eğitim.',
    goal: [
      'Acil durum planını ve toplanma noktalarını öğrenme',
      'Tahliye lideri ve yönlendiricilerin görevleri',
      'Panik yönetimi ve iletişim prosedürleri',
      'Yaralı taşıma ve yönlendirme teknikleri'
    ],
    legal: 'Binaların Yangından Korunması Hakkında Yönetmelik kapsamında yıllık acil durum tatbikatı zorunludur.',
    theoryModules: ['Acil durum planı bileşenleri', 'Tahliye rota planlama ve işaretleme', 'İletişim ve ihbar sistemleri', 'Özel ihtiyaç sahipleri prosedürleri'],
    practicalModules: ['Tahliye tatbikatı senaryosu', 'Toplanma noktası uygulaması', 'Yaralı taşıma demonstrasyonu', 'Tatbikat değerlendirme ve raporlama'],
    schedule: [
      { type: 'Teorik Eğitim', duration: '4 Saat', validity: '1 Yıl Geçerli' },
      { type: 'Tatbikat Dahil', duration: '8 Saat', validity: '1 Yıl Geçerli' }
    ],
    certificateNote: 'Tatbikat tutanağı ve katılım sertifikası yasal kayıt için düzenlenir.'
  },
  // ─────────────────────────────────────────
  // Mesleki Teknik
  // ─────────────────────────────────────────
  {
    id: 13,
    slug: 'kaynak-teknolojisi-egitimi',
    title: 'Kaynak Teknolojisi Eğitimi',
    categorySlug: 'mesleki-teknik',
    categoryLabel: 'Mesleki Teknik',
    duration: '40-80 Saat',
    validity: '5 Yıl',
    summary: 'MIG/MAG, TIG ve elektrik ark kaynağı tekniklerini kapsayan, endüstri standartlarında mesleki yeterlilik belgesi edinmeyi sağlayan kapsamlı eğitim programı.',
    goal: [
      'Temel ve ileri kaynak tekniklerini öğrenme',
      'Malzeme özellikleri ve uygun kaynak yöntemi seçimi',
      'Kaynak kalite kontrol standartlarını uygulama',
      'İş güvenliği prosedürlerine uyum'
    ],
    legal: 'MYK tarafından belirlenen Ulusal Yeterlilik çerçevesinde kaynak işlemlerinde mesleki yeterlilik belgesi bazı sektörlerde zorunlu tutulmaktadır.',
    theoryModules: [
      'Kaynak yöntemleri ve özellikleri',
      'Metallerin kaynaklanabilirliği ve ısıl etkileri',
      'Kalite standartları ve tahribatsız muayene',
      'İSG kuralları ve kişisel koruyucu ekipman'
    ],
    practicalModules: [
      'MIG/MAG uygulama ve parametre ayarı',
      'TIG uygulama ve estetik paso kaynağı',
      'Pozisyon kaynağı (yatay, düşey, tavan)',
      'Kaynak hatası analizi ve düzeltme'
    ],
    schedule: [
      { type: 'Temel Kaynak', duration: '40 Saat', validity: '5 Yıl Geçerli' },
      { type: 'İleri Seviye', duration: '80 Saat', validity: '5 Yıl Geçerli' }
    ],
    certificateNote: 'MYK onaylı Kaynakçı Yeterlilik Belgesi düzenlenir.'
  },
  {
    id: 14,
    slug: 'gurultu-titresim-egitimi',
    title: 'Gürültü ve Titreşim Eğitimi',
    categorySlug: 'isg-zorunlu',
    categoryLabel: 'İSG Zorunlu',
    duration: '4 Saat',
    validity: '2 Yıl',
    summary: 'Gürültülü ve titreşimli ortamlarda çalışan personele yönelik; işitme kaybını önleme, KKD kullanımı ve mevzuat gereklilikleri konularını aktaran eğitim.',
    goal: [
      'Gürültü düzeyi ölçümü ve risk değerlendirmesi yapabilme',
      'İşitme koruyucu seçimi ve kullanımı',
      'Titreşim kaynaklı meslek hastalıklarını tanıma',
      'Maruziyet sınır değerlerini öğrenme'
    ],
    legal: 'Gürültü Yönetmeliği (2003/10/EC) ve Titreşim Yönetmeliği (2002/44/EC) kapsamında risk altındaki çalışanlara eğitim zorunludur.',
    theoryModules: [
      'Gürültü ve titreşimin fiziksel etkileri',
      'Maruziyet sınır değerleri (85/90 dB)',
      'KKD tipleri ve seçim kriterleri',
      'Yasal yükümlülükler ve işveren sorumlulukları'
    ],
    practicalModules: ['KKD takma ve kontrol uygulaması', 'Gürültü ölçüm ekipmanı tanıtımı', 'Tehlikeli alan tanımlama', 'Risk bildirimi ve kayıt tutma'],
    schedule: [{ type: 'Temel Eğitim', duration: '4 Saat', validity: '2 Yıl Geçerli' }],
    certificateNote: 'Eğitim katılım sertifikası düzenlenir ve çalışan sağlık dosyasına eklenir.'
  }
];

export function getTrainingBySlug(slug) {
  return trainingItems.find(item => item.slug === slug) || null;
}

export function getTrainingsByCategory(categorySlug) {
  return trainingItems.filter(item => item.categorySlug === categorySlug);
}
