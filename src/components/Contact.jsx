import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import SectionWrapper from './SectionWrapper'
import { contact } from '../data/content'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper
      id="contact"
      index="06"
      label="Contact"
      className="bg-bg-secondary"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — Contact info */}
        <div>
          <h2 className="font-display text-display-lg text-ink-primary mb-8">
            Let's connect —
          </h2>
          <p className="text-ink-secondary text-base leading-[1.75] mb-10">
            I'm always open to discussing data engineering projects, Python
            development opportunities, or just connecting over interesting tech
            challenges.
          </p>

          <div className="space-y-5">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-ink-secondary hover:text-accent transition-colors duration-150"
            >
              <Mail size={16} strokeWidth={1.5} />
              <span className="text-sm font-sans">{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-3 text-ink-secondary hover:text-accent transition-colors duration-150"
            >
              <Phone size={16} strokeWidth={1.5} />
              <span className="text-sm font-sans">{contact.phone}</span>
            </a>
            <div className="flex items-center gap-3 text-ink-secondary">
              <MapPin size={16} strokeWidth={1.5} />
              <span className="text-sm font-sans">{contact.location}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-link hover:text-ink-primary transition-colors duration-150"
            >
              <LinkedinIcon size={16} />
              <span className="text-sm">LinkedIn ↗</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-link hover:text-ink-primary transition-colors duration-150"
            >
              <GithubIcon size={16} />
              <span className="text-sm">GitHub ↗</span>
            </a>
          </div>
        </div>

        {/* Right — Contact form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="from_name"
              className="block text-[13px] font-mono uppercase tracking-[0.08em] text-ink-muted mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              placeholder="Your name"
              className="w-full bg-transparent border-b border-bg-rule text-ink-primary text-base font-sans py-3 px-0 outline-none placeholder:text-ink-muted focus:border-accent transition-colors duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="from_email"
              className="block text-[13px] font-mono uppercase tracking-[0.08em] text-ink-muted mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              placeholder="Your email"
              className="w-full bg-transparent border-b border-bg-rule text-ink-primary text-base font-sans py-3 px-0 outline-none placeholder:text-ink-muted focus:border-accent transition-colors duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-[13px] font-mono uppercase tracking-[0.08em] text-ink-muted mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Your message"
              className="w-full bg-transparent border-b border-bg-rule text-ink-primary text-base font-sans py-3 px-0 outline-none placeholder:text-ink-muted focus:border-accent transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans tracking-wide rounded-editorial border border-ink-primary text-ink-primary bg-transparent hover:bg-ink-primary hover:text-bg-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending'
              ? 'Sending...'
              : status === 'sent'
                ? 'Sent ✓'
                : 'Send Message →'}
          </button>

          {status === 'error' && (
            <p className="text-danger text-sm mt-2">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  )
}
