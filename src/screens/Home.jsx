import { useState } from 'react'
import { Leaf, Plus, ArrowDown } from 'lucide-react'
import HeartButton from '../components/HeartButton'
import { TIPS, WEEK, MONTHLY_TARGET, fmt } from '../data'

export default function Home({ total, activities, onOpen, onLike, onAdd, onProfile }) {
  const [showAll, setShowAll] = useState(false)
  const list = showAll ? activities : activities.slice(0, 5)
  const pct = Math.min(100, Math.round((total / MONTHLY_TARGET) * 100))
  const max = Math.max(...WEEK.map((d) => d.kg))
  const today = 3

  return (
    <>
      <div className="absolute inset-0 overflow-y-auto no-scrollbar pb-28">
        <header className="pt-safe bg-leaf-50 px-5 pb-6">
          <div className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-ink-soft">Ayo jaga bumi hari ini</p>
              <h1 className="text-2xl font-semibold">Halo, Fadil</h1>
            </div>
            <button onClick={onProfile} aria-label="Buka profil" className="grid h-11 w-11 place-items-center rounded-full bg-leaf-600 font-semibold text-white">R</button>
          </div>

          <section className="relative mt-5 overflow-hidden rounded-3xl bg-leaf-600 p-5 text-white">
            <Leaf className="absolute -right-6 -top-6 text-white/10" size={140} />
            <p className="text-sm text-white/80">Emisi bulan ini</p>
            <p className="mt-2 flex items-baseline gap-1.5">
              <span className="text-5xl font-bold tracking-tight">{fmt(total)}</span>
              <span className="text-lg font-medium">kg CO₂</span>
            </p>
            <div className="mt-5 flex justify-between text-xs text-white/80">
              <span>Target bulanan {MONTHLY_TARGET} kg</span><span className="font-semibold text-white">{pct}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/20">
              <div className="h-full rounded-full bg-leaf-300 transition-all duration-700" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-3 text-xs text-white/80">Sisa {fmt(Math.max(0, MONTHLY_TARGET - total))} kg sebelum mencapai target</p>
          </section>
        </header>

        <section className="mt-6">
          <div className="flex items-center justify-between px-5">
            <h2 className="text-lg font-semibold">Tips hemat energi</h2>
          </div>
          <ul className="no-scrollbar mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 ml-5 pb-1">
            {TIPS.map(({ title, text, tone, icon: Icon }) => (
              <li key={title} className={`flex h-36 w-40 shrink-0 snap-start flex-col justify-between rounded-2xl p-4 ${tone}`}>
                <Icon size={22} />
                <div><p className="text-sm font-semibold">{title}</p><p className="mt-0.5 text-xs opacity-75">{text}</p></div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-7 px-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Aktivitas terbaru</h2>
            {activities.length > 5 && (
              <button onClick={() => setShowAll(!showAll)} className="text-sm font-semibold text-leaf-600">
                {showAll ? 'Lebih sedikit' : 'Lihat semua'}
              </button>
            )}
          </div>
          <ul className="mt-2 divide-y divide-stone-100">
            {list.map((a) => {
              const Icon = a.icon
              return (
                <li key={a.id}>
                  <div role="button" tabIndex={0} onClick={() => onOpen(a)} onKeyDown={(e) => e.key === 'Enter' && onOpen(a)}
                    className="-mx-2 flex cursor-pointer items-center gap-3 rounded-xl px-2 py-3 hover:bg-stone-50">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-50 text-leaf-600"><Icon size={20} /></span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-semibold">{a.title}</p>
                      <p className="text-xs text-ink-faint">{a.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold tabular-nums">{fmt(a.kg)} kg</p>
                      <p className="text-[11px] text-ink-faint">CO₂</p>
                    </div>
                    <HeartButton liked={a.liked} onToggle={() => onLike(a.id)} />
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="mt-6 px-5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold">Riwayat mingguan</h2>
              <p className="text-xs text-ink-soft">Emisi 12% lebih rendah dari minggu lalu</p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-leaf-100 px-2.5 py-1 text-xs font-semibold text-leaf-700"><ArrowDown size={12} />12%</span>
          </div>
          <div className="mt-5 flex h-36 items-end justify-between gap-2">
            {WEEK.map((d, i) => (
              <div key={d.day} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div
                  title={`${d.kg} kg`}
                  className={`w-full max-w-7 origin-bottom animate-grow rounded-lg ${i === today ? 'bg-leaf-600' : 'bg-leaf-300'}`}
                  style={{ height: `${(d.kg / max) * 100}%`, animationDelay: `${i * 50}ms` }}
                />
                <span className={`text-[11px] ${i === today ? 'font-semibold text-leaf-700' : 'text-ink-faint'}`}>{d.day}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <button onClick={onAdd} aria-label="Tambah aktivitas"
        className="absolute bottom-24 right-5 z-30 grid h-14 w-14 place-items-center rounded-2xl bg-leaf-600 text-white shadow-[0_10px_24px_-8px_rgba(46,125,50,.8)] transition hover:bg-leaf-700 active:scale-95">
        <Plus size={28} />
      </button>
    </>
  )
}
