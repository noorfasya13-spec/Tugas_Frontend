import { useState } from 'react'
import { CATEGORIES } from '../data'
import PrimaryButton from './PrimaryButton'
import Overlay from './Overlay'

export default function AddActivitySheet({ onClose, onSave }) {
  const [cat, setCat] = useState('transportasi')
  const [amount, setAmount] = useState('')
  const c = CATEGORIES[cat]
  const value = parseFloat(amount.replace(',', '.'))
  const valid = value > 0

  return (
    <Overlay onClose={onClose}>
      <div className="pb-safe animate-sheet-up rounded-t-3xl bg-white px-6 pb-6 pt-3" role="dialog" aria-label="Tambah aktivitas">
        <button onClick={onClose} aria-label="Tutup" className="mx-auto mb-4 block h-1.5 w-12 rounded-full bg-stone-300" />
        <h2 className="text-2xl font-semibold">Tambah Aktivitas</h2>
        <p className="mt-1 text-sm text-ink-soft">Pilih kategori aktivitasmu</p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {Object.entries(CATEGORIES).map(([key, { label, icon: Icon }]) => (
            <button
              key={key}
              onClick={() => setCat(key)}
              aria-pressed={cat === key}
              className={`flex h-12 items-center justify-center gap-2 rounded-xl border text-sm font-medium transition
                ${cat === key ? 'border-leaf-600 bg-leaf-50 text-leaf-700' : 'border-stone-200 text-ink-soft hover:border-stone-300'}`}
            >
              <Icon size={18} /> {label}
            </button>
          ))}
        </div>

        <label className="mt-6 block text-sm font-semibold" htmlFor="jumlah">Jumlah</label>
        <div className="mt-2 flex h-14 items-center rounded-2xl border border-stone-200 px-4 focus-within:border-leaf-600">
          <input
            id="jumlah"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9.,]/g, ''))}
            placeholder="0"
            className="w-full bg-transparent text-xl font-semibold outline-none placeholder:text-stone-300"
          />
          <span className="text-sm text-ink-faint">{c.unit}</span>
        </div>
        <p className="mt-2 h-5 text-xs text-ink-soft">
          {valid && <>Perkiraan emisi: <b className="text-leaf-700">{(value * c.factor).toFixed(1)} kg CO₂</b></>}
        </p>

        <PrimaryButton className="mt-3" disabled={!valid} onClick={() => onSave({ cat, amount: value })}>
          Simpan
        </PrimaryButton>
      </div>
    </Overlay>
  )
}
