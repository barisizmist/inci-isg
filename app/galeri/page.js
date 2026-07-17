'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { galleryItems } from '@/data/mockData';

const kategoriler = [
  { id: 'hepsi', label: 'Tümü' },
  { id: 'egitim', label: 'Eğitimler' },
  { id: 'denetim', label: 'Saha Denetimleri' },
  { id: 'tatbikat', label: 'Tatbikatlar' }
];

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState('hepsi');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = activeFilter === 'hepsi' ? galleryItems : galleryItems.filter(img => img.category === activeFilter);

  const sonrakiResim = e => {
    if (e) e.stopPropagation();
    setLightboxIndex(prevIndex => (prevIndex + 1) % filteredImages.length);
  };

  const oncekiResim = e => {
    if (e) e.stopPropagation();
    setLightboxIndex(prevIndex => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

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
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <p className="text-[var(--brand)] text-xs uppercase tracking-[0.16em] font-semibold">Galeri</p>
          <h1 className="text-4xl sm:text-5xl mt-3">Saha ve Eğitim Kareleri</h1>
          <p className="mt-4 leading-relaxed text-foreground/80">Eğitim, denetim ve tatbikat süreçlerinden seçili görseller.</p>
        </div>

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
                  ? 'brand-button text-white shadow-lg shadow-cyan-900/20'
                  : 'bg-[var(--surface)] text-muted-foreground hover:text-foreground border border-foreground/10 hover:border-foreground/20 hover:shadow-sm'
              }`}
            >
              {kat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-sm cursor-pointer transition-all duration-500 hover:shadow-xl aspect-[3/2]"
              data-aos="fade-up"
            >
              <Image
                src={img.url}
                alt={img.title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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

        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn select-none"
            onClick={() => setLightboxIndex(null)}
          >
            <button className="absolute top-6 right-6 text-foreground/70 hover:text-foreground text-3xl font-light p-2 cursor-pointer z-50" onClick={() => setLightboxIndex(null)}>
              ✕
            </button>

            <button
              className="absolute left-4 md:left-8 bg-card text-foreground hover:bg-muted p-3 md:p-4 rounded-full transition-colors shadow-lg z-50 cursor-pointer text-xl font-bold"
              onClick={oncekiResim}
            >
              ‹
            </button>

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
