export default function PageIndicator({ total, active }) {
  return (
    <div className="flex justify-center gap-1.5" aria-hidden>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-leaf-600' : 'w-2 bg-leaf-300'}`} />
      ))}
    </div>
  )
}
