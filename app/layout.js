import { Manrope, Fraunces } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import Footer from './components/sections/Footer';
import AosProvider from './components/AosProvider';
import Header from './components/sections/Header';
import MainLayoutWrapper from './components/MainLayoutWrapper';
import { Providers } from './providers';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin']
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin']
});

export const metadata = {
  metadataBase: new URL('https://inciakademi.com'),
  title: 'İnci Akademi | Online Eğitim, Sertifika ve Belgelendirme',
  description: 'Türkiye genelinde online eğitim, e-devlet sorgulanabilir sertifika programları, iş makinesi operatör eğitimleri ve ISO belgelendirme çözümleri.',
  keywords: 'online eğitim, sertifika, belgelendirme, iş makinesi, iso, e-devlet onaylı',
  authors: [{ name: 'İnci Akademi' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://inciakademi.com',
    siteName: 'İnci Akademi',
    title: 'İnci Akademi | Geleceğin İçin Sertifikanı Al',
    description: 'Online eğitim, sertifika ve belgelendirme süreçlerinde hızlı ve güvenilir çözüm ortağınız.',
    images: [
      {
        url: '/inci-isg-og-image.png',
        width: 1200,
        height: 630,
        alt: 'İnci Akademi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İnci Akademi',
    description: 'Online eğitim, sertifika ve belgelendirme platformu',
    images: ['/inci-isg-og-image.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${manrope.variable} ${fraunces.variable} h-full antialiased`} suppressHydrationWarning>
      <head />
      <body className="min-h-full flex flex-col">
        <Providers>
          <AosProvider>
            <Header />
            <MainLayoutWrapper>{children}</MainLayoutWrapper>
            <Footer />
          </AosProvider>
        </Providers>
      </body>
    </html>
  );
}
