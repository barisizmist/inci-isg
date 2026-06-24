'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // İnci İSG konseptine uygun, yüksek kaliteli alternatif slider görselleri ve metinleri
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

  // Slaytların otomatik dönmesini sağlayan efekt (5 saniyede bir)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[85vh] sm:h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* 1. Arka Plan Resim Slider Yapısı */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform transition-transform duration-[5000ms]`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}

      {/* 2. Modern Gradyan Karartma (Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-900/60 to-transparent z-10" />

      {/* 3. İçerik Alanı */}
      <div className="relative z-20 max-w-screen-xl mx-auto px-4 md:px-8 text-center sm:text-left w-full">
        <div className="space-y-6 max-w-3xl" data-aos="fade-right">
          <span className="inline-flex items-center gap-x-2 bg-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-blue-500/30">
            🛡️ İzmir İSG Danışmanlık Hizmetleri
          </span>

          {/* Slayta göre değişen dinamik başlık */}
          <h1 className="text-4xl text-white font-extrabold tracking-tight sm:text-5xl lg:text-6xl min-h-[80px] sm:min-h-[auto] leading-tight">{slides[currentSlide].title}</h1>

          {/* Slayta göre değişen dinamik alt metin */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl transition-all duration-500">{slides[currentSlide].desc}</p>

          {/* Aksiyon Butonları */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link
              href="/hizmetler"
              className="flex items-center justify-center gap-x-2 py-3.5 px-6 w-full sm:w-auto text-sm text-white font-bold bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all duration-150 rounded-xl group"
            >
              Hizmetlerimizi İnceleyin
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              href="/iletisim"
              className="flex items-center justify-center py-3.5 px-6 w-full sm:w-auto text-sm text-gray-200 font-semibold bg-white/10 hover:bg-white/20 active:bg-white/5 backdrop-blur-sm transition-all duration-150 rounded-xl border border-white/10"
            >
              Ücretsiz Teklif Al
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Alt Slayt Noktaları (Görsel İndikatörler) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-white/40'}`}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
