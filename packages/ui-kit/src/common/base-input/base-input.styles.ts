import { baseInputHeights, baseInputPlaceholderColors } from '@/common/base-input/base-input.constants';
import { EInputPlaceholderColor, EInputSize } from '@/common/base-input/base-input.types';
import { autofillAnimationStart } from '@/common/index.styles';
import { getBorderColor } from '@/common/text-control/text-control.styles';
import { ETextControlFocusState } from '@/common/text-control/text-control.types';
import { EPaperBorderRadius } from '@/paper/paper.types';
import { Typography } from '@/typography/typography.component';
import { ValidationError } from '@/validation-error/validation-error.component';
import styled from 'styled-components';
import { paperBorderRadiuses } from '@/paper/paper.constants';

const isMediumSize = (height: EInputSize) => height === EInputSize.Medium;
const getSidePadding = (height: EInputSize) => (isMediumSize(height) ? 14 : 0);
const getInputPadding = ({
    height,
}: {
    height: EInputSize;
}) => {
    const sidePadding = getSidePadding(height);

    return `0 ${sidePadding}px 0 ${sidePadding}px`;
};

export const StyledInputWrapper = styled.div<{ isEllipsis?: boolean }>`
    height: 100%;
    ${({ isEllipsis = true }) => isEllipsis && 'text-overflow: ellipsis;'};
    border: ${({ theme }) => `1px solid ${theme.colors.GrayscaleVariant5}`};
    background: ${({ theme }) => theme.colors.WhiteBg};
    border-radius: ${paperBorderRadiuses[EPaperBorderRadius.Medium]};
    box-sizing: border-box;
`;

export const StyledBaseInput = styled(Typography)`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    -webkit-appearance: none;
    background-color: ${({ theme }) => theme.colors.WhiteBg};
    -webkit-tap-highlight-color: transparent;

    &::-webkit-search-cancel-button {
        display: none;
    }

    @keyframes ${autofillAnimationStart} {
    }
    &:-webkit-autofill {
        animation-name: ${autofillAnimationStart};
    }
`;

export const StyledBaseInputLabel = styled.label`
    width: 100%;
`;

export const StyledBaseInputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const StyledPopoverWrapper = styled.div`
    display: flex;
`;

export const StyledHint = styled.div`
    width: 295px;
    position: absolute;
    right: -20px;
`;

export const StyledBaseInputContainer = styled.div<{
    placeholderColor?: EInputPlaceholderColor;
    focusState: ETextControlFocusState;
    height: EInputSize;
    valid: boolean;
    type: string;
    isErrorInPriority: boolean;
}>`
    width: 100%;
    height: ${({ height }) => baseInputHeights[height]};
    position: relative;

    ${StyledInputWrapper} {
        border-color: ${getBorderColor};
        padding: ${getInputPadding};
    }

    ${StyledBaseInput} {
        &::placeholder {
            color: ${({ placeholderColor, theme }) =>
                placeholderColor !== undefined && theme.colors[baseInputPlaceholderColors[placeholderColor]]};
        }
    }
`;

export const StyledValidationWrapper = styled(ValidationError)`
    width: 100%;
`;
