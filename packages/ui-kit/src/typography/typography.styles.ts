import { typographyColors, typographyFontFamilies, typographyFontWeights } from '@/typography/typography.constants';
import { ETypographyColor, ETypographyFontFamily, ETypographyFontWeight } from '@/typography/typography.types';
import styled from 'styled-components';

export const StyledTypography = styled.span<{
    textColor: ETypographyColor;
    typographyFontFamily: ETypographyFontFamily;
    typographyFontSize: string;
    typographyFontWeight: ETypographyFontWeight;
    textTransform: string;
    textDecoration: string;
    fontStyle: string;
    lineHeight: string;
    letterSpacing: string;
}>`
    ${({
        textColor,
        typographyFontFamily,
        typographyFontSize,
        typographyFontWeight,
        lineHeight,
        letterSpacing,
        textTransform,
        textDecoration,
        fontStyle,
        theme,
    }) => `
        margin: 0;
        padding: 0;
        color: ${theme.colors[typographyColors[textColor]]};
        font-family: ${typographyFontFamilies[typographyFontFamily]};
        font-size: ${typographyFontSize};
        line-height: ${lineHeight};
        letter-spacing: ${letterSpacing};
        font-weight: ${typographyFontWeights[typographyFontWeight]};
        text-transform: ${textTransform};
        text-decoration: ${textDecoration};
        font-style: ${fontStyle};
    `}
`;
