export const preventFocusing = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
        event.preventDefault();
    }
};

export const preventTab = (elementToFocus: HTMLElement) => (event: KeyboardEvent) => {
    if (event.key === 'Tab' && !event.shiftKey) {
        event.preventDefault();
        elementToFocus.focus();
    }
};

export const preventShiftTab = (elementToFocus: HTMLElement) => (event: KeyboardEvent) => {
    if (event.key === 'Tab' && event.shiftKey) {
        event.preventDefault();
        elementToFocus.focus();
    }
};
