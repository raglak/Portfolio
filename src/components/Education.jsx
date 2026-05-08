import SectionWrapper from './SectionWrapper'
import { education, certifications } from '../data/content'

export default function Education() {
  return (
    <SectionWrapper id="education" index="04" label="Education">
      {/* Education entries */}
      <div className="space-y-10 mb-16">
        {education.map((entry, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-10 border-b border-bg-rule last:border-b-0"
          >
            <div>
              <h3 className="font-display text-xl md:text-2xl text-ink-primary font-normal">
                {entry.degree}
              </h3>
              <p className="text-ink-secondary text-base mt-1">
                {entry.institution}
              </p>
              <p className="text-ink-secondary text-sm mt-1">{entry.score}</p>
            </div>
            <span className="font-mono text-[13px] text-accent shrink-0">
              {entry.years}
            </span>
          </div>
        ))}
      </div>

      {/* Certifications sub-section */}
      <div>
        <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-ink-muted mb-8">
          Certifications
        </h3>
        <div className="space-y-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="pb-6 border-b border-bg-rule last:border-b-0"
            >
              <p className="text-ink-primary text-base font-sans">
                {cert.title}
              </p>
              <p className="text-ink-secondary text-[13px] font-sans mt-1">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
