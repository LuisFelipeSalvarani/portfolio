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
      </main>
    </>
  )
}
