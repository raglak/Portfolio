import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { hero, contact } from '../data/content'
import Button from './Button'

export default function Hero() {
  const shouldReduce = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.12,
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[120px] w-full pt-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          {/* Left — Name */}
          <div className="lg:col-span-8">
            <motion.h1
              variants={fadeUp}
              className="font-display font-light text-display-xl text-ink-primary leading-[0.92] tracking-tight"
            >
              {hero.firstName}
              <br />
              {hero.lastName}
            </motion.h1>
          </div>

          {/* Right — Role */}
          <div className="lg:col-span-4 lg:text-right">
            <motion.p
              variants={fadeUp}
              className="font-sans text-lg md:text-xl text-ink-secondary"
            >
              {hero.role}
              <br />
              {hero.roleSecond}
            </motion.p>
          </div>
        </motion.div>

        {/* Subcopy */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-xl text-ink-secondary text-base leading-relaxed"
        >
          {hero.subcopy}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="projects" smooth duration={600} offset={-56}>
            <Button variant="outline" icon="↓">
              {hero.ctaPrimary}
            </Button>
          </Link>
          <Button
            variant="outline"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            icon="↗"
          >
            {hero.ctaSecondary}
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="mt-10 flex items-center gap-5"
        >
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-secondary hover:text-ink-primary transition-colors duration-150"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-secondary hover:text-ink-primary transition-colors duration-150"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-ink-secondary hover:text-ink-primary transition-colors duration-150"
            aria-label="Email"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-bg-rule relative overflow-hidden">
          <div className="scroll-indicator-dot w-[3px] h-[3px] rounded-full bg-accent absolute left-1/2 -translate-x-1/2 top-0" />
        </div>
      </div>
    </section>
  )
}
