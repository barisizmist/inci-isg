'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
      title: 'Güvenli Çalışma Ortamları, Sağlıklı Yarınlar',
      desc: 'İnci İSG Danışmanlık olarak, iş yerinizdeki riskleri proaktif yaklaşımlarla analiz ediyor ve sıfır iş kazası vizyonuyla işletmenizi güvenceye alıyoruz.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070',
      title: 'Mevzuata Uygun Tam Kapsamlı İSG Hizmetleri',
      desc: 'A, B ve C sınıfı uzman kadromuz ve tecrübeli işyeri hekimlerimizle, 6331 sayılı kanun kapsamındaki tüm yasal yükümlülüklerinizi eksiksiz yönetiyoruz.'
    },
    {
      image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2070',
      title: 'Profesyonel İSG ve Yangın Eğitimleri',
      desc: 'Çalışanlarınızın acil durumlara karşı her an hazırlıklı olması için uygulamalı yangın söndürme, tahliye tatbikatları ve temel İSG eğitimleri veriyoruz.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[85vh] sm:h-screen bg-background overflow-hidden flex items-center justify-center">
      {/* Slider Görselleri */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-background via-black/20 to-transparent z-10" />

      {/* İçerik */}
      <div className="relative z-20 max-w-screen-xl mx-auto px-4 md:px-8 text-center sm:text-left w-full">
        <div className="space-y-6 max-w-3xl">
          <span className="inline-flex items-center gap-x-2 bg-blue-600/20 text-blue-500 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-blue-500/30">
            🛡️ İzmir İSG Danışmanlık Hizmetleri
          </span>

          <h1 className="text-4xl text-foreground font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">{slides[currentSlide].title}</h1>

          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">{slides[currentSlide].desc}</p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link
              href="/hizmetler"
              className="flex items-center justify-center gap-x-2 py-3.5 px-6 w-full sm:w-auto text-sm text-white font-bold bg-blue-600 hover:bg-blue-700 transition-all duration-150 rounded-xl"
            >
              Hizmetlerimizi İnceleyin
            </Link>

            <Link
              href="/iletisim"
              className="flex items-center justify-center py-3.5 px-6 w-full sm:w-auto text-sm text-foreground font-semibold bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm transition-all duration-150 rounded-xl border border-foreground/10"
            >
              Ücretsiz Teklif Al
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Noktaları */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-blue-600' : 'w-2 bg-foreground/30'}`}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
