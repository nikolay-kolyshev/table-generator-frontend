import { ETextControlFocusState } from '@/common/text-control/text-control.types';
import { DefaultTheme } from 'styled-components';

export interface BorderColorProps {
    focusState?: ETextControlFocusState;
    valid?: boolean;
    isErrorInPriority?: boolean;
    theme: DefaultTheme;
}

export const getBorderColor = ({ focusState, valid, isErrorInPriority, theme }: BorderColorProps) => {
    if (focusState === ETextControlFocusState.In) {
        if (isErrorInPriority && valid === false) {
            return theme.colors.PrimaryDanger;
        }

        return theme.colors.GrayscaleVariant4;
    }
    if (valid === false) {
        return theme.colors.PrimaryDanger;
    }

    return theme.colors.GrayscaleVariant4;
};
