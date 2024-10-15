export function Presentation() {
  const handleScroll = () => {
    const section = document.getElementById('projects')
    const offset = 80

    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset

      window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-liquid-cheese bg-no-repeat text-center"
      id="top"
    >
      <div className="px-10 md:max-w-screen-md lg:max-w-screen-lg">
        <h2 className="font-semibold text-2xl uppercase sm:text-5xl/snug">
          Olá, meu nome é <br /> Luis Felipe Salvarani
        </h2>

        <p className="sr-only sm:not-sr-only sm:mt-4 md:text-lg/normal">
          Desenvolvedor web frontend com uma sólida base em backend. Minha
          paixão é criar interfaces dinâmicas e responsivas, focando na melhor
          experiência do usuário, enquanto aplico conhecimento em tecnologias de
          backend para entregar soluções completas e eficientes.
        </p>

        <button
          type="button"
          onClick={() => handleScroll()}
          className="hover:-translate-y-1 mt-10 rounded-md bg-zinc-900 px-16 py-3 font-bold text-zinc-50 uppercase transition-all"
        >
          Projetos
        </button>
      </div>
    </section>
  )
}
