import { FC, HTMLAttributes, RefObject } from 'react'

interface EllipseProps extends HTMLAttributes<SVGElement> {
  ref: RefObject<SVGSVGElement>
}

const Ellipse: FC<EllipseProps> = ({ ref, ...props }) => {
  return (
    <svg
      ref={ref}
      width="412"
      height="413"
      viewBox="0 0 412 413"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle
        cx="210"
        cy="210.04"
        r="210.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="19 39 59 75"
      />
    </svg>
  )
}

export default Ellipse
