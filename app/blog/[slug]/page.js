import { blogPosts } from '../../../data/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <Link href="/blog" className="text-xs uppercase tracking-[0.14em] text-[var(--brand)] hover:underline font-semibold flex items-center mb-6">
              ← Tüm Yazılara Dön
            </Link>

            <header>
              <span className="text-xs font-semibold text-[var(--brand)] uppercase tracking-[0.14em]">{post.date}</span>
              <h1 className="text-3xl md:text-5xl mt-3 leading-tight tracking-tight">{post.title}</h1>
            </header>

            <Image src={post.image} alt={post.title} width={800} height={450} className="w-full h-auto object-cover rounded-3xl mt-8 shadow-lg" loading="eager" priority />

            <div className="surface-card p-6 md:p-8 mt-10">
              <div className="space-y-5 text-foreground/80 leading-relaxed">
                <p>{post.summary}</p>
                <p>
                  Bu içerik, sahadaki uygulamalarla mevzuat arasında net bir köprü kurmak için hazırlanmıştır. Başvuru ve belgelendirme süreçleri çoğu zaman karmaşık görünse de
                  doğru planlama ile daha hızlı sonuç alınabilir.
                </p>
                <p>
                  Rehber yazılarımızda adım adım kontrol listeleri, sık yapılan hatalar ve hızlandırıcı öneriler paylaşıyoruz. Kurumsal ekipler için özel danışmanlık gerektiğinde
                  iletişim sayfamızdan doğrudan ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-8">
            <div className="surface-card p-6 rounded-3xl">
              <h3 className="font-bold text-lg mb-6 border-b border-foreground/10 pb-3">Diğer Yazılar</h3>
              <div className="space-y-6">
                {blogPosts
                  .filter(p => p.slug !== slug)
                  .map(p => (
                    <Link href={`/blog/${p.slug}`} key={p.id} className="group block">
                      <div className="flex gap-4">
                        <Image src={p.image} width={80} height={80} className="w-20 h-auto rounded-xl object-cover" alt={p.title} loading="lazy" />
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-[var(--brand)] transition-colors line-clamp-2">{p.title}</h4>
                          <span className="text-xs text-muted-foreground">{p.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f8b8d] to-[#0a6b6d] p-8 rounded-3xl text-white text-center shadow-2xl">
              <h4 className="font-bold text-xl mb-2">Uzman Desteği Alın</h4>
              <p className="leading-relaxed text-white/85 mb-6">Program seçimi ve başvuru planlaması için danışman ekibimizle görüşün.</p>
              <Link href="/iletisim" className="block w-full bg-white text-[#0a6b6d] font-bold py-3 rounded-xl hover:bg-[#f2fbfb] transition-all">
                İletişime Geç
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
