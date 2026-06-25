'use client';

export default function About() {
  const istatistikler = [
    { value: '10+', label: 'Yıllık Deneyim' },
    { value: '500+', label: 'Hizmet Verilen Firma' },
    { value: '20K+', label: 'Eğitilen Çalışan' },
    { value: 'A,B,C', label: 'Sınıfı Uzman Kadrosu' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* 1. Hero Başlık Alanı */}
      <section className="relative bg-slate-900 py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="relative max-w-3xl mx-auto px-6" data-aos="fade-up">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Kurumsal</span>
          <h1 className="text-4xl font-extrabold sm:text-5xl mt-2 tracking-tight">İnci İSG Danışmanlık</h1>
          <p className="mt-4 text-lg text-gray-200 leading-relaxed">Geleceği güvenle inşa etmek, riskleri proaktif yaklaşımlarla sıfıra indirmek için çalışıyoruz.</p>
        </div>
      </section>

      {/* 2. Ana Hikaye / Biz Kimiz Bölümü */}
      <section className="py-16 lg:py-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Biz Kimiz?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              İnci İSG Danışmanlık olarak, kurulduğumuz günden bu yana İzmir merkezli olmak üzere Türkiye genelinde iş sağlığı ve güvenliği kültürünü yaygınlaştırmak amacıyla
              hizmet veriyoruz.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              A, B ve C sınıfı uzman kadromuz, işyeri hekimlerimiz ve deneyimli sağlık personelimizle, işletmelerin yasal mevzuatlara uyum sağlama süreçlerini uçtan uca
              yönetiyoruz.
            </p>
          </div>
          <div className="relative" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
              alt="İSG Denetim ve Ekip"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover dark:brightness-90"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/20 rounded-full -z-10 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* 3. İstatistik Sayıcı Alanı */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-12 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {istatistikler.map((item, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 sm:text-5xl">{item.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Misyon & Vizyon */}
      <section className="py-16 lg:py-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Misyonumuz',
              desc: 'İş kazalarını ve meslek hastalıklarını öngörülebilir ve önlenebilir kılmak; işletmelerde sürdürülebilir, güvenli ve sağlıklı çalışma ortamları inşa etmektir.',
              icon: '🎯'
            },
            {
              title: 'Vizyonumuz',
              desc: 'Proaktif yaklaşımımız ve yenilikçi çözümlerimizle, sektörde güvenilirliğin ve kalitenin simgesi olan lider bir İSG danışmanlık markası olmak.',
              icon: '👁️'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
