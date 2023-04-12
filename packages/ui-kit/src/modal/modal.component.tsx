import { isKey, EKey } from '@/common/helpers/key-events.helper';
import { StyledModalChildren, StyledModalContent } from '@/modal/modal.styles';
import { EAnimationState, EModalVariant, IModalProps } from '@/modal/modal.types';
import { Overlay } from '@/overlay/overlay.component';
import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { ModalCrossButton } from './modal-cross-button/modal-cross-button.component';
import { Portal } from '@/common/portal';

export const modalDefaultProps = {
    isWithCross: true,
    variant: EModalVariant.Center,
    isNoCloseMode: false,
};

const ModalComponent: FC<IModalProps> = ({
    id,
    children,
    isOpen,
    isWithCross = modalDefaultProps.isWithCross,
    variant = modalDefaultProps.variant,
    isNoCloseMode = modalDefaultProps.isNoCloseMode,
    onClose,
    onCrossButtonClick,
    onOutsideClick,
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [animationState, setAnimationState] = useState(EAnimationState.Out);
    const appearAnimationTimeoutId = useRef<number>();
    const handleClose = useCallback(() => {
        setAnimationState(EAnimationState.Out);
    }, []);
    const isWithCrossButton = isWithCross && !isNoCloseMode;

    const handleTransitionEnd = () => {
        if (animationState === EAnimationState.Out && onClose) {
            onClose();
        }
    };

    const handleCrossButtonClick = useCallback(() => {
        onClose?.();
        onCrossButtonClick?.();
    }, [onClose, onCrossButtonClick]);

    useEffect(() => {
        if (isOpen) {
            appearAnimationTimeoutId.current = window.setTimeout(() => {
                setAnimationState(EAnimationState.In);
            }, 0);
        }
        const handleMousedownOutside = (event: MouseEvent) => {
            if (isOpen && wrapperRef.current !== null && !wrapperRef.current.contains(event.target as Node)) {
                if (!isNoCloseMode) {
                    handleClose();
                }
                onOutsideClick?.();
            }
        };
        const handlePressEscape = (event: KeyboardEvent) => {
            if (isKey(event, EKey.Escape) && onClose) {
                if (!isNoCloseMode) {
                    handleClose();
                }
                onOutsideClick?.();
            }
        };
        window.addEventListener('mousedown', handleMousedownOutside);
        window.addEventListener('keydown', handlePressEscape);

        return () => {
            if (!isNoCloseMode) {
                handleClose();
            }
            window.removeEventListener('mousedown', handleMousedownOutside);
            window.removeEventListener('keydown', handlePressEscape);
            clearTimeout(appearAnimationTimeoutId.current);
        };
    }, [isOpen, onClose, onOutsideClick, handleClose, isNoCloseMode]);

    if (!isOpen) {
        return null;
    }

    return (
        <Portal htmlClassName={'overlay-content'}>
            <Overlay>
                <StyledModalContent
                    ref={wrapperRef}
                    isWithCross={isWithCrossButton}
                    animationState={animationState}
                    onTransitionEnd={handleTransitionEnd}
                    variant={variant}
                >
                    {isWithCrossButton && variant === EModalVariant.Bottom && (
                        <ModalCrossButton variant={variant} onClick={handleCrossButtonClick} />
                    )}
                    <StyledModalChildren variant={variant} isWithCross={isWithCrossButton}>
                        {children}
                    </StyledModalChildren>
                    {isWithCrossButton && variant === EModalVariant.Center && (
                        <ModalCrossButton variant={variant} onClick={handleCrossButtonClick} />
                    )}
                </StyledModalContent>
            </Overlay>
        </Portal>
    );
};

export const Modal = memo(ModalComponent);
