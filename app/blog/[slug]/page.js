import { blogPosts } from '../../../data/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen pt-28">
      {/* ... Geri kalan HTML kodları tamamen aynı kalacak ... */}
      <div className="max-w-3xl mx-auto px-6 mt-10">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline font-medium">
          ← Tüm Yazılara Dön
        </Link>
        <header className="mt-6">
          <span className="text-sm text-gray-500">{post.date} • İSG Danışmanlık</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 sm:text-4xl leading-tight">{post.title}</h1>
        </header>
        {/* ... */}
      </div>
    </article>
  );
}
