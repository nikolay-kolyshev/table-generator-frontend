import { StyledOverlay } from '@/overlay/overlay.styles';
import { preventTab, preventShiftTab, preventFocusing } from '@/overlay/overlay.helpers';
import React, { memo, PropsWithChildren, useEffect, useRef } from 'react';

export interface IOverlayProps {
    alpha?: number;
    topOffset?: number;
}

const OverlayComponent = ({ alpha, children, topOffset }: PropsWithChildren<IOverlayProps>) => {
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (overlayRef.current !== null) {
            const bodyStyle = document.body.style;
            const isPreviouslyHidden = bodyStyle.overflowY === 'hidden';
            bodyStyle.setProperty('overflow-y', 'hidden');
            const focusable = overlayRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            );
            if (focusable.length !== 0) {
                const firstFocusable = focusable[0] as HTMLElement;
                const lastFocusable = focusable[focusable.length - 1] as HTMLElement;
                lastFocusable.addEventListener('keydown', preventTab(firstFocusable));
                firstFocusable.addEventListener('keydown', preventShiftTab(lastFocusable));

                return () => {
                    lastFocusable.removeEventListener('keydown', preventTab(firstFocusable));
                    firstFocusable.addEventListener('keydown', preventShiftTab(lastFocusable));
                    if (!isPreviouslyHidden) {
                        bodyStyle.removeProperty('overflow-y');
                    }
                };
            }

            document.addEventListener('keydown', preventFocusing);

            return () => {
                document.removeEventListener('keydown', preventFocusing);
                if (!isPreviouslyHidden) {
                    bodyStyle.removeProperty('overflow-y');
                }
            };
        }

        return undefined;
    }, [overlayRef]);

    return (
        <StyledOverlay alpha={alpha} ref={overlayRef} topOffset={topOffset}>
            {children}
        </StyledOverlay>
    );
};

export const Overlay = memo(OverlayComponent);
