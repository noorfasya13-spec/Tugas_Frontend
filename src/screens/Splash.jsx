import { useEffect } from 'react'
import { Leaf } from 'lucide-react'

export default function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1600)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <button onClick={onDone} className="flex h-full w-full flex-col items-center justify-center bg-leaf-600 text-white" aria-label="Mulai">
      <div className="grid h-20 w-20 animate-pop place-items-center rounded-3xl bg-white/15">
        <Leaf size={38} />
      </div>
      <h1 className="mt-5 animate-fade text-3xl font-bold tracking-tight">EcoTrack</h1>
      <p className="absolute bottom-12 text-sm text-white/70">Langkah kecil, dampak besar</p>
    </button>
  )
}
