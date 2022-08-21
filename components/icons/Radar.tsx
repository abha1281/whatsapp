import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={66}
    height={66}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M59.291 31.139A25.354 25.354 0 0 0 33.936 5.782v7.614a17.742 17.742 0 0 1 17.742 17.742h7.613ZM59.291 35.086A25.354 25.354 0 0 1 33.936 60.44v-7.613a17.742 17.742 0 0 0 17.742-17.742h7.613ZM4.633 31.139A25.355 25.355 0 0 1 29.988 5.782v7.614a17.742 17.742 0 0 0-17.742 17.742H4.633ZM4.633 35.086A25.356 25.356 0 0 0 29.988 60.44v-7.613a17.742 17.742 0 0 1-17.742-17.742H4.633Z"
      fill="#424941"
    />
    <circle cx={32.424} cy={33.575} r={14.823} fill="#424941" />
  </svg>
)

export default SvgComponent
