import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import Footer from './components/sections/Footer';
import AosProvider from './components/AosProvider';
import Header from './components/sections/Header';
import MainLayoutWrapper from './components/MainLayoutWrapper';
import { Providers } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata = {
  title: 'İnci İSG Danışmanlık | İzmir Merkez İş Sağlığı Güvenliği',
  description: 'İzmir merkezli, Türkiye genelinde hizmet veren profesyonel İSG danışmanlığı. Risk yönetimi, mevzuat uyumu ve çalışan güvenliği için uzman hizmetler.',
  keywords: 'İSG, iş sağlığı güvenliği, danışmanlık, İzmir, risk yönetimi, eğitim',
  authors: [{ name: 'İnci İSG Danışmanlık' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://inciisgdanismanlik.com',
    siteName: 'İnci İSG Danışmanlık',
    title: 'İnci İSG Danışmanlık | Profesyonel İş Sağlığı Güvenliği Hizmetleri',
    description: 'Güvenli çalışma ortamları ve sağlıklı yarınlar için İnci İSG Danışmanlık ile çalışın.',
    images: [
      {
        url: '/inci-isg-og-image.png',
        width: 1200,
        height: 630,
        alt: 'İnci İSG Danışmanlık'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İnci İSG Danışmanlık',
    description: "Türkiye'de profesyonel İş Sağlığı Güvenliği danışmanlığı",
    images: ['/inci-isg-og-image.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
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
