import { MOCK_PORTAL_CONTENT_TEXT, MOCK_PORTAL_PROPS } from '@/common/portal/portal.mock';
import { Portal } from '@/common/portal/portal.component';
import React from 'react';

export const PortalStub = () => {
    return (
        <Portal {...MOCK_PORTAL_PROPS}>
            <div>
                <h3>{MOCK_PORTAL_CONTENT_TEXT}</h3>
            </div>
        </Portal>
    );
};
