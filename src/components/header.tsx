import { CodeSvg } from './code-svg'

export function Header() {
  return (
    <header className="absolute top-0 right-0 left-0 z-50 flex flex-col items-center justify-between gap-y-4 bg-zinc-50 px-10 py-5 font-semibold text-zinc-900 uppercase md:flex-row">
      <div className="flex flex-1 items-center gap-2">
        <CodeSvg className="size-10 fill-zinc-900" />
        <h1>Luis Felipe Salvarani</h1>
      </div>
      <ul className="flex flex-1 justify-between sm:max-w-screen-sm sm:justify-end sm:gap-4">
        <li>
          <a
            href="/"
            className="rounded-md px-3 py-2 transition-colors duration-300 hover:bg-zinc-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            className="rounded-md px-4 py-2 transition-colors duration-300 hover:bg-zinc-300"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="/"
            className="rounded-md px-4 py-2 transition-colors duration-300 hover:bg-zinc-300"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="/"
            className="rounded-md px-4 py-2 transition-colors duration-300 hover:bg-zinc-300"
          >
            Contato
          </a>
        </li>
      </ul>
    </header>
  )
}
