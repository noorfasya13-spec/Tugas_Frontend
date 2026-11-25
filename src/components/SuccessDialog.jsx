import { useEffect } from 'react'
import { Check } from 'lucide-react'
import PrimaryButton from './PrimaryButton'
import Overlay from './Overlay'

export default function SuccessDialog({ onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <Overlay onClose={onClose} align="center">
      <div className="animate-pop rounded-3xl bg-white p-6 text-center" role="alertdialog" aria-label="Aktivitas tersimpan">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-leaf-100 ring-8 ring-leaf-50">
          <Check className="text-leaf-600" size={30} strokeWidth={2.6} />
        </div>
        <h2 className="mt-5 text-xl font-semibold">Aktivitas berhasil disimpan!</h2>
        <p className="mt-2 text-sm text-ink-soft">Jejak karbonmu sudah diperbarui.</p>
        <PrimaryButton className="mt-6 h-12" onClick={onClose}>Oke</PrimaryButton>
      </div>
    </Overlay>
  )
}
