import { CodeSvg } from './code-svg'

export function Footer() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-zinc-950 py-16 text-zinc-50">
      <div className="flex-col space-y-8 xl:mx-40 2xl:mx-72">
        <div className="flex flex-1 items-start">
          <div className="flex flex-1 flex-col gap-8">
            <h2 className="flex flex-1 items-center gap-2 font-semibold text-xl">
              <CodeSvg className="size-10 fill-zinc-50" />
              Luis Felipe Salvarani
            </h2>
            <p className="text-sm">
              Desenvolvedor web frontend com uma sólida base em backend.
            </p>
          </div>
          <div>
            <h2 className="flex-1 font-semibold text-xl">Redes sociais</h2>
            <ul className="mt-4 inline-flex list-none">
              <li className="facebook group relative m-4 flex size-10 cursor-pointer flex-col items-center justify-center rounded-full bg-transparent p-6 text-xl transition-all duration-200 ease-in-out hover:bg-zinc-100">
                <span
                  translate="no"
                  className="-translate-x-1/2 -translate-y-full group-hover:-translate-y-8 pointer-events-none absolute top-0 left-1/2 transform rounded-md bg-zinc-100 px-2 font-medium text-base text-blue-500 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
                >
                  LinkedIn
                </span>
                <span>
                  <a
                    href="/"
                    className="text-zinc-100 transition-all duration-200 ease-in-out group-hover:text-blue-500"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </span>
              </li>
              <li className="facebook group relative m-4 flex size-10 cursor-pointer flex-col items-center justify-center rounded-full bg-transparent p-6 text-xl transition-all duration-200 ease-in-out hover:bg-zinc-100">
                <span
                  translate="no"
                  className="-translate-x-1/2 -translate-y-full group-hover:-translate-y-8 pointer-events-none absolute top-0 left-1/2 transform rounded-md bg-zinc-100 px-2 font-medium text-base text-zinc-950 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
                >
                  GitHub
                </span>
                <span>
                  <a
                    href="/"
                    className="text-zinc-100 transition-all duration-200 ease-in-out group-hover:text-zinc-950"
                  >
                    <i className="fa-brands fa-github" />
                  </a>
                </span>
              </li>
              <li className="facebook group relative m-4 flex size-10 cursor-pointer flex-col items-center justify-center rounded-full bg-transparent p-6 text-xl transition-all duration-200 ease-in-out hover:bg-zinc-100">
                <span
                  translate="no"
                  className="-translate-x-1/2 -translate-y-full group-hover:-translate-y-8 pointer-events-none absolute top-0 left-1/2 transform rounded-md bg-zinc-100 px-2 font-medium text-base text-green-600 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
                >
                  WhatsApp
                </span>
                <span>
                  <a
                    href="/"
                    className="text-zinc-100 transition-all duration-200 ease-in-out group-hover:text-green-600"
                  >
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <div className="flex w-full items-center justify-center">
          <small className="text-xs tracking-wide">
            &copy; Copyright {new Date().getFullYear()}. Feito por{' '}
            <button
              type="button"
              className="text-blue-500 underline"
              onClick={() => handleScroll()}
            >
              Luis Felipe Salvarani
            </button>
          </small>
        </div>
      </div>
    </footer>
  )
}
