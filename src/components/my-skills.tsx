import { Badge } from './badge'

export function MySkills() {
  return (
    <div className="flex flex-col gap-4 px-10 text-sm/relaxed text-zinc-800">
      <h3 className="mb-3 font-bold text-xl">Minhas habilidades</h3>

      <div className="flex flex-wrap gap-3.5">
        <Badge title="HTML" />

        <Badge title="CSS" />

        <Badge title="JavaScript" />

        <Badge title="TypeScript" />

        <Badge title="SASS" />

        <Badge title="Node" />

        <Badge title="PHP" />

        <Badge title="Bootstrap" />

        <Badge title="TailwindCSS" />

        <Badge title="GIT" />

        <Badge title="Docker" />
      </div>
    </div>
  )
}
