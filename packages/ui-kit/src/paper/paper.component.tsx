import { StyledPaper } from '@/paper/paper.styles';
import { EPaperBorderRadius, EPaperColor, EPaperShadow, EPaperPadding } from '@/paper/paper.types';
import React, { FC, HTMLProps, memo, PropsWithChildren } from 'react';

export interface PaperProps extends HTMLProps<HTMLDivElement> {
    borderRadius?: EPaperBorderRadius;
    color?: EPaperColor;
    padding?: EPaperPadding;
    disableVerticalPaddings?: boolean;
    shadow?: EPaperShadow;
    element?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>;
}

export const paperDefaultProps = {
    borderRadius: EPaperBorderRadius.None,
    color: EPaperColor.WhiteBg,
    disableVerticalPaddings: false,
    elevation: EPaperShadow.HardShadow,
    padding: EPaperPadding.Medium,
};

export const PaperComponent: FC<PaperProps> = ({
    borderRadius = paperDefaultProps.borderRadius,
    children,
    color = paperDefaultProps.color,
    padding = paperDefaultProps.padding,
    disableVerticalPaddings = paperDefaultProps.disableVerticalPaddings,
    shadow = paperDefaultProps.elevation,
    element,
    ...props
}) => {
    const customOrDefaultHtmlElement: React.ComponentType<PropsWithChildren<unknown>> | keyof JSX.IntrinsicElements =
        element !== undefined ? element : 'div';

    return (
        <StyledPaper
            padding={padding}
            borderRadius={borderRadius}
            color={color}
            disableVerticalPaddings={disableVerticalPaddings}
            shadow={shadow}
            {...props}
            as={customOrDefaultHtmlElement}
        >
            {children}
        </StyledPaper>
    );
};
export const Paper = memo(PaperComponent);
