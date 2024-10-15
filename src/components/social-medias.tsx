import { useEffect, useState } from 'react'

export function SocialMedia() {
  const [inTop, setInTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setInTop(true)
      } else {
        setInTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-2 left-2 flex flex-col gap-1 rounded-lg bg-zinc-50 p-2 text-2xl text-zinc-900 shadow-lg transition-all lg:visible lg:absolute lg:bottom-1/2 lg:left-0 lg:translate-y-1/2 lg:rounded-none lg:opacity-100 ${inTop ? '' : 'invisible translate-y-4 opacity-0'}`}
    >
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
