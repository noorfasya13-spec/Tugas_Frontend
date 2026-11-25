/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        leaf: {
          50: '#F1F8F1',
          100: '#E3F1E4',
          200: '#C8E6C9',
          300: '#A5D6A7',
          500: '#43A047',
          600: '#2E7D32',
          700: '#1B5E20',
          900: '#12301A',
        },
        ink: { DEFAULT: '#17261B', soft: '#5B6B5F', faint: '#94A398' },
        canvas: '#F6F8F5',
      },
      keyframes: {
        'slide-in': { from: { transform: 'translateX(24px)', opacity: 0 }, to: { transform: 'none', opacity: 1 } },
        'slide-back': { from: { transform: 'translateX(-24px)', opacity: 0 }, to: { transform: 'none', opacity: 1 } },
        fade: { from: { opacity: 0 }, to: { opacity: 1 } },
        'sheet-up': { from: { transform: 'translateY(100%)' }, to: { transform: 'translateY(0)' } },
        pop: { '0%': { transform: 'scale(.9)', opacity: 0 }, '100%': { transform: 'scale(1)', opacity: 1 } },
        beat: { '0%,100%': { transform: 'scale(1)' }, '40%': { transform: 'scale(1.3)' } },
        grow: { from: { transform: 'scaleY(0)' }, to: { transform: 'scaleY(1)' } },
      },
      animation: {
        'slide-in': 'slide-in .3s ease-out both',
        'slide-back': 'slide-back .3s ease-out both',
        fade: 'fade .35s ease-in-out both',
        'sheet-up': 'sheet-up .3s cubic-bezier(.2,.8,.2,1) both',
        pop: 'pop .25s ease-out both',
        beat: 'beat .4s ease-out',
        grow: 'grow .6s cubic-bezier(.2,.8,.2,1) both',
      },
    },
  },
  plugins: [],
}
