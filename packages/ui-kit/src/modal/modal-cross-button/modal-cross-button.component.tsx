import React, { memo } from 'react';
import { StyledModalCross } from './modal-cross-button.styles';
import { EModalVariant } from '../modal.types';
import {Cross} from "@/color-icon/components";
import {useTheme} from "styled-components";

export interface IModalCrossButtonProps {
    variant: EModalVariant;
    onClick(): void;
}

const ModalCrossButtonComponent = ({ onClick, variant }: IModalCrossButtonProps) => {

    const theme = useTheme();

    return (
        <StyledModalCross
            onClick={onClick}
            variant={variant}
            role="presentation"
        >
            <Cross color={theme.colors.PrimaryDanger} />
        </StyledModalCross>
    );
};

export const ModalCrossButton = memo(ModalCrossButtonComponent);
