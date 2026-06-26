import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Sayfa Bulunamadı</h1>
        <p className="text-lg text-foreground/70">Aradığınız sayfaya ulaşamadık. URL'in doğru olup olmadığını kontrol ediniz.</p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/" className="flex items-center justify-center py-3 px-6 text-sm text-white font-bold bg-blue-600 hover:bg-blue-700 transition-all duration-150 rounded-xl">
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/iletisim"
            className="flex items-center justify-center py-3 px-6 text-sm text-foreground font-semibold bg-foreground/10 hover:bg-foreground/20 transition-all duration-150 rounded-xl border border-foreground/10"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  );
}
