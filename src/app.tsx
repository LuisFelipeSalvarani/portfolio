import { Footer } from './components/Footer'
import { About } from './components/about'
import { Apresentation } from './components/apresantation'
import { Contact } from './components/contact'
import { Header } from './components/header'
import { Projects } from './components/projects'
import { SocialMedia } from './components/social-medias'

export function App() {
  return (
    <>
      <Header />

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
