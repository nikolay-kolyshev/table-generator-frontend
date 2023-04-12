import { ComponentLabel } from '@/common';
import React from 'react';
import { PortalStub } from '@/common/portal/portal.stub';
import { Portal } from '@/common/portal';
import { darkTheme, lightTheme } from '@/theme/theme.constants';

export default {
    component: Portal,
    title: 'TechnicalComponent/Portal',
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                { name: 'white', value: lightTheme.colors.WhiteBg },
                { name: 'dark', value: darkTheme.colors.WhiteBg },
            ],
        },
    },
};

export const DefaultPortalStory = () => (
    <>
        <ComponentLabel>Портал</ComponentLabel>
        <PortalStub />
    </>
);
