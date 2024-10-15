import { useEffect, useState } from 'react'

export function ButtonToTop() {
  const [inTop, setInTop] = useState(true)
  const [inFooter, setInFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setInTop(true)
      } else {
        setInTop(false)
      }

      const section = document.getElementById('contact')

      if (section) {
        const sectionBottom =
          section.getBoundingClientRect().top + window.scrollY

        if (window.scrollY >= sectionBottom) {
          setInFooter(true)
        } else {
          setInFooter(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={() => handleScroll()}
      className={`hover:-translate-y-1 fixed right-5 bottom-5 flex size-10 items-center justify-center rounded-md shadow-lg transition-all ${inTop ? 'invisible translate-y-4 opacity-0' : ''}${inFooter ? 'bg-zinc-50' : 'bg-zinc-900'}`}
    >
      <i
        className={`fa-solid fa-circle-up ${inFooter ? 'text-zinc-800' : 'text-zinc-100'}`}
      />
    </button>
  )
}
