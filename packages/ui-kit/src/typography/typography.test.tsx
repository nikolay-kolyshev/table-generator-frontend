import React from 'react';
import { screen } from '@testing-library/react';
import { Typography } from './typography.component';
import { renderWithTheme } from '@/common/tests.helpers';

describe('Typography component', () => {
    test('render test', () => {
        renderWithTheme(<Typography>text</Typography>);
        const typographyElement = screen.getByText(/text/i);
        expect(typographyElement).toBeInTheDocument();
    });
});
