export function SocialMedia() {
  return (
    <div className="md:-translate-y-1/2 absolute top-1/2 flex flex-col gap-1 bg-zinc-50 p-2 text-2xl text-zinc-900">
      <a
        href="https://www.linkedin.com/in/luis-felipe-salvarani-63846a201/"
        target="_blank"
        rel="noreferrer"
        className="flex size-10 items-center justify-center rounded-md transition-colors duration-300 hover:bg-zinc-300 md:size-12"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>
      <a
        href="https://wa.me/5519999096992?text=Boa%20tarde!%20Gostaria%20de%20conversar%20sobre%20seus%20servi%C3%A7os.%20Podemos%20falar%20mais%20a%20respeito?"
        target="_blank"
        rel="noreferrer"
        className="flex size-10 items-center justify-center rounded-md transition-colors duration-300 hover:bg-zinc-300 md:size-12"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
      <a
        href="https://github.com/LuisFelipeSalvarani"
        target="_blank"
        rel="noreferrer"
        className="flex size-10 items-center justify-center rounded-md transition-colors duration-300 hover:bg-zinc-300 md:size-12"
      >
        <i className="fa-brands fa-github" />
      </a>
    </div>
  )
}
