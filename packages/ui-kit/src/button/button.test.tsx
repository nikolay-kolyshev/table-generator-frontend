import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { Button } from './button.component';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@/common/tests.helpers';

describe('Button component', () => {
    const text = 'click me';
    const handleClick = jest.fn();

    test('render test', () => {
        renderWithTheme(<Button>{text}</Button>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('onClick test', () => {
        renderWithTheme(<Button onClick={handleClick}>{text}</Button>);
        userEvent.click(screen.getByText(text));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('disabled test', () => {
        jest.resetAllMocks();
        renderWithTheme(
            <Button disabled onClick={handleClick}>
                {text}
            </Button>,
        );
        expect(screen.getByText(text)).toBeDisabled();
        expect(handleClick).toHaveBeenCalledTimes(0);
    });

    test('focus test', () => {
        renderWithTheme(<Button focusedOnInit>{text}</Button>);
        waitFor(() => expect(screen.getByText(text)).toHaveFocus(), { timeout: 150 });
    });
});
