import { KnowMe } from './know-me'
import { MySkills } from './my-skills'
import { SectionTitle } from './section-title'

export function About() {
  return (
    <div
      className="flex min-h-screen flex-col gap-10 bg-white py-10 text-zinc-900"
      id="about"
    >
      <div className="space-y-8 xl:mx-40 2xl:mx-72">
        <SectionTitle
          title="Sobre mim"
          description="O que eu faço e minhas
          habilidades atuais, principalmente em termos de programação e
          tecnologia."
        />

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-0">
          <KnowMe />

          <MySkills />
        </div>
      </div>
    </div>
  )
}
