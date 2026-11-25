export default function Overlay({ children, onClose, align = 'bottom' }) {
  return (
    <div
      className={`absolute inset-0 z-40 flex animate-fade bg-black/40 ${align === 'bottom' ? 'items-end' : 'items-center justify-center p-8'}`}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className={align === 'bottom' ? 'w-full' : 'w-full max-w-xs'}>
        {children}
      </div>
    </div>
  )
}
