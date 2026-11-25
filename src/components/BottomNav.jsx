import { Home, BarChart3, User } from 'lucide-react'

const TABS = [
  { id: 'home', label: 'Beranda', icon: Home },
  { id: 'stats', label: 'Statistik', icon: BarChart3 },
  { id: 'profile', label: 'Profil', icon: User },
]

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="pb-safe absolute inset-x-0 bottom-0 z-20 border-t border-stone-200 bg-white/95 backdrop-blur">
      <ul className="flex">
        {TABS.map(({ id, label, icon: Icon }) => {
          const on = active === id
          return (
            <li key={id} className="flex-1">
              <button
                onClick={() => onChange(id)}
                aria-current={on ? 'page' : undefined}
                className={`relative flex h-16 w-full flex-col items-center justify-center gap-1 text-xs font-medium transition-colors ${on ? 'text-leaf-600' : 'text-ink-faint hover:text-ink-soft'}`}
              >
                <span className={`absolute top-0 h-1 w-10 rounded-b-full bg-leaf-600 transition-transform duration-300 ${on ? 'scale-x-100' : 'scale-x-0'}`} />
                <Icon size={22} strokeWidth={on ? 2.4 : 1.8} />
                {label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
