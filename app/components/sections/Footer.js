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
    <footer className="bg-background text-foreground transition-colors duration-300 border-t border-gray-200/80 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Üst Grid Alanı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b  border-gray-200/80">
          <div className="space-y-4">
            <Image
              src="/inci-isg-logo.png"
              width={140}
              height={60}
              alt="inci isg logo"
              // Dark mode'da invert et, light mode'da olduğu gibi bırak
              className="dark:invert object-contain"
            />
            <p className="text-sm leading-relaxed">
              İzmir merkezli olmak üzere Türkiye genelinde iş sağlığı ve güvenliği kültürünü yaygınlaştırmak, iş kazalarını proaktif çözümlerle önlemek amacıyla hizmet veriyoruz.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wider">HIZLI ERİŞİM</h4>
            <ul className="space-y-2.5 text-sm">
              {anasayfaNavs.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.path} className="hover:text-blue-600 block py-1">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-sm ">
            <h4 className="font-semibold text-sm tracking-wider">İLETİŞİM BİLGİLERİ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-x-3">
                <span className="text-blue-500 mt-0.5">📍</span>
                <span>Adalet Mah. Anadolu Cad. No: 41, Megapol Tower, Kat: 10, Bayraklı / İzmir</span>
              </li>
              <li className="flex items-center gap-x-3">
                <span className="text-blue-500">📞</span>
                <a href="tel:+902324616070" className="hover:text-blue-600">
                  +90 (232) 461 60 70
                </a>
              </li>
              <li className="flex items-center gap-x-3">
                <span className="text-blue-500">✉️</span>
                <a href="mailto:info@inciisgdanismanlik.com" className="hover:text-blue-600">
                  info@inciisgdanismanlik.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-y-4 text-xs text-gray-500">
          <div>&copy; {new Date().getFullYear()} İnci İSG Danışmanlık.</div>

          <div className="flex items-center space-x-4">
            {/* Sosyal Medya ikonlarını dark:bg-gray-800 ile daha yumuşak hale getirdik */}
            {/* Sosyal Medya İkonları */}
            <div className="flex items-center space-x-4">
              {[
                {
                  label: 'Facebook',
                  color: 'hover:bg-[#1877F2]',
                  path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
                },
                {
                  label: 'Instagram',
                  color: 'hover:bg-[#E1306C]',
                  path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
                },
                {
                  label: 'Linkedin',
                  color: 'hover:bg-[#0A66C2]',
                  path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                }
              ].map(social => (
                <a
                  key={social.label}
                  href={`https://${social.label.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 ${social.color} hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
