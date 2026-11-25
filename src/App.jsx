import { useCallback, useMemo, useState } from 'react'
import { Leaf } from 'lucide-react'
import Splash from './screens/Splash'
import Onboarding from './screens/Onboarding'
import Login from './screens/Login'
import Home from './screens/Home'
import Detail from './screens/Detail'
import Stats from './screens/Stats'
import Profile from './screens/Profile'
import BottomNav from './components/BottomNav'
import AddActivitySheet from './components/AddActivitySheet'
import SuccessDialog from './components/SuccessDialog'
import { CATEGORIES, INITIAL_ACTIVITIES, MONTHLY_BASE } from './data'

const TAB_SCREENS = ['home', 'stats', 'profile']

export default function App() {
  const [screen, setScreen] = useState('splash')
  const [motion, setMotion] = useState('animate-fade')
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES)
  const [selected, setSelected] = useState(null)
  const [overlay, setOverlay] = useState(null) // 'sheet' | 'success' | null

  const total = useMemo(() => MONTHLY_BASE + activities.reduce((s, a) => s + a.kg, 0), [activities])

  const go = useCallback((next, anim = 'animate-fade') => { setMotion(anim); setScreen(next) }, [])

  const like = (id) => setActivities((list) => list.map((a) => (a.id === id ? { ...a, liked: !a.liked } : a)))

  const save = ({ cat, amount }) => {
    const c = CATEGORIES[cat]
    const kg = Math.round(amount * c.factor * 10) / 10
    setActivities((list) => [
      { id: Date.now(), title: c.label, time: 'Baru saja', kg, category: cat, icon: c.icon, liked: false,
        note: `${amount} ${c.unit} aktivitas ${c.label.toLowerCase()} yang kamu catat.` },
      ...list,
    ])
    setOverlay('success')
  }

  const closeSuccess = useCallback(() => setOverlay(null), [])

  let content
  switch (screen) {
    case 'splash': content = <Splash onDone={() => go('onboarding')} />; break
    case 'onboarding': content = <Onboarding onFinish={() => go('login', 'animate-slide-in')} />; break
    case 'login': content = <Login onLogin={() => go('home')} />; break
    case 'home':
      content = (
        <Home total={total} activities={activities} onLike={like} onAdd={() => setOverlay('sheet')}
          onProfile={() => go('profile')} onOpen={(a) => { setSelected(a); go('detail', 'animate-slide-in') }} />
      ); break
    case 'detail': content = <Detail activity={selected} onBack={() => go('home', 'animate-slide-back')} />; break
    case 'stats': content = <Stats activities={activities} />; break
    case 'profile': content = <Profile onLogout={() => go('login')} />; break
    default: content = null
  }

  return (
    <div className="flex min-h-full items-center justify-center md:gap-16 md:p-8">
      <aside className="hidden max-w-xs lg:block">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf-600 text-white"><Leaf size={24} /></span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-leaf-900">EcoTrack</h1>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Catat aktivitas harian, lihat jejak karbonmu, dan temukan cara sederhana untuk menguranginya.
        </p>
        <p className="mt-6 text-sm text-ink-faint">Paling nyaman dibuka di ponsel. Di desktop, aplikasi tampil dalam ukuran layar ponsel.</p>
      </aside>

      <main
        className="relative h-[100dvh] w-full overflow-hidden bg-canvas
          md:h-[min(852px,calc(100dvh-4rem))] md:w-[393px] md:rounded-[44px] md:border-[10px] md:border-leaf-900 md:shadow-2xl"
      >
        <div key={screen} className={`absolute inset-0 ${motion}`}>{content}</div>

        {TAB_SCREENS.includes(screen) && <BottomNav active={screen} onChange={(id) => go(id)} />}

        {overlay === 'sheet' && <AddActivitySheet onClose={() => setOverlay(null)} onSave={save} />}
        {overlay === 'success' && <SuccessDialog onClose={closeSuccess} />}
      </main>
    </div>
  )
}
