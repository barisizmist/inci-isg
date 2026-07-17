'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { certificates, serviceDetailItems, machineTrainings, isoDocuments, cityList } from '@/data/mockData';

const allPrograms = [
  ...certificates.map(item => ({ id: `cert-${item.id}`, name: item.title, category: 'Sertifika', slug: item.slug })),
  ...serviceDetailItems.map(item => ({ id: `service-${item.id}`, name: item.title, category: 'Hizmet / Egitim', slug: item.slug })),
  ...machineTrainings.map(item => ({ id: `machine-${item.id}`, name: item.title, category: 'Is Makinesi', slug: item.slug })),
  ...isoDocuments.map(item => ({ id: `iso-${item.id}`, name: `${item.code} - ${item.title}`, category: 'Belgelendirme', slug: item.slug }))
];

const categoryOptions = ['Tum Kategoriler', 'Sertifika', 'Hizmet / Egitim', 'Is Makinesi', 'Belgelendirme'];

export default function ProgramSearch() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Tum Kategoriler');
  const [city, setCity] = useState('Tum Sehirler');

  const filtered = useMemo(() => {
    return allPrograms.filter(item => {
      const q = query.trim().toLowerCase();
      const matchesQuery = q.length === 0 || item.name.toLowerCase().includes(q);
      const matchesCategory = category === 'Tum Kategoriler' || item.category === category;
      const matchesCity = city === 'Tum Sehirler' || city.length > 0;
      return matchesQuery && matchesCategory && matchesCity;
    });
  }, [query, category, city]);

  return (
    <section className="pb-10 md:pb-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="surface-card p-6 md:p-8" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--brand)] font-semibold">Hizli Program Arama</p>
              <h2 className="text-3xl mt-2">Sertifika, kategori ve sehir bazli filtrele</h2>
              <p className="text-sm text-foreground/70 mt-2">Ihtiyaciniza en uygun programi saniyeler icinde bulun, sonra basvuruya gecin.</p>
            </div>
            <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">{filtered.length} sonuc bulundu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/65">Sertifika Adi / Program</span>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Orn: Yangin Egitimi"
                className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-cyan-500/10"
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/65">Kategori</span>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-cyan-500/10"
              >
                {categoryOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/65">Sehir</span>
              <select
                value={city}
                onChange={e => setCity(e.target.value)}
                className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-cyan-500/10"
              >
                <option value="Tum Sehirler">Tum Sehirler</option>
                {cityList.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.slice(0, 8).map(item => (
              <div key={item.id} className="rounded-xl border border-foreground/10 bg-background p-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">{item.category}</p>
                  <p className="font-semibold mt-1">{item.name}</p>
                </div>
                <Link href="/iletisim" className="text-xs uppercase tracking-[0.14em] font-semibold text-[var(--brand)] whitespace-nowrap">
                  Basvur
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && <p className="mt-6 text-sm text-foreground/70">Arama kriterlerinize uygun sonuc bulunamadi. Filtreleri genisleterek tekrar deneyin.</p>}
        </div>
      </div>
    </section>
  );
}
