import { Footer } from './components/Footer'
import { About } from './components/about'
import { Apresentation } from './components/apresantation'
import { ButtonToTop } from './components/button-to-top'
import { Contact } from './components/contact'
import { Header } from './components/header'
import { Projects } from './components/projects'
import { SocialMedia } from './components/social-medias'

export function App() {
  return (
    <>
      <Header />

      <ButtonToTop />

      <SocialMedia />

      <main>
        <Apresentation />

        <About />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  )
}
