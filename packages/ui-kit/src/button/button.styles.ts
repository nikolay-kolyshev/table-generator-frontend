import { buttonColors, buttonHeights, buttonHoverColors } from '@/button/button.constants';
import { EButtonColor, IButtonVariantType } from '@/button/button.types';
import { EPaperBorderRadius } from '@/paper/paper.types';
import { Typography } from '@/typography/typography.component';
import styled, { css, DefaultTheme } from 'styled-components';
import { paperBorderRadiuses } from '@/paper/paper.constants';
import { hex2rgba } from '@/common/helpers/hex-to-rgba.helper';
import { EThemeVariant } from '@/theme/theme.types';

const getTextButtonHoverStyles = (theme: DefaultTheme, delta: number) => css`
    filter: brightness(${theme.name === EThemeVariant.Dark ? 100 + delta : 100 - delta}%);
`;

const getOverlay = (color: EButtonColor, theme: DefaultTheme, alpha: number) => css`
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${hex2rgba(theme.colors[buttonHoverColors[color]] ?? buttonHoverColors[color], alpha)};
    top: 0;
    left: 0;
    border-radius: inherit;
`;

const getStyles = (color: EButtonColor, theme: DefaultTheme) => css`
    background-color: ${theme.colors[buttonColors[color]] ?? buttonColors[color]};
`;

export const StyledButton = styled(Typography)<{
    buttonVariant: IButtonVariantType;
    responsive: boolean;
    isFocusDisabled: boolean;
    isIconButton?: boolean;
    withoutHover?: boolean;
}>`
    text-align: center;
    border-radius: ${paperBorderRadiuses[EPaperBorderRadius.Medium]};
    outline: none;
    cursor: pointer;
    position: relative;
    padding: ${({ isIconButton, buttonVariant: { isSmall } }) =>
        isIconButton ? (isSmall ? '0 10px' : '0 12px') : '0 24px'};
    box-sizing: border-box;
    border: none;
    white-space: nowrap;

    ${({ buttonVariant: { color }, theme }) => getStyles(color, theme)};

    ${({ responsive, buttonVariant: { height } }) => css`
        ${responsive ? 'width:  100%' : ''};
        height: ${buttonHeights[height]};
        margin: ${responsive ? '0 auto' : 0};
    `};

    ${({ isIconButton, buttonVariant: { isSmall } }) =>
        isIconButton &&
        css`
            display: inline-flex;
            align-items: center;
            padding: ${isSmall ? '0 10px' : '0 12px'};
        `};

    ${({ buttonVariant: { color, isTextButton }, theme, withoutHover }) =>
        !withoutHover &&
        css`
            @media (hover: hover) {
                &:not([disabled]):hover {
                    ${isTextButton
                        ? getTextButtonHoverStyles(theme, 8)
                        : css`
                              &:after {
                                  ${getOverlay(color, theme, 0.08)}
                              }
                          `}
                }
            }

            &:not([disabled]):active {
                ${isTextButton
                    ? getTextButtonHoverStyles(theme, 12)
                    : css`
                          &:after {
                              ${getOverlay(color, theme, 0.12)}
                          }
                      `}
            }
        `}

    &[disabled] {
        ${({
            buttonVariant: {
                disabled: { color },
            },
            theme,
        }) => getStyles(color, theme)};
        cursor: not-allowed;
        pointer-events: none;
    }

    ${({ buttonVariant: { isTextButton } }) =>
        isTextButton &&
        css`
            padding: 0;
            border: none;
            border-radius: 0;
            height: auto;
        `};
`;
