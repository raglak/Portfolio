import { Link } from 'react-scroll'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { contact, navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-bg-rule py-12 bg-bg-primary">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[120px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Monogram */}
          <span className="font-display text-2xl text-accent select-none">
            LK
          </span>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-56}
                className="text-sm font-sans text-ink-muted hover:text-ink-secondary cursor-pointer transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-ink-secondary transition-colors duration-150"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-ink-secondary transition-colors duration-150"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-ink-muted hover:text-ink-secondary transition-colors duration-150"
              aria-label="Email"
            >
              <Mail size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10">
          <p className="text-ink-muted text-[13px] font-sans">
            © 2026 Lakshya Khandelwal. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
