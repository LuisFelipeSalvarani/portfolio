import { Apresentation } from './components/apresantation'
import { Header } from './components/header'
import { KnowMe } from './components/know-me'
import { MySkills } from './components/my-skills'
import { SocialMedia } from './components/social-medias'

export function App() {
  return (
    <>
      <Header />

      <SocialMedia />

      <main className="flex flex-col">
        <Apresentation />

        <div className="flex min-h-screen flex-col gap-10 bg-zinc-50 py-10 text-zinc-900">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="flex flex-col items-center gap-4 font-semibold text-4xl uppercase">
              Sobre mim
              <span className="h-1 w-6 rounded-lg bg-zinc-900" />
            </h2>

            <p className="text-zinc-600">
              Aqui você encontrará mais informações sobre mim, o que eu faço e
              minhas habilidades atuais, principalmente em termos de programação
              e tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-2">
            <KnowMe />

            <MySkills />
          </div>
        </div>

        <div className="h-screen" />
      </main>
    </>
  )
}
