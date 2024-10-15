export function KnowMe() {
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
    <div className="flex flex-col gap-4 px-10 text-sm/relaxed text-zinc-800">
      <h3 className="mb-3 font-bold text-xl">Venha me conhecer!</h3>

      <p>
        Sou um{' '}
        <span className="font-bold">
          Desenvolvedor Web com foco em Frontend
        </span>
        , especializado na criação e gestão de interfaces de sites e aplicativos
        que proporcionam uma experiência intuitiva e familiar ao usuário. Além
        disso, tenho conhecimento em Backend, o que me permite compreender e
        integrar com eficiência as camadas de front e back, desenvolvendo
        soluções completas e funcionais.
      </p>

      <p>
        Meu objetivo é criar interfaces que sejam visualmente atraentes, de
        fácil uso e otimizadas, garantindo que a experiência do usuário seja
        sempre positiva e fluida.
      </p>

      <p>
        Também compartilho meus projetos e contribuições no{' '}
        <a
          href="https://github.com/LuisFelipeSalvarani"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-violet-800 underline"
        >
          GitHub
        </a>
        , onde você pode acompanhar meu progresso tanto no Desenvolvimento
        Frontend quanto em Backend. Fique à vontade para explorar a seção
        "Projetos" e conhecer alguns dos trabalhos que realizei.
      </p>

      <p>
        Estou sempre aberto a novas oportunidades{' '}
        <span className="font-bold">de trabalho</span>, onde posso aplicar
        minhas habilidades, aprender e crescer. Se você tem uma oportunidade que
        se encaixe no meu perfil, não hesite em{' '}
        <span className="font-bold">entrar em contato!</span>
      </p>

      <button
        type="button"
        onClick={() => handleScroll()}
        className="hover:-translate-y-1 mt-5 rounded-md bg-zinc-900 px-16 py-3 font-bold text-zinc-50 uppercase transition-all"
      >
        Projetos
      </button>
    </div>
  )
}
