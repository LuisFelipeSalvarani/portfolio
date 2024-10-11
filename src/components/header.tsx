import { CodeSvg } from './code-svg'

export function Header() {
  return (
    <header className="absolute top-0 right-0 left-0 flex max-h-20 items-center justify-between bg-zinc-50 px-10 py-5 font-semibold text-zinc-900 uppercase tracking-widest">
      <div className="flex flex-1 items-center gap-2">
        <CodeSvg className="size-10 fill-zinc-900" />
        <h1>Luis Felipe Salvarani</h1>
      </div>
      <ul className="flex flex-1 justify-between">
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
