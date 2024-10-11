import { About } from './components/about'
import { Apresentation } from './components/apresantation'
import { Header } from './components/header'
import { SocialMedia } from './components/social-medias'

export function App() {
  return (
    <>
      <Header />

      <SocialMedia />

      <main>
        <Apresentation />

        <div className="xl:mx-40 2xl:mx-72">
          <About />
        </div>
      </main>
    </>
  )
}
