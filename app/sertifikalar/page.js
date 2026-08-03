import SertifikalarList from './SertifikalarList';

export const metadata = {
  title: 'Sertifikalar | İnci İSG',
  description: 'İnci İSG sertifika programları; E-Devlet onaylı, mesleki yeterlilik ve özel eğitim belgelerini inceleyin.',
};

export default async function SertifikalarPage({ searchParams }) {
  const params = await searchParams;
  const kategori = params?.kategori || null;
  return <SertifikalarList key={kategori || 'hepsi'} initialCategory={kategori} />;
}
