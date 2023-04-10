import { useEffect } from 'react';

export const useInsertContainerInHtml = (container: HTMLElementTagNameMap[keyof HTMLElementTagNameMap]) => {
    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, [container]);
};
