import type { ReactNode } from 'react'

export function Root({ children }: { children: ReactNode }) {
  return (
    <div className="group grid flex-1 grid-cols-1 md:grid-cols-2">
      {children}
    </div>
  )
}

export function Image({ src }: { src: string }) {
  return (
    <div className="order-2 flex items-center justify-center p-10 md:order-1">
      <div className="aspect-video flex-1 overflow-hidden rounded-md bg-black ring-4 ring-zinc-300 duration-300 group-hover:shadow-xl group-hover:shadow-zinc-400">
        <img src={src} alt="Clone amazon" />
      </div>
    </div>
  )
}

export function Info({ children }: { children: ReactNode }) {
  return (
    <div className="order-1 flex flex-1 flex-col gap-5 p-10 md:order-2">
      {children}
    </div>
  )
}

export function Header({ title }: { title: string }) {
  return (
    <h1 className="border-zinc-900 border-l-4 pl-2 font-semibold text-xl uppercase">
      {title}
    </h1>
  )
}

export function Description({ children }: { children: string }) {
  return <p className="text-base/relaxed">{children}</p>
}

export function Footer({ children }: { children: ReactNode }) {
  return <div className="flex max-h-12 flex-1 gap-2">{children}</div>
}

export function Button({ href, label }: { href: string; label: string }) {
  return (
    <a className="flex flex-1" href={href} target="_blank" rel="noreferrer">
      <button
        type="button"
        className="hover:-translate-y-1 flex-1 rounded-md bg-zinc-900 py-3 font-bold text-zinc-50 uppercase transition-all"
      >
        {label}
      </button>
    </a>
  )
}
