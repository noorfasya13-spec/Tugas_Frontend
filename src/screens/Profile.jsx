import { useState } from 'react'
import { Bell, Moon, Shield, HelpCircle, ChevronRight, LogOut } from 'lucide-react'
import Toggle from '../components/Toggle'

export default function Profile({ onLogout }) {
  const [notif, setNotif] = useState(true)
  const [dark, setDark] = useState(false)

  const Row = ({ icon: Icon, label, children, onClick }) => (
    <li>
      <div onClick={onClick} className={`flex items-center gap-3 px-4 py-3.5 ${onClick ? 'cursor-pointer hover:bg-stone-50' : ''}`}>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-leaf-50 text-leaf-600"><Icon size={18} /></span>
        <span className="flex-1 text-[15px] font-medium">{label}</span>
        {children}
      </div>
    </li>
  )

  return (
    <div className="pt-safe absolute inset-0 overflow-y-auto no-scrollbar bg-canvas pb-28">
      <div className="px-5 pt-6">
        <h1 className="text-2xl font-semibold">Profil</h1>

        <section className="mt-6 flex flex-col items-center text-center">
          <span className="grid h-24 w-24 place-items-center rounded-full bg-leaf-600 text-3xl font-semibold text-white ring-8 ring-leaf-100">F</span>
          <h2 className="mt-4 text-xl font-semibold">Fadil</h2>
          <p className="text-sm text-ink-faint">fadil@email.com</p>
          <span className="mt-3 rounded-full bg-leaf-100 px-3 py-1 text-xs font-semibold text-leaf-700">Pejuang Hijau · Level 4</span>
        </section>

        <h3 className="mt-8 px-1 text-sm font-semibold text-ink-soft">Preferensi</h3>
        <ul className="mt-2 divide-y divide-stone-100 overflow-hidden rounded-2xl bg-white">
          <Row icon={Bell} label="Notifikasi"><Toggle checked={notif} onChange={setNotif} label="Notifikasi" /></Row>
          <Row icon={Moon} label="Mode gelap"><Toggle checked={dark} onChange={setDark} label="Mode gelap" /></Row>
        </ul>

        <h3 className="mt-6 px-1 text-sm font-semibold text-ink-soft">Lainnya</h3>
        <ul className="mt-2 divide-y divide-stone-100 overflow-hidden rounded-2xl bg-white">
          <Row icon={Shield} label="Privasi & keamanan" onClick={() => {}}><ChevronRight size={18} className="text-ink-faint" /></Row>
          <Row icon={HelpCircle} label="Pusat bantuan" onClick={() => {}}><ChevronRight size={18} className="text-ink-faint" /></Row>
        </ul>

        <button onClick={onLogout}
          className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 font-semibold text-red-600 transition hover:bg-red-100 active:scale-[.98]">
          <LogOut size={18} /> Keluar
        </button>
      </div>
    </div>
  )
}
