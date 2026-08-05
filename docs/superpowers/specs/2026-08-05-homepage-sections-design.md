# Ana Sayfa Bölümleri (Öne Çıkanlar · Eğitimler · Sertifikalar) — Tasarım

Tarih: 2026-08-05

## Amaç

nidaakademi.com.tr anasayfasındaki "Öne Çıkanlar", "Eğitim" ve "Sertifikalar" bölümlerinden ilham alarak, birebir kopya olmayan; renkli, canlı, modern ve responsive bir tasarımla İnci İSG anasayfasına üç yeni bölüm eklemek.

## Mevcut Durum

- Teknoloji: Next.js 16 (App Router), React 19, Tailwind v4, AOS animasyonları, dark/light tema (CSS değişkenleri).
- Ana sayfa (`app/page.js`): `Hero → Cta → Team`.
- Mevcut veri: `data/egitimlerData.js` (9 eğitim), `data/sertifikaCards.js` (yüzlerce sertifika; `one-cikanlar` kategorisinde 5 adet).
- Mevcut desenler: `app/components/sections/*`, `app/components/sertifika/SertifikaCard.js`, `app/egitimler/page.js` (grid + CTA), `app/sertifikalar/*`.

## Kapsam

Anasayfaya üç bölüm eklenir; mevcut sayfa/detay rotaları değişmez, veri dosyaları değişmez.

## Bölüm Düzeni ve Sıra

Ana sayfa sırası:

```
Hero → Öne Çıkanlar → Eğitimler → Sertifikalar → Cta → Team
```

## Bileşenler

| Dosya | Görev |
| --- | --- |
| `app/components/sections/Carousel.js` | Ortak yatay scroll-snap carousel; ok butonları, touch sürükleme, mouse sürükleme (Hero mantığı ile uyumlu). |
| `app/components/sections/FeaturedCerts.js` | Öne Çıkanlar bölümü; carousel. |
| `app/components/sections/EgitimlerSection.js` | Eğitimler bölümü; carousel. |
| `app/components/sections/SertifikalarSection.js` | Sertifikalar bölümü; responsive grid. |

## Veri Akışı ve Bağlantılar

- **Öne Çıkanlar**: `sertifikaCards` → `category === 'one-cikanlar'` filtresi (5 adet). 6'ya kadar gösterilir. Kart: görsel, kategori rozeti, "İncele" (`/sertifikalar/[id]`) + WhatsApp butonu.
- **Eğitimler**: `egitimlerData.slice(0, 6)`. Kart: görsel + gradyan overlay, kategori, "İncele →" (`/egitimler/[slug]`).
- **Sertifikalar**: `sertifikaCards.slice(0, 8)`. 2/3/4 sütunlu responsive grid; WhatsApp + "Bilgi Al" (`/sertifikalar/[id]`).
- Her bölümün başlık satırında ilgili sayfaya giden "Tümünü Gör →" bağlantısı: `/sertifikalar`, `/egitimler`.

## Görsel Sistem

- Dönen 5'li canlı gradyan paleti: indigo→fuchsia, cyan→emerald, amber→rose, violet→sky, lime→teal.
- Her karta aksan olarak: üst renk çizgisi, ikon rozeti, hover kenarlığı ve buton gradyanı.
- Bölüm başlıkları: renkli üst etiket (overline) + büyük başlıkta gradyan vurgulu kelime + sağda "Tümünü Gör →".
- Zeminler `var(--background)` / `var(--foreground)` ile dark-light temaya uyumlu kalır; kontrast için renkli aksanlar üzerinde beyaz metin.
- AOS animasyonları (`data-aos`) ve `.aos-card` hover kuralı korunur.

## Hata Durumları

- Boş veri gelirse ilgili bölüm render edilmez.
- Görsel yüklenemezse `/images/cert-placeholder.jpg` fallback (mevcut `SertifikaCard` deseni).

## Doğrulama

- `npm run lint`
- `npm run build`
- Dev ortamında mobil (yatay kaydırma) ve masaüstü (ok butonları) manuel kontrol.

## Kapsam Dışı

- nidaakademi'deki fiyat gösterimi (veri dosyalarında fiyat yoktur).
- İş makinesi eğitimleri, belgelendirme (ISO) gibi diğer referans bölümleri.
- Veri dosyalarının içerik değişikliği.
