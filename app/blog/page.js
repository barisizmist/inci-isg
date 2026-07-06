import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../data/mockData'; // Verimizin yolu (klasör yapına göre ayarla)

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Üst Başlık */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">İSG Bilgi Merkezi & Blog</h1>
          <p className="mt-4 leading-relaxed text-foreground/80">İş sağlığı ve güvenliği dünyasından en güncel mevzuatlar, rehberler ve uzman tavsiyeleri.</p>
        </div>

        {/* Blog Grid Yapısı */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {blogPosts.map(post => (
            <article
              key={post.id}
              className="bg-card rounded-3xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 aos-card"
              data-aos="fade-up"
            >
              {/* Görsel */}
              <div className="h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* İçerik */}
              <div className="p-8">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{post.date}</span>
                <h2 className="text-xl font-bold text-foreground mt-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 leading-relaxed text-foreground/80 line-clamp-3">{post.summary}</p>

                <div className="mt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors group"
                  >
                    Devamını Oku
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
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
