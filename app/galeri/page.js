'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Örnek Veri Yapısı (Kategoriler eklendi)
const galeriVerisi = [
  { id: 1, category: 'egitim', title: 'İlk Yardım Eğitimi', url: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=600' },
  { id: 2, category: 'denetim', title: 'Saha İSG Denetimi', url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600' },
  { id: 3, category: 'tatbikat', title: 'Yangın Tatbikatı', url: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=600' },
  { id: 4, category: 'egitim', title: 'Yüksekte Çalışma Eğitimi', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600' },
  { id: 5, category: 'denetim', title: 'Kişisel Koruyucu Donanım Kontrolü', url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=600' },
  { id: 6, category: 'tatbikat', title: 'Acil Durum Tahliye Planı', url: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=600' }
];

const kategoriler = [
  { id: 'hepsi', label: 'Tümü' },
  { id: 'egitim', label: 'Eğitimler' },
  { id: 'denetim', label: 'Saha Denetimleri' },
  { id: 'tatbikat', label: 'Tatbikatlar' }
];

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState('hepsi');
  const [lightboxIndex, setLightboxIndex] = useState(null); // Tıklanan resmin index'ini tutar

  // 1. Filtreleme Mantığı
  const filteredImages = activeFilter === 'hepsi' ? galeriVerisi : galeriVerisi.filter(img => img.category === activeFilter);

  // 2. Slide (Sağa-Sola Kaydırma) Fonksiyonları (Event doğrudan parametre olarak alınıyor)
  const sonrakiResim = e => {
    if (e) e.stopPropagation(); // Event kontrolü eklendi
    setLightboxIndex(prevIndex => (prevIndex + 1) % filteredImages.length);
  };

  const oncekiResim = e => {
    if (e) e.stopPropagation();
    setLightboxIndex(prevIndex => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  // 3. Klavye Yön Tuşları Desteği (UX Geliştirmesi)
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = e => {
      if (e.key === 'ArrowRight') {
        sonrakiResim();
      } else if (e.key === 'ArrowLeft') {
        oncekiResim();
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  return (
    <div className="min-h-screen bg-background py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Üst Başlık */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Fotoğraf Galerisi</h1>
          <p className="mt-4 text-muted-foreground">Gerçekleştirdiğimiz eğitimler, saha denetimleri ve acil durum tatbikatlarından kareler.</p>
        </div>

        {/* Filtre Butonları */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {kategoriler.map(kat => (
            <button
              key={kat.id}
              onClick={() => {
                setActiveFilter(kat.id);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform cursor-pointer hover:-translate-y-0.5 active:scale-[0.98] ${
                activeFilter === kat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/30'
                  : 'bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground border border-gray-200/80 hover:border-gray-300 dark:hover:border-border/80 hover:shadow-sm'
              }`}
            >
              {kat.label}
            </button>
          ))}
        </div>

        {/* Resim Grid Yapısı */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-sm cursor-pointer transition-all duration-500 hover:shadow-xl"
              data-aos="fade-up"
            >
              <Image
                src={img.url}
                alt={img.title}
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-xs text-blue-300 font-medium uppercase tracking-wider">Büyütmek İçin Tıklayın</span>
                  <p className="text-white font-semibold text-lg mt-1">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Alanı */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Kapatma Butonu */}
            <button className="absolute top-6 right-6 text-foreground/70 hover:text-foreground text-3xl font-light p-2 cursor-pointer z-50" onClick={() => setLightboxIndex(null)}>
              ✕
            </button>

            {/* Sol Ok Butonu - z-50 kilitlendi ve event iletildi */}
            <button
              className="absolute left-4 md:left-8 bg-card text-foreground hover:bg-muted p-3 md:p-4 rounded-full transition-colors shadow-lg z-50 cursor-pointer text-xl font-bold"
              onClick={oncekiResim}
            >
              ‹
            </button>

            {/* Orta Resim Alanı */}
            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <Image
                src={filteredImages[lightboxIndex]?.url}
                alt={filteredImages[lightboxIndex]?.title}
                width={1000}
                height={700}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                loading="eager"
              />
              <p className="text-foreground text-lg font-medium mt-4 text-center">{filteredImages[lightboxIndex]?.title}</p>
              <span className="text-muted-foreground text-xs mt-1">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>

            {/* Sağ Ok Butonu - z-50 kilitlendi ve event iletildi */}
            <button
              className="absolute right-4 md:right-8 bg-card text-foreground hover:bg-muted p-3 md:p-4 rounded-full transition-colors shadow-lg z-50 cursor-pointer text-xl font-bold"
              onClick={sonrakiResim}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
