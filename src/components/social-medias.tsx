export function SocialMedia() {
  return (
    <div className="-translate-y-1/2 absolute top-1/2 flex flex-col gap-1 bg-zinc-50 p-2 text-2xl text-zinc-900">
      <a
        href="/"
        className="flex size-12 items-center justify-center rounded-md transition-colors duration-300 hover:bg-zinc-300"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>
      <a
        href="/"
        className="flex size-12 items-center justify-center rounded-md transition-colors duration-300 hover:bg-zinc-300"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
      <a
        href="/"
        className="flex size-12 items-center justify-center rounded-md transition-colors duration-300 hover:bg-zinc-300"
      >
        <i className="fa-brands fa-github" />
      </a>
    </div>
  )
}
