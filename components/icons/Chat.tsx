import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M49.793.783H5.943C2.927.783.46 3.25.46 6.264v49.332l10.963-10.963h38.369c3.014 0 5.481-2.466 5.481-5.48V6.263c0-3.014-2.467-5.481-5.481-5.481Z"
      fill="#424941"
    />
  </svg>
)

export default SvgComponent
