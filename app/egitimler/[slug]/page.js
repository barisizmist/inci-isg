import { egitimlerData } from '@/data/egitimlerData';
import { notFound } from 'next/navigation';
import EgitimDetailClient from './EgitimDetailClient';

export function generateStaticParams() {
  return egitimlerData.map((egitim) => ({
    slug: egitim.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const egitim = egitimlerData.find((e) => e.slug === slug);
  if (!egitim) return { title: 'Eğitim Bulunamadı' };
  return {
    title: `${egitim.title} | İnci İSG`,
    description: egitim.shortDescription,
  };
}

export default async function EgitimDetailPage({ params }) {
  const { slug } = await params;
  const egitim = egitimlerData.find((e) => e.slug === slug);
  if (!egitim) notFound();

  return <EgitimDetailClient egitim={egitim} />;
}
