import Link from 'next/link';
import { blogPosts } from '../../data/mockData'; // Verimizin yolu (klasör yapına göre ayarla)

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">İSG Bilgi Merkezi & Blog</h1>
          <p className="mt-4 text-gray-600">İş sağlığı ve güvenliği dünyasından en güncel mevzuatlar, rehberler ve uzman tavsiyeleri.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300" data-aos="fade-up">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{post.date}</span>
                <h2 className="text-xl font-semibold text-gray-800 mt-2 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 text-gray-600 text-sm line-clamp-3">{post.summary}</p>
                <div className="mt-4">
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Devamını Oku <span className="ml-1">→</span>
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
