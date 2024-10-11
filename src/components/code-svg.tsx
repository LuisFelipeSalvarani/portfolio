import type { SVGProps } from 'react'

interface CodeSvgProps extends SVGProps<SVGSVGElement> {}

export function CodeSvg(props: CodeSvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <title>Code</title>
      <path d="M22.75 6A4.75 4.75 0 0018 1.25H6A4.75 4.75 0 001.25 6v12A4.75 4.75 0 006 22.75h12A4.75 4.75 0 0022.75 18V6zM12.488 8.163l-2.4 7.2a.751.751 0 001.424.474l2.4-7.2a.751.751 0 00-1.424-.474zm2.582 1.967L16.939 12l-1.869 1.87a.749.749 0 101.06 1.06l2.4-2.4a.749.749 0 000-1.06l-2.4-2.4a.749.749 0 10-1.06 1.06zm-7.2-1.06l-2.4 2.4a.749.749 0 000 1.06l2.4 2.4a.749.749 0 101.06-1.06L7.061 12l1.869-1.87a.749.749 0 10-1.06-1.06z" />
    </svg>
  )
}
