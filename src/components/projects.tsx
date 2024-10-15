import Agency from '../assets/agency.png'
import Amazon from '../assets/amazon.png'
import Electrum from '../assets/electrum.png'
import Formulario from '../assets/formulario.png'
import Spotify from '../assets/spotify.png'
import * as ProjectItem from './project-item'
import { SectionTitle } from './section-title'

export function Projects() {
  return (
    <div
      className="flex min-h-screen flex-col gap-10 bg-zinc-100 py-10 text-zinc-900"
      id="projects"
    >
      <div className="xl:mx-40 2xl:mx-72">
        <SectionTitle
          title="Projetos"
          description="Aqui você encontrará alguns dos projetos pessoais e projetos desenvolvidos para aprendizado."
        />

        <ProjectItem.Root>
          <ProjectItem.Image src={Amazon} />

          <ProjectItem.Info>
            <ProjectItem.Header title="Clone da amazon" />

            <ProjectItem.Description>
              Este projeto é um clone simplificado da página inicial da Amazon,
              desenvolvido durante o curso de TailwindCSS da Hora de Codar.
              Utilizando HTML e TailwindCSS, o layout foi construído de forma
              responsiva, com foco em uma experiência visual moderna e ágil. O
              projeto simula a interface de navegação da Amazon, incluindo
              seções de produtos, menus de navegação e elementos promocionais. O
              objetivo é aplicar os conceitos aprendidos de estilização com
              Tailwind, praticando a construção de páginas reais e responsivas.
            </ProjectItem.Description>

            <ProjectItem.Footer>
              <ProjectItem.Button
                href="https://vercel.live/link/amazon-clone-twcss.vercel.app?via=deployment-domains-list&p=1"
                label="Ver projeto"
              />

              <ProjectItem.Button
                href="https://github.com/LuisFelipeSalvarani/amazon_clone_twcss"
                label="Github"
              />
            </ProjectItem.Footer>
          </ProjectItem.Info>
        </ProjectItem.Root>

        <ProjectItem.Root>
          <ProjectItem.Image src={Spotify} />

          <ProjectItem.Info>
            <ProjectItem.Header title="Clone do spotify" />

            <ProjectItem.Description>
              Este projeto é um clone simplificado da página inicial do Spotify,
              desenvolvido durante o curso de TailwindCSS da Hora de Codar.
              Utilizando HTML e TailwindCSS, o layout foi construído de forma
              responsiva, com foco em uma experiência visual moderna e ágil. O
              projeto simula a interface de apresentação do Spotify, incluindo
              menus de navegação e o banner de apresentação. O objetivo é
              aplicar os conceitos aprendidos de estilização com Tailwind,
              praticando a construção de páginas reais e responsivas.
            </ProjectItem.Description>

            <ProjectItem.Footer>
              <ProjectItem.Button
                href="https://spotify-clone-twcss.vercel.app/"
                label="Ver projeto"
              />

              <ProjectItem.Button
                href="https://github.com/LuisFelipeSalvarani/spotify_clone_twcss"
                label="Github"
              />
            </ProjectItem.Footer>
          </ProjectItem.Info>
        </ProjectItem.Root>

        <ProjectItem.Root>
          <ProjectItem.Image src={Electrum} />

          <ProjectItem.Info>
            <ProjectItem.Header title="Electrum" />

            <ProjectItem.Description>
              Este projeto é uma página inicial de um e-commerce, desenvolvido
              durante o curso de Sass/Scss da Hora de Codar. Utilizando HTML e
              Sass, o layout foi construído de forma responsiva, com foco em uma
              experiência visual moderna e ágil. O projeto simula a interface da
              home de um e-commerce de produtos de informática, incluindo menus
              de navegação, seção de produtos novos, seção de promoções, seção
              de mais vendidos e newsletter. O objetivo é aplicar os conceitos
              aprendidos de estilização com Sass, praticando a construção de
              páginas reais e responsivas.
            </ProjectItem.Description>

            <ProjectItem.Footer>
              <ProjectItem.Button
                href="https://electrum-three.vercel.app/"
                label="Ver projeto"
              />

              <ProjectItem.Button
                href="https://github.com/LuisFelipeSalvarani/electrum"
                label="Github"
              />
            </ProjectItem.Footer>
          </ProjectItem.Info>
        </ProjectItem.Root>

        <ProjectItem.Root>
          <ProjectItem.Image src={Agency} />

          <ProjectItem.Info>
            <ProjectItem.Header title="Agency" />

            <ProjectItem.Description>
              Este projeto é uma página inicial de uma Agencia de
              Desenvolvimento, desenvolvido durante o curso de Sass/Scss da Hora
              de Codar. Utilizando HTML e Sass, o layout foi construído de forma
              responsiva, com foco em uma experiência visual moderna e ágil. O
              projeto simula a interface de apresentação da Agency, incluindo
              menu de navegação, seção o que fazemos e seção de projetos. O
              objetivo é aplicar os conceitos aprendidos de estilização com
              Sass, praticando a construção de páginas reais e responsivas.
            </ProjectItem.Description>

            <ProjectItem.Footer>
              <ProjectItem.Button
                href="https://agency-psi-five.vercel.app/"
                label="Ver projeto"
              />

              <ProjectItem.Button
                href="https://github.com/LuisFelipeSalvarani/agency"
                label="Github"
              />
            </ProjectItem.Footer>
          </ProjectItem.Info>
        </ProjectItem.Root>

        <ProjectItem.Root>
          <ProjectItem.Image src={Formulario} />

          <ProjectItem.Info>
            <ProjectItem.Header title="Página de Formulário" />

            <ProjectItem.Description>
              Este projeto é uma página de formulário, desenvolvido durante um
              curso de TailwindCSS da Rocketseat. Utilizando Next.js e
              TailwindCSS, o layout foi construído de forma responsiva, com foco
              em uma experiência visual moderna e ágil. O projeto simula um
              cadastrado de projetos para um portfólio, incluindo menu de
              navegação responsivo, formulário completo e modo dark definido
              pelo sistema. O objetivo é aplicar os conceitos aprendidos de
              estilização com Tailwind, praticando a construção de páginas reais
              e responsivas.
            </ProjectItem.Description>

            <ProjectItem.Footer>
              <ProjectItem.Button
                href="https://vercel.live/link/tailwind-next-two.vercel.app?via=project-dashboard-alias-list&p=1"
                label="Ver projeto"
              />

              <ProjectItem.Button
                href="https://github.com/LuisFelipeSalvarani/tailwind-next"
                label="Github"
              />
            </ProjectItem.Footer>
          </ProjectItem.Info>
        </ProjectItem.Root>
      </div>
    </div>
  )
}
