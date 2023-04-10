import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.989 9.928a.895.895 0 0 1-.672-.303L2.5 5.288A.718.718 0 0 1 3.58 4.34l3.336 3.792a.097.097 0 0 0 .146 0l3.336-3.792a.718.718 0 1 1 1.079.948L7.662 9.624a.898.898 0 0 1-.673.304Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow);
export default ForwardRef;
