'use client'; // Tarayıcıda çalışması için şart

import { useEffect } from 'react';
import AOS from 'aos';

export default function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 200, // Animasyon hızı (ms)
      once: true, // Sayfa aşağı kaydırıldığında animasyon bir kere çalışsın
      offset: 50 // Element ekrana kaç piksel kala animasyon başlasın
    });
  }, []);

  return <>{children}</>;
}
