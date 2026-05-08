import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 md:px-16 lg:px-[120px] transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-md border-b border-bg-rule'
            : 'bg-transparent'
        }`}
      >
        {/* Monogram */}
        <Link
          to="hero"
          smooth
          duration={600}
          className="font-display text-xl text-accent cursor-pointer tracking-wide select-none"
        >
          LK
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={600}
              offset={-56}
              activeClass="nav-active"
              className="relative text-sm font-sans text-ink-secondary hover:text-ink-primary cursor-pointer transition-colors duration-150 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent transition-all duration-150 ease-out group-hover:w-full" />
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Lakshya_Khandelwal_Resume.pdf"
            className="relative text-sm font-sans text-accent hover:text-ink-primary cursor-pointer transition-colors duration-150 group border border-accent/40 px-3 py-1 rounded hover:border-accent"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="sm:hidden text-ink-primary p-1"
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-bg-primary/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-bg-secondary border-l border-bg-rule flex flex-col"
            >
              <div className="flex items-center justify-between h-14 px-6">
                <span className="font-display text-xl text-accent">LK</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-ink-primary p-1"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex flex-col gap-6 px-6 pt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    spy
                    smooth
                    duration={600}
                    offset={-56}
                    className="font-display text-[28px] text-ink-primary cursor-pointer hover:text-accent transition-colors duration-150"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Lakshya_Khandelwal_Resume.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-[28px] text-accent hover:text-ink-primary transition-colors duration-150"
                >
                  Resume ↗
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
