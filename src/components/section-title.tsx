interface SectionTitleProps {
  title: string
  description: string
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-4 px-5 text-center">
      <h2 className="flex flex-col items-center gap-4 font-semibold text-4xl uppercase">
        {title}
        <span className="h-1 w-6 rounded-lg bg-zinc-900" />
      </h2>

      <p className="text-zinc-600">{description}</p>
    </div>
  )
}
