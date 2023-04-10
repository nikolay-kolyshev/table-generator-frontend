import { ReactElement, SVGProps } from 'react';
import { ColorIcon } from '@/color-icon';

export type SvgIcon = ReactElement<SVGProps<SVGSVGElement>>;
export type ColorIconVariant = keyof typeof ColorIcon;
