import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../data/mockData';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <p className="text-[var(--brand)] text-xs uppercase tracking-[0.16em] font-semibold">Rehber</p>
          <h1 className="text-4xl sm:text-5xl mt-3">Eğitim ve Belgelendirme Bilgi Merkezi</h1>
          <p className="mt-4 leading-relaxed text-foreground/80">Program seçimi, başvuru yönetimi ve mevzuat odaklı pratik içerikler.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {blogPosts.map(post => (
            <article
              key={post.id}
              className="surface-card rounded-3xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 aos-card"
              data-aos="fade-up"
            >
              <div className="h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-8">
                <span className="text-xs uppercase tracking-[0.12em] text-[var(--brand)] font-semibold">{post.date}</span>
                <h2 className="text-xl font-bold text-foreground mt-2 hover:text-[var(--brand)] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 leading-relaxed text-foreground/80 line-clamp-3">{post.summary}</p>

                <div className="mt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs uppercase tracking-[0.14em] font-semibold text-[var(--brand)] transition-colors group"
                  >
                    Devamını Oku <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
