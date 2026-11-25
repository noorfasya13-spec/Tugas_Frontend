import { Heart } from 'lucide-react'

export default function HeartButton({ liked, onToggle }) {
  return (
    <button
      aria-label={liked ? 'Hapus dari favorit' : 'Tandai favorit'}
      aria-pressed={liked}
      onClick={(e) => { e.stopPropagation(); onToggle() }}
      className="grid h-10 w-10 place-items-center rounded-full hover:bg-stone-100"
    >
      <Heart
        key={liked ? 'on' : 'off'}
        size={22}
        className={liked ? 'animate-beat fill-red-500 text-red-500' : 'text-stone-400'}
      />
    </button>
  )
}
