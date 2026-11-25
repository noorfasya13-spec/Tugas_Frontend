export default function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={`h-14 w-full rounded-2xl bg-leaf-600 text-base font-semibold text-white shadow-[0_6px_16px_-6px_rgba(46,125,50,.6)]
        transition duration-150 hover:bg-leaf-700 active:scale-[.97] active:bg-leaf-900 disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
