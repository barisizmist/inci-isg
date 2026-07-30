'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import SertifikaCard from '@/app/components/sertifika/SertifikaCard';

const WHATSAPP_NUMBER = '905322355022';

const TABS = [
  { id: 'description', label: 'Açıklama' },
  { id: 'faq', label: 'Sıkça Sorulanlar' },
  { id: 'exam', label: 'Sınav' },
  { id: 'reviews', label: 'Yorum' },
];

const HIGHLIGHTS = [
  { text: 'E-Devlet Onaylı' },
  { text: 'Hızlı Teslimat' },
  { text: 'Üniversite Onaylı' },
  { text: 'Güvenli Ödeme' },
  { text: 'Belge Doğrulama' },
  { text: '7/24 Destek' },
];

const FAQ_ITEMS = [
  { q: 'Sertifika programına nasıl kayıt olabilirim?', a: 'Web sitemizden "Hemen Kayıt Ol" butonuna tıklayarak online kayıt işleminizi kolayca tamamlayabilirsiniz. Kayıt sonrası tarafınıza bilgilendirme yapılacaktır.' },
  { q: 'Eğitimler online mı yoksa yüz yüze mi?', a: 'Eğitimlerimizin tamamı online olarak sunulmaktadır. Dilediğiniz zaman ve yerde eğitim içeriğine erişebilirsiniz.' },
  { q: 'Sertifika ne kadar sürede teslim edilir?', a: 'Eğitimi ve varsa sınavı başarıyla tamamlamanızın ardından sertifikanız en kısa sürede dijital ortamda teslim edilir.' },
  { q: 'Sertifika E-Devlet\'te görünüyor mu?', a: 'Evet, tüm sertifikalarımız E-Devlet sistemi üzerinden sorgulanabilmektedir.' },
  { q: 'Sınav zorunlu mu?', a: 'Bazı sertifika programlarında değerlendirme sınavı bulunmaktadır. Sınav detayları ilgili eğitim sayfasında belirtilmiştir.' },
];

export default function SertifikaDetailClient({ cert, relatedCerts }) {
  const [activeTab, setActiveTab] = useState('description');
  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth * 0.75;
    carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  const whatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${cert.title} sertifikası hakkında bilgi almak istiyorum.`)}`;

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section
        className="pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6"
        style={{ borderBottom: '1px solid color-mix(in srgb, var(--foreground) 8%, transparent)' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 flex-wrap text-[11px] font-medium mb-8" style={{ color: 'color-mix(in srgb, var(--foreground) 40%, transparent)' }}>
            <Link href="/" className="hover:underline" style={{ color: 'inherit', textDecoration: 'none' }}>Anasayfa</Link>
            <span>/</span>
            <Link href="/sertifikalar" className="hover:underline" style={{ color: 'inherit', textDecoration: 'none' }}>Sertifikalar</Link>
            <span>/</span>
            {cert.categoryName && (
              <>
                <Link href={`/sertifikalar?kategori=${cert.category}`} className="hover:underline" style={{ color: 'inherit', textDecoration: 'none' }}>
                  {cert.categoryName}
                </Link>
                <span>/</span>
              </>
            )}
            <span style={{ color: 'var(--foreground)' }}>{cert.title}</span>
          </nav>

          {/* Grid: Image + Info */}
          <div className="detail-hero-grid grid gap-8 items-start" style={{ gridTemplateColumns: '40% 60%' }}>
            {/* Görsel */}
            <div className="detail-sticky-image sticky" style={{ top: 100 }}>
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover block"
                />
                {cert.categoryName && (
                  <span
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-[11px] font-semibold backdrop-blur-sm"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--background) 90%, transparent)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {cert.categoryName}
                  </span>
                )}
              </div>
            </div>

            {/* Bilgiler */}
            <div className="py-1">
              <h1
                className="text-2xl sm:text-3xl font-bold leading-tight mb-6"
                style={{ color: 'var(--foreground)' }}
              >
                {cert.title}
              </h1>

              {/* Bilgi Kutusu */}
              <div
                className="rounded-xl p-5 mb-6 flex items-center justify-between flex-wrap gap-4"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--foreground) 4%, var(--background))',
                  border: '1px solid color-mix(in srgb, var(--foreground) 8%, transparent)',
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium" style={{ color: 'color-mix(in srgb, var(--foreground) 50%, transparent)' }}>Kayıt Ücreti</span>
                  <span className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>Bilgi Al</span>
                </div>
                {cert.code && (
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--foreground) 6%, var(--background))',
                      color: 'color-mix(in srgb, var(--foreground) 55%, transparent)',
                    }}
                  >
                    Kod: {cert.code}
                  </span>
                )}
              </div>

              {/* Açıklama */}
              {cert.description && (
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--foreground) 65%, transparent)' }}>
                  {cert.description}
                </p>
              )}

              {/* Süre & Geçerlilik */}
              {(cert.duration || cert.validity) && (
                <div className="flex gap-6 mb-6 flex-wrap">
                  {cert.duration && (
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider block mb-1" style={{ color: 'color-mix(in srgb, var(--foreground) 40%, transparent)' }}>Süre</span>
                      <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{cert.duration}</span>
                    </div>
                  )}
                  {cert.validity && (
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider block mb-1" style={{ color: 'color-mix(in srgb, var(--foreground) 40%, transparent)' }}>Geçerlilik</span>
                      <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{cert.validity}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Aksiyon Butonları */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <Link
                  href="#basvuru"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--background)',
                    textDecoration: 'none',
                  }}
                >
                  Hemen Kayıt Ol
                </Link>
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                >
                  WhatsApp
                </a>
                <Link
                  href="/sertifikalar"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--foreground)',
                    border: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)',
                    textDecoration: 'none',
                  }}
                >
                  Tüm Sertifikalar
                </Link>
              </div>

              {/* Highlight Etiketleri */}
              <div className="grid grid-cols-3 gap-2">
                {HIGHLIGHTS.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[11px] font-medium text-center"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--foreground) 4%, var(--background))',
                      border: '1px solid color-mix(in srgb, var(--foreground) 6%, transparent)',
                      color: 'color-mix(in srgb, var(--foreground) 65%, transparent)',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#25D366' }} />
                    {h.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigasyonu */}
          <div
            className="grid grid-cols-4 gap-2 mb-8 p-1 rounded-xl"
            style={{ backgroundColor: 'color-mix(in srgb, var(--foreground) 4%, var(--background))' }}
          >
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer"
                style={{
                  backgroundColor: activeTab === tab.id ? 'var(--background)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 45%, transparent)',
                  boxShadow: activeTab === tab.id ? '0 1px 3px color-mix(in srgb, var(--foreground) 8%, transparent)' : 'none',
                  border: 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab İçerikleri */}
          {activeTab === 'description' && (
            <div className="animate-fadeIn">
              <div className="max-w-3xl text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--foreground) 70%, transparent)' }}>
                {(cert.detailDescription || cert.description || '').split('\n').filter(l => l.trim()).map((line, i) => {
                  const trimmed = line.trim();
                  const isHeading = trimmed.length < 120 && !trimmed.endsWith('.') && !trimmed.endsWith(',') && i > 0 && trimmed === trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
                  if (isHeading && trimmed.length > 5) {
                    return <h3 key={i} className="text-base font-bold mt-6 mb-3" style={{ color: 'var(--foreground)' }}>{trimmed}</h3>;
                  }
                  return <p key={i} className="mb-3">{trimmed}</p>;
                })}

                {cert.outcomes && cert.outcomes.length > 0 && (
                  <>
                    <h3 className="text-base font-bold mt-8 mb-3" style={{ color: 'var(--foreground)' }}>
                      Sertifika Kazanımları
                    </h3>
                    <ul className="pl-5 mb-4">
                      {cert.outcomes.map((item, idx) => (
                        <li key={idx} className="mb-2">{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Eğitmen / Yazar */}
                <div
                  className="mt-8 p-5 rounded-xl"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--foreground) 4%, var(--background))',
                    border: '1px solid color-mix(in srgb, var(--foreground) 8%, transparent)',
                  }}
                >
                  <h4 className="text-[11px] font-bold uppercase tracking-wider mb-3" style={{ color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>
                    Eğitmen / Yazar
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs" style={{ color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>
                    <div><strong style={{ color: 'var(--foreground)' }}>Sertifika:</strong> {cert.title}</div>
                    <div><strong style={{ color: 'var(--foreground)' }}>Kategori:</strong> {cert.categoryName || 'Belirtilmemiş'}</div>
                    {cert.code && <div><strong style={{ color: 'var(--foreground)' }}>Kod:</strong> {cert.code}</div>}
                    {cert.duration && <div><strong style={{ color: 'var(--foreground)' }}>Süre:</strong> {cert.duration}</div>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="max-w-3xl animate-fadeIn">
              {FAQ_ITEMS.map((faq, index) => (
                <div key={index} style={{ borderBottom: '1px solid color-mix(in srgb, var(--foreground) 8%, transparent)' }}>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-4 cursor-pointer text-left"
                    style={{ background: 'transparent', border: 'none' }}
                  >
                    <span className="text-sm font-semibold pr-4" style={{ color: 'var(--foreground)' }}>{faq.q}</span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                      style={{
                        backgroundColor: openFaq === index ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 6%, var(--background))',
                        color: openFaq === index ? 'var(--background)' : 'color-mix(in srgb, var(--foreground) 40%, transparent)',
                        transform: openFaq === index ? 'rotate(180deg)' : 'none',
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaq === index ? 500 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease, padding 0.3s ease',
                      paddingBottom: openFaq === index ? '1.25rem' : 0,
                    }}
                  >
                    <p className="text-xs leading-relaxed" style={{ color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'exam' && (
            <div className="max-w-3xl text-center py-16 animate-fadeIn">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--foreground) 6%, var(--background))' }}>📝</div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--foreground)' }}>Sınav Bilgisi</h3>
              <p className="text-xs" style={{ color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>
                Bu sertifika programı için sınav bilgisi henüz belirlenmemiştir.
              </p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="max-w-xl animate-fadeIn">
              <div className="text-center py-8 mb-8" style={{ borderBottom: '1px solid color-mix(in srgb, var(--foreground) 8%, transparent)' }}>
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--foreground) 6%, var(--background))' }}>💬</div>
                <h3 className="text-base font-bold mb-1" style={{ color: 'var(--foreground)' }}>Yorumlar</h3>
                <p className="text-xs" style={{ color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>
                  Henüz değerlendirme yapılmadı. İlk yorumu siz yapın!
                </p>
              </div>

              {/* Yorum Formu */}
              <div>
                <h4 className="text-sm font-bold mb-4" style={{ color: 'var(--foreground)' }}>Yorum Yap</h4>
                <div className="mb-3">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'color-mix(in srgb, var(--foreground) 60%, transparent)' }}>Puan</label>
                  <div className="flex gap-1 text-lg" style={{ color: '#f59e0b' }}>
                    {[1,2,3,4,5].map(s => <span key={s} className="cursor-pointer">★</span>)}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'color-mix(in srgb, var(--foreground) 60%, transparent)' }}>Yorumunuz</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 rounded-xl text-xs resize-y focus:outline-none"
                    style={{
                      border: '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)',
                      backgroundColor: 'var(--background)',
                      color: 'var(--foreground)',
                    }}
                    placeholder="Yorumunuzu yazın..."
                  />
                </div>
                <button
                  className="py-3 px-6 rounded-xl text-xs font-semibold cursor-pointer transition-all"
                  style={{
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--background)',
                    border: 'none',
                  }}
                >
                  Yorum Gönder
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bilgi Bandı */}
      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl p-6 flex items-center gap-5"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--foreground) 6%, var(--background))',
              border: '1px solid color-mix(in srgb, var(--foreground) 8%, transparent)',
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'color-mix(in srgb, var(--foreground) 10%, var(--background))' }}
            >
              <svg className="w-6 h-6" style={{ color: 'var(--foreground)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                Türkiye&apos;nin Her Yerine Online Eğitim
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'color-mix(in srgb, var(--foreground) 50%, transparent)' }}>
                <span className="font-semibold" style={{ color: 'var(--foreground)' }}>{cert.title}</span>{' '}
                sertifika programına katılarak kariyerinizi bir adım öne taşıyın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İlgili Sertifikalar */}
      {relatedCerts.length > 0 && (
        <section className="px-4 sm:px-6 pb-14">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-1"
                style={{ color: 'color-mix(in srgb, var(--foreground) 35%, transparent)' }}
              >
                Öneriler
              </p>
              <h2 className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>
                İlgili Sertifikalar
              </h2>
            </div>

            <div className="relative">
              <button
                onClick={() => scrollCarousel('left')}
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold cursor-pointer z-2 transition-all"
                style={{
                  border: '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)',
                  boxShadow: '0 2px 8px color-mix(in srgb, var(--foreground) 8%, transparent)',
                }}
              >
                ‹
              </button>
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto scrollbar-none py-2 px-4"
                style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
              >
                {relatedCerts.map(c => (
                  <div key={c.id} className="flex-none w-[260px]" style={{ scrollSnapAlign: 'start' }}>
                    <SertifikaCard cert={c} />
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollCarousel('right')}
                className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold cursor-pointer z-2 transition-all"
                style={{
                  border: '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)',
                  boxShadow: '0 2px 8px color-mix(in srgb, var(--foreground) 8%, transparent)',
                }}
              >
                ›
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Sticky WhatsApp */}
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-105"
        style={{
          backgroundColor: '#25D366',
          color: '#fff',
          boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
          textDecoration: 'none',
        }}
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-[5.5rem] right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all"
          style={{
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
            boxShadow: '0 4px 16px color-mix(in srgb, var(--foreground) 18%, transparent)',
          }}
        >
          ↑
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease; }
        @media (max-width: 1024px) {
          .detail-sticky-image { position: relative !important; top: 0 !important; }
        }
        @media (max-width: 768px) {
          .detail-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
