import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

export default function SectionWrapper({ id, index, label, children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduce = useReducedMotion()

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduce ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`py-24 ${className}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[120px]">
        {index && label && (
          <div className="mb-16">
            <span className="font-mono text-[13px] uppercase tracking-[0.08em]">
              <span className="text-accent">{index}</span>
              <span className="text-ink-muted"> — {label}</span>
            </span>
          </div>
        )}
        {children}
      </div>
    </motion.section>
  )
}
