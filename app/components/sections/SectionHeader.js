import Link from 'next/link';

const SectionHeader = ({ overline, title, highlight, description, href, linkText = 'Tümünü Gör' }) => {
  const overlineStyle = {
    backgroundColor: 'color-mix(in srgb, var(--foreground) 7%, transparent)',
    color: 'color-mix(in srgb, var(--foreground) 60%, transparent)',
  };
  const highlightStyle = { color: 'var(--foreground)' };
  const descStyle = { color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' };
  const linkStyle = {
    borderColor: 'color-mix(in srgb, var(--foreground) 15%, transparent)',
    color: 'var(--foreground)',
  };

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12">
      <div className="max-w-2xl">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest shadow-sm"
          style={overlineStyle}
        >
          {overline}
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--foreground)' }}>
          {title} <span style={highlightStyle}>{highlight}</span>
        </h2>
        {description && (
          <p className="mt-3 leading-relaxed text-sm sm:text-base" style={descStyle}>
            {description}
          </p>
        )}
      </div>
      <Link
        href={href}
        className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
        style={linkStyle}
      >
        {linkText}
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
};

export default SectionHeader;
