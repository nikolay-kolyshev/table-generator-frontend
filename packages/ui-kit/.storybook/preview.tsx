import * as React from 'react';
import { deviceSize } from '../src/common/grid/device-size.constants';
import './storybook-global.css';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { Preview } from '@storybook/react';
import { StyledStorybookLayout, StyledStoryTitle } from '../src/common/index.styles';
import { EColorVariant } from '../src/theme/theme.types';
import { lightTheme, darkTheme } from '../src/theme/theme.constants';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const preview: Preview = {
    decorators: [
        (Story, context) => (
            <StyledStorybookLayout
                withoutMargin={context.parameters.withoutMargin as boolean}
                withoutPadding={context.parameters.withoutPadding as boolean}
                backgroundColor={context.parameters.backgroundColor as typeof EColorVariant}
            >
                <StyledStoryTitle>{context.name}</StyledStoryTitle>
                <Story />
            </StyledStorybookLayout>
        ),
        withThemeFromJSXProvider({
            themes: {
                light: lightTheme,
                dark: darkTheme,
            },
            defaultTheme: 'light',
            Provider: ThemeProvider,
            GlobalStyles,
        }),
    ],
    parameters: {
        viewport: {
            viewports: {
                desktop: {
                    name: 'Desktop 1312',
                    styles: {
                        width: `${deviceSize.desktop.width}px`,
                        height: '100%',
                    },
                    type: 'desktop',
                },
                tablet: {
                    name: 'Tablet 1020',
                    styles: {
                        width: `${deviceSize.tablet.width}px`,
                        height: `${deviceSize.tablet.height}px`,
                    },
                    type: 'tablet',
                },
                mobile: {
                    name: 'Mobile 320',
                    styles: {
                        width: `${deviceSize.mobile.width}px`,
                        height: `${deviceSize.mobile.height}px`,
                    },
                    type: 'mobile',
                },
            },
        },
        docs: {
            container: DocsContainer,
            page: DocsPage,
        },
    },
};

export default preview;
