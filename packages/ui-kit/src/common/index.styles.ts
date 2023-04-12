import styled from 'styled-components';
import { EColorVariant } from '@/theme/theme.types';

export const autofillAnimationStart = 'onAutoFillStart';

export const StyledStorybookLayout = styled.div<{
    theme: string;
    withoutMargin: boolean;
    withoutPadding: boolean;
    backgroundColor?: typeof EColorVariant;
}>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: fit-content;
    background-color: ${({ backgroundColor, theme }) =>
        backgroundColor === undefined ? theme.colors.WhiteBg : backgroundColor};
    ${({ withoutPadding }) => (!withoutPadding ? 'padding: 10px;' : '')}

    & > :nth-child(n) {
        margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '10px 10px')};
    }
`;

export const LineBreaker = styled.div`
    margin: 0 !important;
    width: 100%;
`;

export const BlockBorderHighlight = styled.div`
    border: 1px solid red;
`;

export const StyledStoryTitle = styled.h2`
    width: 100%;
    border-bottom: solid black;
`;

export const StyledLabel = styled.label`
    width: 100%;
    font-weight: bold;
`;
