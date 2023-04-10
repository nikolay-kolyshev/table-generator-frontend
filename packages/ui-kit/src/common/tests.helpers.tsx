import React, { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/theme/theme.constants';
import { render } from '@testing-library/react';

export const withThemeProvider = (children: ReactNode) => <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;

export const renderWithTheme = (component: ReactElement) => render(withThemeProvider(component));
