'use client'; // Tarayıcıda çalışması için şart

import { useEffect } from 'react';
import AOS from 'aos';

export default function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      offset: 100,
      disable: window.innerWidth < 768, // Mobilde AOS'u kapat (performans için)
      mirror: false,
      throttleDelay: 99
    });
  }, []);

  return <>{children}</>;
}
