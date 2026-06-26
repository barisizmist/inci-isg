import { blogPosts } from '../../../data/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Grid: Sol içerik, Sağ Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sol: Ana İçerik */}
          <article className="lg:col-span-2">
            <Link href="/blog" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center mb-6">
              ← Tüm Yazılara Dön
            </Link>

            <header>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">{post.date}</span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3 leading-tight tracking-tight">{post.title}</h1>
            </header>

            <Image src={post.image} alt={post.title} width={800} height={450} className="w-full h-80 object-cover rounded-3xl mt-8 shadow-lg" loading="eager" priority />

            <div className="prose dark:prose-invert prose-lg mt-10 max-w-none text-muted-foreground leading-relaxed">
              {/* İçerik buraya gelecek */}
              <p>{post.summary} (Buraya makale içeriği gelecek...)</p>
            </div>
          </article>

          {/* Sağ: Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* 1. Önemli Yazılar (Mini Kartlar) */}
            <div className="bg-card p-6 rounded-3xl border border-border/50">
              <h3 className="font-bold text-foreground text-lg mb-6 border-b border-border/50 pb-3">Önemli Makaleler</h3>
              <div className="space-y-6">
                {blogPosts
                  .filter(p => p.slug !== slug)
                  .map(p => (
                    <Link href={`/blog/${p.slug}`} key={p.id} className="group block">
                      <div className="flex gap-4">
                        <Image src={p.image} width={80} height={80} className="w-20 h-20 rounded-xl object-cover" alt={p.title} loading="lazy" />
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">{p.title}</h4>
                          <span className="text-xs text-muted-foreground">{p.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* 2. Gradientli İletişim Kartı (CTA) */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white text-center shadow-2xl">
              <h4 className="font-bold text-xl mb-2">Uzman Desteğine mi İhtiyacınız Var?</h4>
              <p className="text-blue-100 text-sm mb-6">İSG süreçlerinizi profesyonel kadromuzla yönetin.</p>
              <Link href="/iletisim" className="block w-full bg-white text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-50 transition-all">
                Teklif Al
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
