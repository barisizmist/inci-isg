'use client';

import Link from 'next/link';

export default function SertifikaCard({ cert, onSelect }) {
  return (
    <article
      className="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-0.5 flex flex-col h-full"
      style={{
        '--card-bg': 'var(--background)',
        '--card-border': 'color-mix(in srgb, var(--foreground) 8%, transparent)',
        '--card-text': 'var(--foreground)',
        '--card-muted': 'color-mix(in srgb, var(--foreground) 50%, transparent)',
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        boxShadow: '0 1px 3px color-mix(in srgb, var(--foreground) 4%, transparent)',
      }}
    >
      {/* Görsel */}
      <Link
        href={`/sertifikalar/${cert.id}`}
        className="block relative overflow-hidden"
        style={{
          aspectRatio: '16/10',
          backgroundColor: 'color-mix(in srgb, var(--foreground) 4%, var(--background))',
        }}
      >
        <img
          src={cert.image || '/images/cert-placeholder.jpg'}
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Kategori rozeti */}
        {cert.categoryName && (
          <span
            className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold backdrop-blur-sm"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--background) 88%, transparent)',
              color: 'var(--foreground)',
            }}
          >
            {cert.categoryName}
          </span>
        )}
      </Link>

      {/* İçerik */}
      <div className="p-4 flex flex-col flex-grow">
        <h3
          className="text-sm font-semibold leading-snug mb-2 line-clamp-2 min-h-[2.5rem]"
          style={{ color: 'var(--card-text)' }}
        >
          <Link
            href={`/sertifikalar/${cert.id}`}
            className="text-inherit no-underline hover:underline decoration-1 underline-offset-2"
          >
            {cert.title}
          </Link>
        </h3>

        {/* Meta bilgiler */}
        <div className="flex items-center gap-3 mt-auto mb-3">
          {cert.code && (
            <span
              className="text-[10px] font-medium px-2 py-0.5 rounded"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--foreground) 5%, var(--background))',
                color: 'var(--card-muted)',
              }}
            >
              Kod: {cert.code}
            </span>
          )}
          {cert.duration && (
            <span
              className="text-[10px] font-medium px-2 py-0.5 rounded"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--foreground) 5%, var(--background))',
                color: 'var(--card-muted)',
              }}
            >
              {cert.duration}
            </span>
          )}
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex items-center gap-2 mt-auto">
          <a
            href={`https://wa.me/905466893488?text=${encodeURIComponent(`${cert.title} sertifikası hakkında bilgi almak istiyorum.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: '#25D366',
              color: '#fff',
            }}
            aria-label="WhatsApp ile iletişim"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href={`/sertifikalar/${cert.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--foreground)',
              color: 'var(--background)',
            }}
          >
            Bilgi Al
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
