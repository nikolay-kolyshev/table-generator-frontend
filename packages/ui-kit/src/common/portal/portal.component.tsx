import React, { PropsWithChildren } from 'react';
import { PortalTypes } from '@/common/portal/portal.types';
import { createPortal } from 'react-dom';
import { useGetPortalContainer } from '@/common/portal/hooks/use-get-portal-container.hook';
import { useInsertContainerInHtml } from '@/common/portal/hooks/use-insert-container-in-html.hook';

export const Portal: React.FC<PropsWithChildren<PortalTypes>> = React.memo(
    ({ children, htmlElementId, htmlClassName, htmlTagName = 'div' }) => {
        const container = useGetPortalContainer({ htmlElementId, htmlTagName, htmlClassName });

        useInsertContainerInHtml(container);

        return createPortal(children, container);
    },
);
