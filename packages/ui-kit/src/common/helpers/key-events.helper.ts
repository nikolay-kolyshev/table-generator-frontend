export enum EKey {
    ArrowDown,
    ArrowUp,
    Enter,
    Escape,
}

export enum EKeyEventType {
    KeyDown = 'keydown',
    KeyUp = 'keyup',
}

export const keys: { [key in string]: EKey } = {
    ArrowDown: EKey.ArrowDown,
    ArrowUp: EKey.ArrowUp,
    Down: EKey.ArrowDown,
    Enter: EKey.Enter,
    Esc: EKey.Escape,
    Escape: EKey.Escape,
    Up: EKey.ArrowUp,
};

export function isKey(event: KeyboardEvent, key: EKey) {
    return keys[event.key] === key;
}
