'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { referenceLogos } from '@/data/mockData';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&fit=crop',
      title: 'Geleceğin İçin Sertifikanı Al',
      desc: 'Online eğitim, hızlı başvuru ve e-devlet doğrulanabilir belge süreçleriyle kariyer hedeflerinize güvenle ilerleyin.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&fit=crop',
      title: 'Türkiye Genelinde Eğitim ve Belgelendirme',
      desc: 'Kurumsal ekipler ve bireysel katılımcılar için iş makinesi eğitimlerinden ISO belgelendirmeye kadar uçtan uca danışmanlık.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden flex items-center justify-center pt-20 md:pt-24">
      {slides.map((slide, idx) => (
        <div
          key={slide.title}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#08111fcc] via-[#08111f99] to-[#08111f4d] z-10" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,183,3,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,139,141,0.25),transparent_40%)]" />

      <div className="relative z-20 max-w-screen-xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
          <div className="xl:col-span-7 space-y-6 text-white">
            <span className="inline-flex items-center gap-x-2 bg-white/10 text-white text-[11px] font-semibold tracking-[0.16em] uppercase px-3 py-1 rounded-full border border-white/25">
              Online Eğitim • Sertifika • Belgelendirme
            </span>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-tight">{slides[currentSlide].title}</h1>

            <p className="leading-relaxed text-white/85 max-w-2xl text-lg">{slides[currentSlide].desc}</p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {['E-Devlet Onaylı', 'Üniversite İş Birliği', 'Hızlı Kayıt'].map(item => (
                <span key={item} className="text-xs px-3 py-1 rounded-full border border-white/30 bg-white/10 uppercase tracking-[0.12em]">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
              <Link
                href="/egitimler"
                className="brand-button flex items-center justify-center gap-x-2 py-3.5 px-6 w-full sm:w-auto text-xs tracking-[0.14em] uppercase font-bold rounded-xl"
              >
                Eğitimleri İncele
              </Link>

              <Link
                href="/iletisim"
                className="flex items-center justify-center py-3.5 px-6 w-full sm:w-auto text-xs tracking-[0.14em] uppercase text-white font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-150 rounded-xl border border-white/20"
              >
                Hemen Başvuru Yap
              </Link>
            </div>
          </div>

          <div className="xl:col-span-5">
            <div className="rounded-3xl bg-[#f7fbff] text-foreground p-6 md:p-7 shadow-2xl shadow-[#08111f66] border border-white/60">
              <p className="text-xs uppercase tracking-[0.16em] text-foreground/60">Hızlı Kayıt Paneli</p>
              <h3 className="text-3xl mt-2">Doğru Programı Seç, Süreci Hızlandır</h3>
              <p className="text-sm text-foreground/70 mt-2">Sertifika, iş makinesi eğitimi ve ISO belgelendirme taleplerinizi tek noktadan yönetin.</p>

              <div className="grid grid-cols-2 gap-3 mt-5 text-sm font-semibold">
                <div className="surface-card p-3">Sertifikalar</div>
                <div className="surface-card p-3">Belgelendirme</div>
                <div className="surface-card p-3">İş Makineleri</div>
                <div className="surface-card p-3">Kurumsal Eğitim</div>
              </div>

              <Link href="/iletisim" className="mt-5 inline-flex w-full justify-center brand-button py-3 rounded-xl text-xs uppercase tracking-[0.16em] font-bold">
                Danışmanla Görüş
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-10 rounded-2xl bg-white/90 backdrop-blur-sm p-4 border border-white/50 shadow-xl">
          <p className="text-[11px] uppercase tracking-[0.16em] text-foreground/55 mb-3 px-1">Bize Güvenen Kurumlar</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {referenceLogos.map(logo => (
              <div key={logo.id} className="surface-card p-2 h-14 flex items-center justify-center bg-white">
                <Image src={logo.logo} alt={logo.name} width={90} height={30} className="max-h-7 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((slide, idx) => (
          <button
            key={`${slide.title}-dot`}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-[var(--accent)]' : 'w-2 bg-white/40'}`}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
