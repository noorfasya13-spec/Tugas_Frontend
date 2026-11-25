import { Car, Zap, Utensils, ShoppingBag, Bike, Coffee } from 'lucide-react'

// Faktor emisi sederhana (kg CO2 per satuan) — angka contoh untuk prototype
export const CATEGORIES = {
  transportasi: { label: 'Transportasi', icon: Car, unit: 'km', factor: 0.21, color: '#2E7D32' },
  listrik: { label: 'Listrik', icon: Zap, unit: 'kWh', factor: 0.85, color: '#66BB6A' },
  makanan: { label: 'Makanan', icon: Utensils, unit: 'porsi', factor: 1.5, color: '#A5D6A7' },
  belanja: { label: 'Belanja', icon: ShoppingBag, unit: 'item', factor: 3, color: '#F2B544' },
}

export const INITIAL_ACTIVITIES = [
  { id: 1, title: 'Naik mobil', time: 'Hari ini, 08.30', kg: 4.2, category: 'transportasi', icon: Car, liked: false,
    note: 'Perjalanan 20 km dengan mobil pribadi berbahan bensin.' },
  { id: 2, title: 'Pemakaian listrik', time: 'Kemarin, 21.10', kg: 2.8, category: 'listrik', icon: Zap, liked: true,
    note: 'AC menyala sekitar 3 jam di malam hari.' },
  { id: 3, title: 'Makan siang', time: 'Kemarin, 12.45', kg: 1.5, category: 'makanan', icon: Utensils, liked: false,
    note: 'Nasi dengan lauk daging ayam.' },
  { id: 4, title: 'Bersepeda', time: 'Sen, 07.20', kg: 0, category: 'transportasi', icon: Bike, liked: true,
    note: 'Bersepeda 5 km ke kampus. Tanpa emisi sama sekali.' },
  { id: 5, title: 'Belanja pakaian', time: 'Min, 16.10', kg: 6.1, category: 'belanja', icon: ShoppingBag, liked: false,
    note: 'Dua potong pakaian baru dari toko daring.' },
  { id: 6, title: 'Kopi lokal', time: 'Sab, 09.00', kg: 0.3, category: 'makanan', icon: Coffee, liked: false,
    note: 'Kopi dari kedai dekat rumah dengan gelas sendiri.' },
]

export const TIPS = [
  { title: 'Matikan lampu', text: 'Saat tidak digunakan', tone: 'bg-leaf-100 text-leaf-700', icon: Zap },
  { title: 'Pilih bersepeda', text: 'Untuk jarak dekat', tone: 'bg-amber-50 text-amber-700', icon: Bike },
  { title: 'Bawa tumbler', text: 'Kurangi sampah plastik', tone: 'bg-stone-100 text-stone-700', icon: Coffee },
  { title: 'Masak sendiri', text: 'Lebih hemat kemasan', tone: 'bg-leaf-50 text-leaf-700', icon: Utensils },
  { title: 'Belanja seperlunya', text: 'Pakai tas kain', tone: 'bg-amber-50 text-amber-700', icon: ShoppingBag },
]

export const WEEK = [
  { day: 'Sen', kg: 3.1 }, { day: 'Sel', kg: 4.6 }, { day: 'Rab', kg: 3.6 }, { day: 'Kam', kg: 5.4 },
  { day: 'Jum', kg: 4.1 }, { day: 'Sab', kg: 2.4 }, { day: 'Min', kg: 4.9 },
]

export const MONTHLY_BASE = 120 - INITIAL_ACTIVITIES.reduce((s, a) => s + a.kg, 0)
export const MONTHLY_TARGET = 150

export const fmt = (n) => n.toLocaleString('id-ID', { maximumFractionDigits: 1 })
