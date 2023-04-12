import { typographyVariants } from '@/typography/typography.constants';
import { StyledTypography } from '@/typography/typography.styles';
import { ETypographyVariant } from '@/typography/typography.types';
import React, { ComponentType, forwardRef, ForwardRefRenderFunction, HTMLProps, memo, PropsWithChildren } from 'react';

export interface TypographyProps extends Omit<HTMLProps<HTMLElement>, 'size' | 'css'> {
    element?: keyof JSX.IntrinsicElements | ComponentType<unknown>;
    variant?: ETypographyVariant;
}

export const typographyDefaultProps = {
    variant: ETypographyVariant.Body1Black,
};

const TypographyComponent: ForwardRefRenderFunction<HTMLElement, TypographyProps> = (
    { children, element, variant = typographyDefaultProps.variant, ...props },
    ref,
) => {
    const {
        color,
        fontFamily,
        fontWeight,
        fontSize,
        lineHeight,
        letterSpacing,
        textTransform,
        textDecoration,
        fontStyle,
    } = typographyVariants[variant];
    const customOrDefaultHtmlElement: React.ComponentType<PropsWithChildren<unknown>> | keyof JSX.IntrinsicElements =
        element !== undefined ? element : 'span';

    return (
        <StyledTypography
            textColor={color}
            typographyFontFamily={fontFamily}
            typographyFontWeight={fontWeight}
            typographyFontSize={fontSize}
            lineHeight={lineHeight}
            textTransform={textTransform}
            textDecoration={textDecoration}
            letterSpacing={letterSpacing}
            fontStyle={fontStyle}
            ref={ref}
            {...props}
            as={customOrDefaultHtmlElement}
        >
            {children}
        </StyledTypography>
    );
};

export const Typography = memo(forwardRef(TypographyComponent));
