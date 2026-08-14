import { useState } from 'react'
import IntroMailbox from './components/IntroMailbox'
import CanvasErrorBoundary from './components/CanvasErrorBoundary'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Sound from './sections/Sound'
import Contact from './sections/Contact'

export default function App() {
  const [opened, setOpened] = useState(false)

  return (
    <CanvasErrorBoundary
      fallback={
        <div className="min-h-svh flex items-center justify-center text-bone p-8 text-center">
          Something broke rendering the page — check the browser console.
        </div>
      }
    >
      <div className="grain-layer" />
      <IntroMailbox onOpen={() => setOpened(true)} />

      {opened && (
        <>
          <Nav />
          <main>
            <Hero />
            <Projects />
            <Sound />
            <Contact />
          </main>
        </>
      )}
    </CanvasErrorBoundary>
  )
}
