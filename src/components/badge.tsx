interface BadgeProps {
  title: string
}

export function Badge({ title }: BadgeProps) {
  return (
    <span className="rounded bg-zinc-200 px-5 py-3 font-semibold text-zinc-600 tracking-normal">
      {title}
    </span>
  )
}
