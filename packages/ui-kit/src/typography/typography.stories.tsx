import { DEFAULT_COMPONENT_TEXT } from '@/common';
import { Typography, typographyDefaultProps } from '@/typography/typography.component';
import {
    renderTypographyGuide,
    typographyElements,
    typographyGuideOptions,
} from '@/typography/typography.stub';
import React from 'react';
import { lightTheme } from '@/theme/theme.constants';

export default {
    title: 'Components/Typography',
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                { name: 'white', value: lightTheme.colors.WhiteText },
                { name: 'darkorange', value: '#e68a00' },
            ],
        },
    },
};

export const TypographyDefaultStory = () => (
    <Typography element={typographyElements.span} variant={typographyDefaultProps.variant}>
        {DEFAULT_COMPONENT_TEXT}
    </Typography>
);

export const TypographyGuideStory = () => renderTypographyGuide(typographyGuideOptions);


export const TypographyElementStory = () => (
    <>
        <Typography variant={typographyDefaultProps.variant}>p</Typography>
        <Typography variant={typographyDefaultProps.variant} element="button">
            button
        </Typography>
    </>
);

TypographyGuideStory.parameters = {
    a11y: {
        options: {
            rules: {
                'color-contrast': { enabled: false },
            },
        },
    },
};
