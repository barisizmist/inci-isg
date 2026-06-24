'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const anasayfaNavs = [
    { title: 'Hakkımızda', path: '/hakkimizda' },
    { title: 'Hizmetler', path: '/hizmetler' },
    { title: 'Referanslar', path: '/referanslar' },
    { title: 'Galeri', path: '/galeri' },
    { title: 'İletişim', path: '/iletisim' }
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Üst Grid Alanı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-900">
          {/* 1. Sütun: Logo ve Kısa Tanım */}
          <div className="space-y-4">
            <Image
              src="/inci-isg-logo.png"
              width={140}
              height={60}
              alt="inci isg logo"
              className="invert object-contain" // Koyu zeminde logonun beyaz görünmesi için
            />
            <p className="text-sm leading-relaxed text-gray-400">
              İzmir merkezli olmak üzere Türkiye genelinde iş sağlığı ve güvenliği kültürünü yaygınlaştırmak, iş kazalarını proaktif çözümlerle önlemek amacıyla hizmet veriyoruz.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider">HIZLI ERİŞİM</h4>
            <ul className="space-y-2.5 text-sm">
              {anasayfaNavs.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.path} className="hover:text-blue-500 transition-colors duration-200 block py-1">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-sm">
            <h4 className="text-white font-semibold text-sm tracking-wider">İLETİŞİM BİLGİLERİ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-x-3">
                <span className="text-blue-500 mt-0.5">📍</span>
                <span>Adalet Mah. Anadolu Cad. No: 41, Megapol Tower, Kat: 10, Bayraklı / İzmir</span>
              </li>
              <li className="flex items-center gap-x-3">
                <span className="text-blue-500">📞</span>
                <a href="tel:+902324616070" className="hover:text-white transition-colors">
                  +90 (232) 461 60 70
                </a>
              </li>
              <li className="flex items-center gap-x-3">
                <span className="text-blue-500">✉️</span>
                <a href="mailto:info@inciisgdanismanlik.com" className="hover:text-white transition-colors">
                  info@inciisgdanismanlik.com
                </a>
              </li>
              <li className="flex items-center gap-x-3 text-gray-500  border-t border-gray-900 pt-2 mt-2">
                <span>🕒 Pzt - Cmt: 09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Telif ve Sosyal Medya Alanı */}
        <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-y-4 text-xs text-gray-500">
          <div>&copy; {new Date().getFullYear()} İnci İSG Danışmanlık. Tüm Hakları Saklıdır.</div>

          {/* Sosyal Medya İkonları (Linkedin Kurumsal Odaklı Kaldı) */}
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-gray-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="Linkedin"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
