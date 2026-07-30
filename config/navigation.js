/**
 * Uygulama genelinde kullanılan navigasyon bağlantıları
 * Header, Footer ve diğer navigasyon bileşenleri bu veriyi kullanır
 */
// src/config/navigation.js
export const navigationLinks = [
  {
    title: 'Sertifikalar',
    path: '/sertifikalar',
    isMegaMenu: true
  },
  { title: 'Hakkımızda', path: '/hakkimizda' },
  { title: 'EĞİTİMLER', path: '/egitimler', hasDropdown: true },
  { title: 'REFERANSLAR', path: '/referanslar' },
  { title: 'GALERİ', path: '/galeri' },
  { title: 'BLOG', path: '/blog' },
  { title: 'İletişim', path: '/iletisim' }
];

/**
 * Footer için daha kısa navigasyon linki
 */
export const footerNavLinks = [
  { title: 'Hakkımızda', path: '/hakkimizda' },
  { title: 'Eğitimler', path: '/egitimler' },
  { title: 'Referanslar', path: '/referanslar' },
  { title: 'Galeri', path: '/galeri' },
  { title: 'İletişim', path: '/iletisim' }
];
