import React, { Fragment } from 'react';
import { ETypographyStyle, ETypographyVariant } from '@/typography/typography.types';
import { Typography } from './typography.component';
import { LineBreaker } from '@/common/index.styles';
import { EColorVariant } from '@/theme/theme.types';
import { useTheme } from 'styled-components';

export const typographyElements: {
    [key in keyof Pick<
        JSX.IntrinsicElements,
        'a' | 'button' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'input' | 'p' | 'span'
    >]: keyof JSX.IntrinsicElements;
} = {
    a: 'a',
    button: 'button',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    input: 'input',
    p: 'p',
    span: 'span',
};

type BackgroundVariant = 'light' | 'dark';

export const storyBackground: { [key in BackgroundVariant]: string } = {
    dark: EColorVariant.Black,
    light: EColorVariant.WhiteBg,
};

type TypographyGuideOptions = {
    [key in ETypographyVariant]: {
        type: string;
        backgroundVariant: BackgroundVariant;
    };
};

export const typographyGuideOptions: TypographyGuideOptions = {
    [ETypographyVariant.Heading1Black]: { type: ETypographyStyle.Heading1, backgroundVariant: 'light' },
    [ETypographyVariant.Heading2Black]: { type: ETypographyStyle.Heading2, backgroundVariant: 'light' },
    [ETypographyVariant.Body1Black]: { type: ETypographyStyle.Body1, backgroundVariant: 'light' },
    [ETypographyVariant.Body2Black]: { type: ETypographyStyle.Body2, backgroundVariant: 'light' },
    [ETypographyVariant.Body2GrayscaleVariant1]: { type: ETypographyStyle.Body2, backgroundVariant: 'light' },
    [ETypographyVariant.Body2GrayscaleVariant2]: { type: ETypographyStyle.Body2, backgroundVariant: 'light' },
    [ETypographyVariant.Label1WhiteText]: { type: ETypographyStyle.Label1, backgroundVariant: 'dark' },
    [ETypographyVariant.Label2WhiteText]: { type: ETypographyStyle.Label1, backgroundVariant: 'dark' },
    [ETypographyVariant.UnderlinedLabel1Secondary]: { type: ETypographyStyle.Label1, backgroundVariant: 'light' },
    [ETypographyVariant.UnderlinedLabel1SecondaryDanger]: { type: ETypographyStyle.Label1, backgroundVariant: 'light' },
    [ETypographyVariant.Caption1Danger]: { type: ETypographyStyle.Caption1, backgroundVariant: 'light' },
};

export function renderTypographyGuide(guideOptions: TypographyGuideOptions) {
    let previousType: string;

    return Object.entries(guideOptions).map(([variant, { type, backgroundVariant }], index) => {
        const needLineBreaker = index > 0 && previousType !== type;
        previousType = type;
        const theme = useTheme();
        return (
            <Fragment key={`${index}-${type}`}>
                {needLineBreaker && <LineBreaker />}
                <Typography
                    variant={variant as ETypographyVariant}
                    element="p"
                    style={{ backgroundColor: theme.colors[storyBackground[backgroundVariant]] }}
                >
                    {variant}
                </Typography>
            </Fragment>
        );
    });
}
