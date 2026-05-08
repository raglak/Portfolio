import SectionWrapper from './SectionWrapper'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" index="05" label="Achievements">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {achievements.map((item, i) => (
          <div key={i} className="text-center md:text-left">
            <span className="font-display text-[48px] md:text-[56px] lg:text-[64px] text-accent leading-none block">
              {item.value}
            </span>
            <p className="text-ink-primary text-lg font-sans mt-3">
              {item.label}
            </p>
            <p className="text-ink-secondary text-sm font-sans mt-1">
              {item.context}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
