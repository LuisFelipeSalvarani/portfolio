import { Badge } from './badge'
import { TailwindSvg } from './tailwind-svg'
import { TypescriptSvg } from './typescript-svg'

export function MySkills() {
  return (
    <div className="flex flex-col gap-4 px-10 text-sm/relaxed text-zinc-800">
      <h3 className="mb-3 font-bold text-xl">Minhas habilidades</h3>

      <div className="flex flex-wrap gap-3.5">
        <Badge title="HTML">
          <i className="fa-brands fa-html5 text-lg" />
        </Badge>

        <Badge title="CSS">
          <i className="fa-brands fa-css3-alt text-lg" />
        </Badge>

        <Badge title="SASS">
          <i className="fa-brands fa-sass text-lg" />
        </Badge>

        <Badge title="JavaScript">
          <i className="fa-brands fa-js text-lg" />
        </Badge>

        <Badge title="TypeScript">
          <TypescriptSvg className="size-4" />
        </Badge>

        <Badge title="React">
          <i className="fa-brands fa-react text-lg" />
        </Badge>

        <Badge title="Node">
          <i className="fa-brands fa-node-js text-lg" />
        </Badge>

        <Badge title="PHP">
          <i className="fa-brands fa-php text-lg" />
        </Badge>

        <Badge title="Bootstrap">
          <i className="fa-brands fa-bootstrap text-lg" />
        </Badge>

        <Badge title="TailwindCSS">
          <TailwindSvg className="size-4" />
        </Badge>

        <Badge title="GIT">
          <i className="fa-brands fa-git-alt text-lg" />
        </Badge>

        <Badge title="Docker">
          <i className="fa-brands fa-docker text-lg" />
        </Badge>

        <Badge title="Responsive Design">
          <i className="fa-regular fa-window-restore text-lg" />
        </Badge>
      </div>
    </div>
  )
}
