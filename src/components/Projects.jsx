import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { projects } from '../data/content'

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative bg-bg-secondary border border-[#2A2A2A] rounded-card p-8 md:p-10 hover:border-l-accent hover:border-l-2 transition-colors duration-200"
    >
      {/* Top row — index & year */}
      <div className="flex items-start justify-between mb-6">
        <span className="font-display text-display-lg text-ink-muted/30 leading-none select-none">
          {project.index}
        </span>
        <span className="font-mono text-[13px] text-ink-secondary">
          {project.year}
        </span>
      </div>

      {/* Title & subtitle */}
      <h3 className="font-display text-[28px] md:text-[32px] text-ink-primary font-normal leading-tight mb-1">
        {project.title}
      </h3>
      <p className="text-lg text-ink-secondary font-sans mb-6">
        {project.subtitle}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[13px] text-ink-secondary border border-[#2A2A2A] px-2.5 py-1 rounded-editorial"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-bg-rule mb-6" />

      {/* Metric callout */}
      <div className="mb-6">
        <span className="font-display text-[48px] md:text-[56px] text-accent leading-none">
          {project.metrics.value}
        </span>
        <span className="block font-sans text-sm text-ink-secondary mt-1">
          {project.metrics.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-ink-secondary text-base leading-[1.75] mb-6">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2 mb-8">
        {project.highlights.map((h, i) => (
          <li
            key={i}
            className="text-ink-secondary text-sm leading-relaxed flex gap-2"
          >
            <span className="text-accent mt-0.5 shrink-0">—</span>
            {h}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-sans text-ink-secondary border border-[#333] px-5 py-2.5 rounded-editorial hover:border-ink-secondary hover:text-ink-primary transition-all duration-200"
      >
        View Project
        <ExternalLink size={14} strokeWidth={1.5} />
      </a>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" index="03" label="Projects">
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
