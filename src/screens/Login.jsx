import { useState } from 'react'
import { Leaf, Mail, Lock } from 'lucide-react'
import PrimaryButton from '../components/PrimaryButton'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Masukkan email yang valid, contoh: nama@email.com')
    if (pass.length < 6) return setError('Kata sandi minimal 6 karakter.')
    setError('')
    onLogin()
  }

  const field = 'flex h-14 items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 focus-within:border-leaf-600'

  return (
    <form onSubmit={submit} className="pt-safe flex h-full flex-col overflow-y-auto bg-white px-6 pb-8" noValidate>
      <div className="mt-8 flex items-center gap-2.5">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf-100"><Leaf className="text-leaf-600" size={22} /></span>
        <span className="text-xl font-bold text-leaf-700">EcoTrack</span>
      </div>

      <h1 className="mt-14 text-[32px] font-semibold">Masuk</h1>
      <p className="mt-2 text-[15px] text-ink-soft">Selamat datang kembali. Lanjutkan perjalanan hijaumu.</p>

      <label htmlFor="email" className="mt-8 text-sm font-semibold">Email</label>
      <div className={`${field} mt-2`}>
        <Mail size={18} className="text-ink-faint" />
        <input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@email.com" className="w-full bg-transparent outline-none placeholder:text-stone-400" />
      </div>

      <label htmlFor="pass" className="mt-5 text-sm font-semibold">Kata sandi</label>
      <div className={`${field} mt-2`}>
        <Lock size={18} className="text-ink-faint" />
        <input id="pass" type={show ? 'text' : 'password'} autoComplete="current-password" value={pass}
          onChange={(e) => setPass(e.target.value)} placeholder="Masukkan kata sandi"
          className="w-full bg-transparent outline-none placeholder:text-stone-400" />
        <button type="button" onClick={() => setShow(!show)} className="text-xs font-semibold text-leaf-600">
          {show ? 'Sembunyikan' : 'Tampilkan'}
        </button>
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <p className="text-xs text-red-600" role="alert">{error}</p>
        <button type="button" className="shrink-0 text-xs font-semibold text-leaf-600">Lupa kata sandi?</button>
      </div>

      <PrimaryButton type="submit" className="mt-8">Masuk</PrimaryButton>

      <p className="mt-auto pt-8 text-center text-sm text-ink-soft">
        Belum punya akun? <button type="button" className="font-semibold text-leaf-600">Daftar</button>
      </p>
    </form>
  )
}
