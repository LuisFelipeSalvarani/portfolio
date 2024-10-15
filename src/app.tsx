import { Footer } from './components/Footer'
import { About } from './components/about'
import { ButtonToTop } from './components/button-to-top'
import { Contact } from './components/contact'
import { Header } from './components/header'
import { Presentation } from './components/presantation'
import { Projects } from './components/projects'
import { SocialMedia } from './components/social-medias'

export function App() {
  return (
    <>
      <Header />

      <ButtonToTop />

      <SocialMedia />

      <main>
        <Presentation />

        <About />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  )
}
