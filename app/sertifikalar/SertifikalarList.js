'use client';

import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { sertifikaKategorileri } from '@/data/sertifikaMeta';
import { sertifikaCards } from '@/data/sertifikaCards';
import SertifikaModal from '@/app/components/sertifika/SertifikaModal';
import SertifikaCard from '@/app/components/sertifika/SertifikaCard';
import SertifikaHeroFilter from '../components/sertifika/SertifikaHeroFilter';

export default function SertifikalarList({ initialCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'hepsi');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [sortBy, setSortBy] = useState('one-cikanlar');
  const [visibleCount, setVisibleCount] = useState(20);
  const sentinelRef = useRef(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Scroll pozisyonuna göre go-to-top butonunu göster/gizle
  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Filtre değişimlerinde sayfalamayı sıfırla
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(20);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setVisibleCount(20);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setVisibleCount(20);
  };

  // Arama, Filtreleme ve Sıralama Mantığı
  const filteredCertificates = useMemo(() => {
    let result = sertifikaCards.filter(cert => {
      const matchesCategory = selectedCategory === 'hepsi' || cert.category === selectedCategory || cert.categoryId === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || cert.title?.toLowerCase().includes(query) || cert.code?.toLowerCase().includes(query) || cert.description?.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    // Sıralama Mantığı
    if (sortBy === 'a-z') {
      result.sort((a, b) => (a.title || '').localeCompare(b.title || '', 'tr'));
    } else if (sortBy === 'z-a') {
      result.sort((a, b) => (b.title || '').localeCompare(a.title || '', 'tr'));
    } else if (sortBy === 'yeni') {
      // ID veya varsayılan bir sıraya göre (ters)
      result.reverse();
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('hepsi');
    setSearchQuery('');
    setSortBy('one-cikanlar');
    setVisibleCount(20);
  };

  // Lazy load: Intersection Observer ile otomatik yükleme
  const loadMore = useCallback(() => {
    setVisibleCount(prev => prev + 20);
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore, filteredCertificates.length]);

  const visibleCertificates = filteredCertificates.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCertificates.length;

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Arama ve Filtre Kontrol Alanı */}
        <SertifikaHeroFilter
          searchQuery={searchQuery}
          setSearchQuery={handleSearchChange}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
          sortBy={sortBy}
          setSortBy={handleSortChange}
          kategoriler={sertifikaKategorileri}
          totalCount={filteredCertificates.length}
        />

        {/* Sertifika Kartları (Grid Yapısı) */}
        {filteredCertificates.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {visibleCertificates.map(cert => (
                <SertifikaCard key={cert.id} cert={cert} onSelect={setSelectedCertificate} />
              ))}
            </div>

            {/* Lazy load tetikleyicisi */}
            {hasMore && (
              <div ref={sentinelRef} className="flex justify-center py-10">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
                  Daha fazla yükleniyor...
                </div>
              </div>
            )}

            {!hasMore && filteredCertificates.length > 20 && (
              <p className="text-center py-8 text-sm text-muted-foreground">{filteredCertificates.length} sertifikanın tamamı gösterildi</p>
            )}
          </>
        ) : (
          /* Sonuç Bulunamadı */
          <div className="text-center py-20 bg-card rounded-3xl border border-dashed border-gray-300 dark:border-border max-w-xl mx-auto">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950/50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">🔍</div>
            <h3 className="text-lg font-bold text-foreground">Sertifika Bulunamadı</h3>
            <p className="text-sm text-muted-foreground mt-1">Arama kriterlerinize veya seçilen kategoriye uygun içerik bulunamadı.</p>
            <button
              onClick={handleResetFilters}
              className="mt-5 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-all cursor-pointer shadow-md shadow-blue-600/20"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}

        {/* Modal */}
        <SertifikaModal cert={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
      </div>

      {/* Go to Top Butonu */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          style={{
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)'
          }}
          aria-label="Sayfanın başına dön"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
