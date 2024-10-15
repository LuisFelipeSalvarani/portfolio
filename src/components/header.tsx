import { CodeSvg } from './code-svg'

export function Header() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    const offset = 80

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex flex-col items-center justify-between gap-y-4 bg-zinc-50 px-10 py-5 font-semibold text-zinc-900 uppercase shadow-md transition-all md:flex-row">
      <div className="flex flex-1 items-center gap-2">
        <CodeSvg className="size-10 fill-zinc-900" />
        <h1>Luis Felipe Salvarani</h1>
      </div>
      <ul className="flex flex-1 justify-between sm:max-w-screen-sm sm:justify-end sm:gap-4">
        <li>
          <button
            type="button"
            onClick={() => handleScroll('top')}
            className="rounded-md px-3 py-2 text-sm transition-colors duration-300 hover:bg-zinc-300 sm:text-base"
          >
            Home
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleScroll('about')}
            className="rounded-md px-3 py-2 text-sm transition-colors duration-300 hover:bg-zinc-300 sm:text-base"
          >
            Sobre
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleScroll('projects')}
            className="rounded-md px-3 py-2 text-sm transition-colors duration-300 hover:bg-zinc-300 sm:text-base"
          >
            Projetos
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleScroll('contact')}
            className="rounded-md px-3 py-2 text-sm transition-colors duration-300 hover:bg-zinc-300 sm:text-base"
          >
            Contato
          </button>
        </li>
      </ul>
    </header>
  )
}
