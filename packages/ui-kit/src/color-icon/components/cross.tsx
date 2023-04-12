import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCross = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
        <path
            fill="currentColor"
            d="M3.577 15.243a.833.833 0 1 0 1.18 1.178L9.9 11.277a.138.138 0 0 1 .152-.03.138.138 0 0 1 .045.03l5.145 5.146a.832.832 0 1 0 1.179-1.179l-5.145-5.146a.14.14 0 0 1 0-.197l5.146-5.145a.834.834 0 0 0-1.18-1.178l-5.145 5.144a.139.139 0 0 1-.197 0L4.756 3.578a.833.833 0 0 0-1.179 1.178l5.145 5.145a.139.139 0 0 1 0 .197l-5.145 5.145Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCross);
export default ForwardRef;
