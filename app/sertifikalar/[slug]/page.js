import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sertifikalarData } from '@/data/sertifikalarData';
import SertifikaDetailClient from './SertifikaDetailClient';

export async function generateStaticParams() {
  return sertifikalarData.map(cert => ({
    slug: cert.id
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cert = sertifikalarData.find(item => item.id === slug);

  if (!cert) {
    return { title: 'Sertifika Bulunamadı | İnci İSG' };
  }

  return {
    title: `${cert.title} | İnci İSG Sertifika Programı`,
    description: cert.description
  };
}

export default async function SertifikaDetayPage({ params }) {
  const { slug } = await params;
  const cert = sertifikalarData.find(item => item.id === slug);

  if (!cert) {
    notFound();
  }

  const relatedCerts = sertifikalarData
    .filter(c => c.category === cert.category && c.id !== cert.id)
    .slice(0, 8);

  return <SertifikaDetailClient cert={cert} relatedCerts={relatedCerts} />;
}
