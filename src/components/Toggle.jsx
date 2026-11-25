export default function Toggle({ checked, onChange, label }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-8 w-14 shrink-0 rounded-full transition-colors duration-300 ${checked ? 'bg-leaf-600' : 'bg-stone-300'}`}
    >
      <span
        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ease-[cubic-bezier(.3,1.4,.5,1)] ${checked ? 'translate-x-6' : ''}`}
      />
    </button>
  )
}
