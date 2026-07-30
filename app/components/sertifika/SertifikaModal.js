import Link from 'next/link';

const WHATSAPP_NUMBER = '905322355022';

export default function SertifikaModal({ cert, onClose }) {
  if (!cert) return null;

  const whatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${cert.title} sertifikası hakkında bilgi almak istiyorum.`)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      style={{ backgroundColor: 'color-mix(in srgb, #000 60%, transparent)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          boxShadow: '0 25px 50px -12px color-mix(in srgb, var(--foreground) 25%, transparent)',
          border: '1px solid color-mix(in srgb, var(--foreground) 8%, transparent)',
        }}
      >
        {/* Kapat */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer z-10 text-sm font-bold"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--foreground) 6%, var(--background))',
            color: 'color-mix(in srgb, var(--foreground) 50%, transparent)',
            border: '1px solid color-mix(in srgb, var(--foreground) 8%, transparent)',
          }}
        >
          ✕
        </button>

        {/* Görsel */}
        <div className="relative overflow-hidden" style={{ borderRadius: '1rem 1rem 0 0', aspectRatio: '16/9' }}>
          <img src={cert.image} alt={cert.title} className="w-full h-full object-cover block" />
          {cert.categoryName && (
            <span
              className="absolute top-3 left-3 px-3 py-1.5 rounded-lg text-[10px] font-semibold backdrop-blur-sm"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--background) 90%, transparent)',
                color: 'var(--foreground)',
              }}
            >
              {cert.categoryName}
            </span>
          )}
        </div>

        {/* İçerik */}
        <div className="p-6">
          <h2
            className="text-lg font-bold leading-snug mb-3"
            style={{ color: 'var(--foreground)' }}
          >
            {cert.title}
          </h2>

          <p
            className="text-xs leading-relaxed mb-4"
            style={{ color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}
          >
            {cert.description}
          </p>

          {/* Meta */}
          <div className="flex gap-2 flex-wrap mb-5">
            {cert.duration && (
              <span
                className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--foreground) 5%, var(--background))',
                  color: 'color-mix(in srgb, var(--foreground) 55%, transparent)',
                }}
              >
                Süre: {cert.duration}
              </span>
            )}
            {cert.code && (
              <span
                className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--foreground) 5%, var(--background))',
                  color: 'color-mix(in srgb, var(--foreground) 55%, transparent)',
                }}
              >
                Kod: {cert.code}
              </span>
            )}
          </div>

          {/* Aksiyonlar */}
          <div className="flex gap-3">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all"
              style={{
                backgroundColor: '#25D366',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ile Bilgi Al
            </a>
            <Link
              href={`/sertifikalar/${cert.id}`}
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all"
              style={{
                backgroundColor: 'var(--foreground)',
                color: 'var(--background)',
                textDecoration: 'none',
              }}
            >
              Detayları Gör
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
