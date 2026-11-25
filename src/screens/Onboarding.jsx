import { useRef, useState } from 'react'
import { Globe2, Smartphone, Building2, Bike, Leaf } from 'lucide-react'
import PrimaryButton from '../components/PrimaryButton'
import PageIndicator from '../components/PageIndicator'

const SLIDES = [
  { title: 'Kenali Jejak Karbonmu', text: 'Pahami dampak aktivitas harianmu terhadap bumi dengan cara yang sederhana.', art: [Globe2, Leaf] },
  { title: 'Pantau Setiap Hari', text: 'Catat aktivitas dan lihat emisimu turun dari minggu ke minggu.', art: [Smartphone, Leaf] },
  { title: 'Mulai Perubahan Baik', text: 'Dapatkan tips ramah lingkungan yang mudah kamu terapkan.', art: [Building2, Bike] },
]

function Art({ icons: [Main, Small] }) {
  return (
    <div className="relative mx-auto grid h-60 w-60 place-items-center">
      <div className="absolute inset-0 rounded-full bg-leaf-100" />
      <div className="absolute inset-6 rounded-full border border-leaf-200" />
      <div className="relative grid h-32 w-32 place-items-center rounded-full bg-leaf-300">
        <Main size={64} className="text-leaf-700" strokeWidth={1.6} />
      </div>
      <div className="absolute bottom-6 right-4 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-lg">
        <Small size={26} className="text-leaf-600" />
      </div>
    </div>
  )
}

export default function Onboarding({ onFinish }) {
  const [i, setI] = useState(0)
  const startX = useRef(null)
  const last = i === SLIDES.length - 1
  const go = (n) => setI(Math.max(0, Math.min(SLIDES.length - 1, n)))

  return (
    <div
      className="pt-safe flex h-full flex-col bg-white px-6 pb-8"
      onPointerDown={(e) => (startX.current = e.clientX)}
      onPointerUp={(e) => {
        if (startX.current === null) return
        const dx = e.clientX - startX.current
        if (dx < -50) last ? onFinish() : go(i + 1)
        if (dx > 50) go(i - 1)
        startX.current = null
      }}
    >
      <div className="flex h-14 items-center justify-end">
        {!last && <button onClick={onFinish} className="px-2 py-1 text-sm font-semibold text-leaf-600">Lewati</button>}
      </div>

      <div key={i} className="flex flex-1 animate-slide-in flex-col justify-center select-none">
        <Art icons={SLIDES[i].art} />
        <p className="mt-10 text-center text-xs font-semibold text-leaf-600">Langkah {i + 1} dari {SLIDES.length}</p>
        <h1 className="mt-2 text-center text-[26px] font-semibold leading-tight">{SLIDES[i].title}</h1>
        <p className="mx-auto mt-3 max-w-[30ch] text-center text-[15px] leading-relaxed text-ink-soft">{SLIDES[i].text}</p>
      </div>

      <PageIndicator total={SLIDES.length} active={i} />
      <PrimaryButton className="mt-6" onClick={() => (last ? onFinish() : go(i + 1))}>
        {last ? 'Mulai Sekarang' : 'Lanjut'}
      </PrimaryButton>
    </div>
  )
}
