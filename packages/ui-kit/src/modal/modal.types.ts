import { HTMLAttributes } from 'react';

export enum EAnimationState {
    In = 'in',
    Out = 'out',
}

export enum EModalVariant {
    Center = 'Center',
    Bottom = 'Bottom',
}

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    isWithCross?: boolean;
    variant?: EModalVariant;
    isNoCloseMode?: boolean;
    onClose?(): void;
    onCrossButtonClick?(): void;
    onOutsideClick?(): void;
}
