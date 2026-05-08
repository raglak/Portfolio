import SectionWrapper from './SectionWrapper'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <SectionWrapper id="skills" index="02" label="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-ink-muted mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[13px] text-ink-secondary border border-[#2A2A2A] px-3 py-1.5 rounded-editorial bg-transparent hover:border-accent hover:text-ink-primary transition-all duration-150 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
