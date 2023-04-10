import { getPaperShadow, paperBorderRadiuses, paperColors, paperPaddings } from '@/paper/paper.constants';
import { EPaperBorderRadius, EPaperColor, EPaperShadow, EPaperPadding } from '@/paper/paper.types';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface PaperPaddingsProps {
    padding: EPaperPadding;
    disableVerticalPaddings: boolean;
}

interface StyledPaperProps extends PaperPaddingsProps {
    borderRadius: EPaperBorderRadius;
    color: EPaperColor;
    shadow: EPaperShadow;
}

function getPaddings({ padding, disableVerticalPaddings }: PaperPaddingsProps): FlattenSimpleInterpolation {
    const currentPaddings = paperPaddings[padding];
    const horizontalPaddings = css`
        padding-top: ${currentPaddings[0]};
        padding-bottom: ${currentPaddings[2]};
    `;
    if (disableVerticalPaddings) {
        return css`
            ${horizontalPaddings};
            padding-right: 0;
            padding-left: 0;
        `;
    }

    return css`
        ${horizontalPaddings};
        padding-right: ${currentPaddings[1]};
        padding-left: ${currentPaddings[3]};
    `;
}

export const StyledPaper = styled.div<StyledPaperProps>`
    box-sizing: border-box;
    background-color: ${({ color, theme }) => theme.colors[paperColors[color]]};
    border-radius: ${({ borderRadius }) => paperBorderRadiuses[borderRadius]};
    box-shadow: ${({ shadow, theme }) => getPaperShadow(theme)[shadow]};
    ${getPaddings};
`;
