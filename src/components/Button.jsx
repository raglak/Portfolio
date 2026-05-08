export default function Button({
  variant = 'outline',
  href,
  onClick,
  children,
  icon,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 text-sm font-sans tracking-wide rounded-editorial transition-all duration-200 ease-in-out border cursor-pointer'

  const variants = {
    outline:
      'border-ink-primary text-ink-primary bg-transparent hover:bg-ink-primary hover:text-bg-primary',
    ghost:
      'border-[#333] text-ink-secondary bg-transparent hover:border-ink-secondary hover:text-ink-primary',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {icon && <span className="text-base">{icon}</span>}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
      {icon && <span className="text-base">{icon}</span>}
    </button>
  )
}
