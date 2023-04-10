import { RefObject, useEffect, useRef } from 'react';

export function useFocusOnInit(ref: RefObject<HTMLElement | null>, isNeeded?: boolean, autoFocusDelay = 150) {
    const focusTimerRef = useRef<number>();

    useEffect(() => {
        if (isNeeded === false) {
            clearTimeout(focusTimerRef.current);
        }

        focusTimerRef.current = window.setTimeout(() => {
            if (isNeeded === true && ref.current !== null) {
                ref.current.focus();
            }
        }, autoFocusDelay);

        return () => {
            clearTimeout(focusTimerRef.current);
        };
    }, [autoFocusDelay, isNeeded, ref, focusTimerRef]);
}
