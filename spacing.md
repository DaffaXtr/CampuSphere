Berikut adalah file Markdown lengkap yang merangkum seluruh aturan tata letak, dokumentasi responsif, *border radius*, dan sistem bayangan untuk **CampuSphere Design System**:

```markdown
# 📐 CampuSphere Layout, Spacing & Design Tokens

Dokumen resmi ini memuat spesifikasi teknis untuk sistem spasial (*spacing*), responsivitas tata letak (*responsive layout*), serta komponen visual (*tokens*) yang digunakan dalam ekosistem **CampuSphere**. Panduan ini wajib diterapkan secara konsisten pada tahap perancangan antarmuka (UI) maupun pengembangan kode (Frontend).

---

## 🔢 1. Basis Unit & Skala Spasi (Base Unit)

Sistem tata letak CampuSphere dibangun berlandaskan prinsip **1 Unit = 8px**. Seluruh nilai *margin*, *padding*, dan celah antar-elemen (*gap*) wajib menggunakan skala kelipatan atau pembagian linear dari nilai dasar ini:

| Multiplier | Ukuran (Pixel) | Nilai CSS | Rekomendasi Penggunaan Umum |
| :--- | :--- | :--- | :--- |
| **0.5x** | 4px | `4px` | *Micro adjustment*, elemen teks sangat kecil |
| **1x** | 8px | `8px` | Jarak antar elemen teks sejenis, *sub-heading* |
| **2x** | 16px | `16px` | Jarak antar elemen dalam *card*, padding *mobile* |
| **3x** | 24px | `24px` | Padding standar *card* desktop, grid *gap* menengah |
| **4x** | 32px | `32px` | Jarak antar seksi kecil, padding *hero* *mobile* |
| **5x** | 40px | `40px` | Padding kontainer desktop standar |
| **6x** | 48px | `48px` | Jarak vertikal antar seksi pada layar *mobile* |
| **8x** | 64px | `64px` | Tinggi navbar *mobile*, jarak seksi tablet |
| **10x** | 80px | `80px` | Tinggi navbar desktop, jarak seksi desktop |
| **12x** | 96px | `96px` | Jarak antar seksi pada layar *large desktop* |
| **16x** | 128px | `128px` | Batas layout makro yang membutuhkan ruang udara masif |

---

## 📱 2. Aturan Spasi Berdasarkan Perangkat (Responsive Specs)

### Mobile (375px – 767px)
* **Container Layout:** `padding-inline: 16px;`
* **Section Spacing:** `margin-top: 48px; margin-bottom: 48px;`
* **Card Element:** `padding: 16px; border-radius: 24px;`
* **Card Grid Gap:** `gap: 16px;`
* **Hero Area:** `padding-top: 32px; padding-bottom: 32px;`
* **Form & Button Controls:** Tombol `padding: 12px 20px;`, Input Field `padding: 12px 16px;`

### Tablet (768px – 1023px)
* **Container Layout:** `padding-inline: 32px;`
* **Section Spacing:** `margin-top: 64px; margin-bottom: 64px;`
* **Card Element:** `padding: 24px;`
* **Grid Gap:** `gap: 24px;`

### Desktop (1024px – 1439px)
* **Container Layout:** `max-width: 1280px; padding-inline: 40px; margin: auto;`
* **Section Spacing:** `margin-top: 80px; margin-bottom: 80px;`
* **Card Element:** `padding: 24px;` atau `padding: 32px;` (Khusus untuk komponen *Hero Card*)
* **Grid Gap:** `gap: 24px;` atau `gap: 32px;` (Disesuaikan dengan kepadatan informasi)

### Large Desktop (1440px+)
* **Container Layout:** `max-width: 1440px; padding-inline: 64px; margin: auto;`
* **Section Spacing:** `margin-top: 96px; margin-bottom: 96px;`

---

## 🎨 3. Aturan Spesifik Komponen CampuSphere

### Navigation Bar Height
* **Desktop View:** `height: 80px;`
* **Mobile View:** `height: 64px;`

### Hero Section Spacing
* **Desktop Padding:** `padding: 48px;`
* **Mobile Padding:** `padding: 24px;`
* **Hero Illustration Gap:** Jarak konstan sebesar **32px** wajib diterapkan secara vertikal/horizontal sebagai batas antar elemen penyusun berikut:
    $$\text{Title} \longrightarrow \text{Description} \longrightarrow \text{CTA} \longrightarrow \text{Illustration}$$

### Activity Hub Stats Widget
* **Sizing & Grid Flow:** `padding: 24px; gap: 16px;`

### Event Card Internal Flow
Penyusunan jarak internal (*internal spacing*) secara vertikal pada komponen *Event Card* diatur dengan struktur absolut:
1.  Dari **Title** $\rightarrow$ **Meta Data**: `margin-bottom: 8px;`
2.  Dari **Meta Data** $\rightarrow$ **Tags Element**: `margin-bottom: 12px;`
3.  Dari **Tags Element** $\rightarrow$ **CTA Button**: `margin-bottom: 16px;`

### Typography Spatial Rules
* **Heading Text:** `margin-bottom: 16px;`
* **Description Text:** `margin-top: 16px;`
* **Section Header Area:** Area judul seksi wajib ditutup dengan jarak spasi `margin-bottom: 32px;` sebelum daftar kartu konten di bawahnya dimulai.

*Contoh Alur Implementasi:*

```

Upcoming Events (Section Header)
│
▼ [32px Spacing]
┌──────────────────────────────────────┐
│  Event Cards / Grid List Content     │
└──────────────────────────────────────┘

```

---

## 📐 4. Sistem Sudut Kelengkungan (Border Radius System)

CampuSphere menerapkan nilai kelengkungan sudut yang cukup besar (*large curves*) untuk mempertegas identitas platform yang modern, bersahabat, ramah pengguna, dan berorientasi pada komunitas mahasiswa.

* **Badge Element:** `border-radius: 12px;`
* **Button Component:** `border-radius: 16px;`
* **Card Component Layout:** `border-radius: 24px;`
* **Hero Card & Main Banner:** `border-radius: 32px;`
* **Floating Element / Fully Rounded Pill:** `border-radius: 999px;`

---

## 🔮 5. Sistem Bayangan Kedalaman (Shadow System)

Sistem bayangan menggunakan tingkat transparansi yang halus berbasis aksen warna utama biru (`rgba(37, 99, 235, ...)`) untuk menyusun hierarki elevasi visual yang natural pada antarmuka.

* **Small Shadow (`box-shadow`)**
    ```css
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08);
    ```
    *Rekomendasi Aplikasi:* Elemen interaktif berukuran kecil, menu *dropdown*, *popover*, atau efek *hover state* pada *badge*.
    
* **Medium Shadow (`box-shadow`)**
    ```css
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.12);
    ```
    *Rekomendasi Aplikasi:* Komponen utama antarmuka seperti *Event Card*, panel dasbor, dan *Activity Hub widget*.
    
* **Large Hero Shadow (`box-shadow`)**
    ```css
    box-shadow: 0 20px 60px rgba(37, 99, 235, 0.15);
    ```
    *Rekomendasi Aplikasi:* Digunakan eksklusif untuk komponen dengan tingkat fokus utama tertinggi seperti modul *Hero Card*, jendela dialog (*modal popup*), dan ilustrasi promosi.

```