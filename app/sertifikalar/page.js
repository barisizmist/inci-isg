import SertifikalarCatalogClient from './SertifikalarCatalogClient';
import { certificateCatalogSummary, certificateCategories, getCertificateCategoryLabel, getCertificatePrice } from '@/data/certificateCatalog';

export const metadata = {
  title: 'Tum Sertifikalar | Inci Akademi',
  description: 'Tum sertifika programlarini inceleyin, kategorilere gore filtreleyin ve detay sayfalarindan basvuru surecini baslatin.'
};

export default function SertifikalarPage() {
  const items = certificateCategories.map(item => ({
    ...item,
    label: getCertificateCategoryLabel(item),
    price: getCertificatePrice(item)
  }));

  return <SertifikalarCatalogClient categories={items} summary={certificateCatalogSummary} />;
}
