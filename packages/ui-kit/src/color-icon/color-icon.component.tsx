import * as ColorIcon from '@/color-icon/components';
import { useTheme } from 'styled-components';
import React, { createElement } from 'react';
import { EColorVariant } from '@/theme/theme.types';
import { ColorIconVariant } from '@/color-icon/color-icon.types';

interface IconWithColorProps {
    icon: ColorIconVariant;
    color?: EColorVariant;
}

// eslint-disable-next-line react/display-name
export const IconWithColor = React.forwardRef<SVGSVGElement, IconWithColorProps>(
    ({ icon, color = EColorVariant.GrayscaleVariant5 }: IconWithColorProps, ref) => {
        const theme = useTheme();
        return createElement(ColorIcon[icon], { color: theme.colors[color], ref });
    },
);
