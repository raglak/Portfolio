import { Helmet } from 'react-helmet-async'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Lakshya Khandelwal | Python Developer &amp; Data Engineer</title>
        <meta
          name="description"
          content="Portfolio of Lakshya Khandelwal — Python Developer, Data Engineer, and CS student building scalable data pipelines and backend systems."
        />
        <meta
          property="og:title"
          content="Lakshya Khandelwal | Python Developer & Data Engineer"
        />
        <meta
          property="og:description"
          content="Portfolio of Lakshya Khandelwal — building scalable data pipelines and backend systems."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <div className="bg-bg-primary text-ink-primary font-sans min-h-screen">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
