import { redirect } from 'next/navigation';
import { certificateCategories } from '@/data/certificateCatalog';

export function generateStaticParams() {
  return certificateCategories.map(item => ({ slug: item.slug }));
}

export default async function LegacySertifikaDetayPage({ params }) {
  const { slug } = await params;
  redirect(`/sertifikalar/${slug}`);
}
