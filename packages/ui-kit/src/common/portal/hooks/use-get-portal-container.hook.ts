import { useMemo } from 'react';

interface UseGetPortalContainerProps {
    htmlElementId: string | undefined;
    htmlTagName: keyof HTMLElementTagNameMap;
    htmlClassName: string | undefined;
}

export const useGetPortalContainer = ({ htmlElementId, htmlTagName, htmlClassName }: UseGetPortalContainerProps) => {
    return useMemo(() => {
        const container = document.createElement(htmlTagName);
        if (htmlElementId) {
            container.id = htmlElementId;
        }
        if (htmlClassName) {
            container.classList.add(htmlClassName);
        }
        return container;
    }, [htmlClassName, htmlElementId, htmlTagName]);
};
