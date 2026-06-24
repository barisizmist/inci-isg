'use client';
import Hero from './components/sections/Hero';
import Cta from './components/sections/Cta';
import Team from './components/sections/Team';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animasyon süresi (ms)
      once: true // Aşağı kaydırıp yukarı çıkınca tekrar çalışmasın (performans için)
    });
  }, []);
  return (
    <div>
      <Hero aos="fade-down" />
      <Cta />
      <Team />
    </div>
  );
}
