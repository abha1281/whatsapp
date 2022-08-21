import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={67}
    height={66}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={34.426} cy={12.449} r={5.74} fill="#424941" />
    <circle cx={34.426} cy={33.113} r={5.74} fill="#424941" />
    <circle cx={34.426} cy={53.775} r={5.74} fill="#424941" />
  </svg>
)

export default SvgComponent
