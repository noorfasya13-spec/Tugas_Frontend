# EcoTrack — Frontend (React + Tailwind)

Aplikasi pelacak jejak karbon, versi web dari desain Figma EcoTrack.
Dirancang mobile-first; di desktop aplikasi tampil dalam bingkai seukuran ponsel.

## Menjalankan

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya http://localhost:5173).
Untuk mencoba di HP, sambungkan HP ke Wi-Fi yang sama lalu buka alamat "Network" yang muncul di terminal.

## Build produksi

```bash
npm run build
npm run preview
```

## Struktur

```
src/
  App.jsx                 navigasi antar-layar, state aktivitas, overlay
  data.js                 data contoh, kategori & faktor emisi
  components/             PrimaryButton, Toggle, HeartButton, PageIndicator,
                          BottomNav, Overlay, AddActivitySheet, SuccessDialog
  screens/                Splash, Onboarding, Login, Home, Detail, Stats, Profile
```

## Alur

Splash (otomatis 1,6 detik) → Onboarding (geser atau tombol Lanjut) → Login →
Home → tombol + membuka bottom sheet → Simpan → dialog sukses → data Home dan Statistik ikut berubah.

Login hanya validasi di sisi tampilan (email valid dan kata sandi minimal 6 karakter); belum terhubung ke backend.
