import React from 'react';
import Image from 'next/image';

const Cta = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block relative">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&fit=crop"
              width={600}
              height={500}
              className="md:max-w-lg sm:rounded-lg"
              alt="İş sağlığı ve güvenliği danışmanlık hizmetleri"
              loading="lazy"
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-blue-600 font-semibold">Neden İnci İSG?</h3>
            <p className="text-3xl font-semibold sm:text-4xl">Sıfır İş Kazası Vizyonuyla Güvenli İşyerleri Oluşturuyoruz</p>
            <p className="mt-3 text-gray-600">
              10+ yıllık deneyimimiz, A, B ve C sınıfı uzman kadromuz, işyeri hekimlerimiz ve sağlık personelimizle birlikte işletmenizin tüm İSG ihtiyaçlarını karşılamak üzere
              yanınızdayız. Sadece mevzuata uyum değil, kurumsal kültür geliştirilmesi ve sürdürülebilir güvenlik ortamı oluşturması amacıyla çalışıyoruz.
            </p>
            <a href="/hizmetler" className="inline-flex gap-x-1 items-center text-blue-600 hover:text-blue-500 duration-150 font-medium">
              Hizmetlerimizi Keşfet
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
