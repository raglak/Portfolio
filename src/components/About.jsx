import SectionWrapper from './SectionWrapper'
import { about } from '../data/content'

export default function About() {
  return (
    <SectionWrapper id="about" index="01" label="About">
      <div className="relative pl-6 border-l-2 border-accent/40">
        <div className="lg:columns-2 gap-12">
          <p className="text-ink-primary text-base leading-[1.75] font-sans">
            {about.text}
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
