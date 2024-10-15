import type { ReactNode } from 'react'

interface BadgeProps {
  title: string
  children?: ReactNode
}

export function Badge({ title, children }: BadgeProps) {
  return (
    <span className="flex items-center gap-1.5 rounded bg-zinc-200 px-6 py-3 font-semibold text-zinc-600 tracking-normal hover:bg-zinc-300/80">
      {children ?? children}
      {title}
    </span>
  )
}
