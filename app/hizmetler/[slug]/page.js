import { redirect } from 'next/navigation';

export default async function HizmetDetayRedirect({ params }) {
  const { slug } = await params;
  redirect(`/egitimler/${slug}`);
}
