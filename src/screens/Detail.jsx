import { useState } from 'react'
import { ArrowLeft, ChevronRight, Lightbulb } from 'lucide-react'
import Toggle from '../components/Toggle'
import { CATEGORIES, fmt } from '../data'

export default function Detail({ activity: a, onBack }) {
  const [remind, setRemind] = useState(false)
  const Icon = a.icon
  const cat = CATEGORIES[a.category]

  return (
    <div className="pt-safe absolute inset-0 overflow-y-auto bg-canvas">
      <div className="flex h-16 items-center gap-2 px-3">
        <button onClick={onBack} aria-label="Kembali" className="grid h-10 w-10 place-items-center rounded-full hover:bg-stone-200/60"><ArrowLeft size={22} /></button>
        <h1 className="text-base font-semibold">Detail aktivitas</h1>
      </div>

      <div className="px-5 pb-10">
        <section className="rounded-3xl bg-white p-6 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-leaf-50 text-leaf-600"><Icon size={26} /></span>
          <h2 className="mt-4 text-lg font-semibold">{a.title}</h2>
          <p className="text-sm text-ink-faint">{a.time}</p>
          <p className="mt-5 text-5xl font-bold tracking-tight text-leaf-700">{fmt(a.kg)}<span className="ml-1 text-lg font-medium text-ink-soft">kg CO₂</span></p>
          <p className="mt-2 text-sm text-ink-soft">Kategori {cat.label.toLowerCase()}</p>
        </section>

        <section className="mt-4 rounded-3xl bg-white p-5">
          <h3 className="text-sm font-semibold">Catatan</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{a.note}</p>
          <div className="mt-4 flex gap-3 rounded-2xl bg-leaf-50 p-4">
            <Lightbulb size={20} className="shrink-0 text-leaf-600" />
            <p className="text-sm text-leaf-900">
              {a.kg === 0 ? 'Pilihan terbaik! Pertahankan kebiasaan ini.' : 'Coba alternatif rendah emisi untuk aktivitas serupa minggu depan.'}
            </p>
          </div>
        </section>

        <section className="mt-4 flex items-center justify-between rounded-3xl bg-white p-5">
          <div>
            <p className="font-semibold">Ingatkan saya</p>
            <p className="text-xs text-ink-faint">Untuk aktivitas serupa besok</p>
          </div>
          <Toggle checked={remind} onChange={setRemind} label="Ingatkan saya" />
        </section>

        <a href="https://www.un.org/en/actnow/ten-actions" target="_blank" rel="noreferrer"
          className="mt-6 flex items-center justify-center gap-1 text-sm font-semibold text-leaf-600 hover:underline">
          Pelajari lebih lanjut <ChevronRight size={16} />
        </a>
      </div>
    </div>
  )
}
