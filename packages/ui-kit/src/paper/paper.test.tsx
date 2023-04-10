import React from 'react';
import { Paper, EPaperPadding } from '@';
import { screen } from '@testing-library/react';
import { PaperProps } from '@/paper/paper.component';
import { renderWithTheme } from '@/common/tests.helpers';

const DefaultPaper = (props: PaperProps) => <Paper {...props}>test_paper</Paper>;

describe('paper component tests', () => {
    it('should be render', () => {
        renderWithTheme(<DefaultPaper />);
        expect(screen.getByText('test_paper')).toBeInTheDocument();
    });

    it('should be render with element', () => {
        const { container } = renderWithTheme(<DefaultPaper element="section" />);
        expect(container.querySelector('section')).toBeInTheDocument();
    });

    it('should be render without vertical padding', () => {
        renderWithTheme(<DefaultPaper disableVerticalPaddings padding={EPaperPadding.Medium} />);
        expect(screen.getByText('test_paper')).toHaveStyle({
            'padding-top': '24px',
            'padding-bottom': '24px',
            'padding-left': '0px',
            'padding-right': '0px',
        });
    });
});
