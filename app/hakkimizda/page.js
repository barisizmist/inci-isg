'use client';

import Image from 'next/image';
import { cityList } from '@/data/mockData';

export default function About() {
  const istatistikler = [
    { value: '121+', label: 'Kategori' },
    { value: '1000+', label: 'Program' },
    { value: '81', label: 'İl Erişimi' },
    { value: '7/24', label: 'Online Erişim' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative bg-gradient-to-b from-[#0c1628] to-[#13243d] py-20 text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-3xl mx-auto px-6" data-aos="fade-up">
          <span className="text-[var(--accent)] font-semibold tracking-[0.16em] uppercase text-xs">Kurumsal</span>
          <h1 className="text-4xl font-extrabold sm:text-5xl mt-2 tracking-tight">İnci Akademi Hakkında</h1>
          <p className="mt-4 leading-relaxed text-white/80">
            Online eğitim, sertifikasyon ve belgelendirme süreçlerini daha erişilebilir hale getiren yeni nesil eğitim platformu.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 max-w-6xl mx-auto px-6 overflow-hidden">
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">Biz Kimiz?</h2>

          <div className="relative float-right ml-6 mb-4 w-full max-w-md lg:max-w-lg" data-aos="fade-left">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
              alt="İSG Denetim ve Ekip"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl w-full h-auto object-cover dark:brightness-90"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/20 rounded-full -z-10 blur-xl"></div>
          </div>

          <div className="space-y-6">
            <p className="leading-relaxed text-foreground/80">
              İnci Akademi, bireysel katılımcılar ve kurumlar için eğitim ve sertifikasyon süreçlerini uçtan uca yöneten, erişilebilir ve ölçülebilir bir hizmet modeliyle
              yapılandırılmıştır. Program seçimi, başvuru, ödeme ve belge doğrulama adımları tek platformda bütünleşik olarak yürütülür.
            </p>
            <p className="leading-relaxed text-foreground/80">
              Operasyon modelimiz; hızlı danışman geri dönüşü, doğru program eşleştirme ve süreç boyunca şeffaf bilgilendirme prensibine dayanır. Hedefimiz yalnızca belge üretmek
              değil, katılımcı yetkinliğini artırmak ve kurumların operasyonel sürdürülebilirliğine katkı sunmaktır.
            </p>
            <p className="leading-relaxed text-foreground/80">
              Sertifika programları, iş makinesi eğitimleri, ISO belgelendirme danışmanlığı ve kurumsal modüllerle geniş bir yelpazede çözüm sunuyoruz. Tüm akış dijital olarak
              yönetildiği için Türkiye'nin her yerinden erişilebilir bir yapı sağlıyoruz.
            </p>
            <p className="leading-relaxed text-foreground/80">
              Eğitim içeriklerini güncel mevzuat ve saha ihtiyaçlarına göre sürekli yeniliyor; gerektiğinde kurumlara özel planlar çıkarıyoruz. Böylece süreçler yalnızca hızlı
              değil, sürdürülebilir bir kalite standardında yürütülüyor.
            </p>
            <p className="leading-relaxed text-foreground/80">İnci Akademi'nin odağı: doğru program, doğru hız, doğru sonuç.</p>
            <p className="leading-relaxed text-foreground/80 font-semibold text-blue-600 dark:text-blue-400">
              İNCI AKADEMİ
              <br />
              &ldquo;Online Eğitim, Somut Yetkinlik.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {istatistikler.map((item, idx) => (
              <div key={item.label} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="text-4xl font-extrabold text-[var(--brand)] sm:text-5xl">{item.value}</div>
                <div className="mt-2 text-sm font-medium text-foreground/65 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Misyonumuz',
              desc: 'Eğitim ve belgelendirme süreçlerini herkes için erişilebilir, şeffaf ve yönetilebilir hale getirmek.',
              icon: '🎯'
            },
            {
              title: 'Vizyonumuz',
              desc: 'Türkiye’de online eğitim ve sertifikasyonda en güvenilen, en pratik ve en yüksek memnuniyetli platformlardan biri olmak.',
              icon: '👁️'
            }
          ].map((item, idx) => (
            <div
              key={item.title}
              className="border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-12 h-12 bg-cyan-50 text-[var(--brand)] rounded-xl flex items-center justify-center mb-6 text-xl font-bold">{item.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="leading-relaxed text-foreground/80">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 surface-card p-6">
          <h4 className="text-xl">Şehir Kapsamı</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {cityList.map(city => (
              <span key={city} className="px-3 py-1 rounded-full text-xs bg-background border border-foreground/10 text-foreground/75">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
