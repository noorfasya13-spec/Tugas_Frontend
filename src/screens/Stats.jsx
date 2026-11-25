import { useState } from 'react'
import { Leaf } from 'lucide-react'
import { CATEGORIES, fmt } from '../data'

const PERIODS = ['Minggu', 'Bulan', 'Tahun']

export default function Stats({ activities }) {
  const [period, setPeriod] = useState('Bulan')
  const sums = Object.keys(CATEGORIES).map((k) => ({ key: k, kg: activities.filter((a) => a.category === k).reduce((s, a) => s + a.kg, 0) }))
  const sum = sums.reduce((s, c) => s + c.kg, 0) || 1
  const R = 70, C = 2 * Math.PI * R
  let offset = 0

  return (
    <div className="pt-safe absolute inset-0 overflow-y-auto no-scrollbar bg-canvas pb-28">
      <div className="px-5 pt-6">
        <p className="text-sm text-ink-soft">Ringkasan emisi</p>
        <h1 className="text-2xl font-semibold">Statistik</h1>

        <div className="mt-5 grid grid-cols-3 rounded-xl bg-stone-200/70 p-1" role="tablist">
          {PERIODS.map((p) => (
            <button key={p} role="tab" aria-selected={period === p} onClick={() => setPeriod(p)}
              className={`h-9 rounded-lg text-sm font-medium transition ${period === p ? 'bg-white text-ink shadow-sm' : 'text-ink-soft'}`}>{p}</button>
          ))}
        </div>

        <section className="mt-4 rounded-3xl bg-white p-5">
          <h2 className="text-sm font-semibold">Emisi per kategori</h2>
          <div className="relative mx-auto mt-4 h-48 w-48">
            <svg viewBox="0 0 180 180" className="-rotate-90">
              <circle cx="90" cy="90" r={R} fill="none" stroke="#EEF2EC" strokeWidth="22" />
              {sums.map(({ key, kg }) => {
                const len = (kg / sum) * C
                const el = (
                  <circle key={key} cx="90" cy="90" r={R} fill="none" stroke={CATEGORIES[key].color} strokeWidth="22"
                    strokeDasharray={`${Math.max(0, len - 2)} ${C}`} strokeDashoffset={-offset} className="transition-all duration-700" />
                )
                offset += len
                return el
              })}
            </svg>
            <div className="absolute inset-0 grid place-content-center text-center">
              <p className="text-3xl font-bold">{fmt(sum)}</p>
              <p className="text-xs text-ink-faint">kg CO₂ tercatat</p>
            </div>
          </div>

          <ul className="mt-5 space-y-3">
            {sums.map(({ key, kg }) => {
              const { label, icon: Icon, color } = CATEGORIES[key]
              return (
                <li key={key} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-stone-50"><Icon size={18} style={{ color }} /></span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="text-xs text-ink-faint">{Math.round((kg / sum) * 100)}% dari total</p>
                  </div>
                  <p className="text-sm font-semibold tabular-nums">{fmt(kg)} kg</p>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="mt-4 flex gap-3 rounded-3xl bg-leaf-100 p-5">
          <Leaf className="shrink-0 text-leaf-600" size={22} />
          <div>
            <p className="font-semibold text-leaf-900">Kerja bagus, Fadil!</p>
            <p className="text-sm text-leaf-700">Emisimu turun 16,4 kg dibanding bulan lalu.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
