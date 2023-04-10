import React, { useState } from 'react';
import { screen } from '@testing-library/react';
import { BaseInput as UncontrolledBaseInput, BaseInputProps } from './base-input.component';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@/common/tests.helpers';

describe('BaseInput component', () => {
    const BaseInput = ({ value, ...props }: BaseInputProps) => {
        const [state, setState] = useState(value !== undefined ? value : '');
        const handleChange = (event: { target: HTMLInputElement } | string) =>
            setState(typeof event !== 'string' ? event.target.value : event);

        return <UncontrolledBaseInput {...props} value={state} onChange={handleChange} />;
    };

    test('render test', () => {
        renderWithTheme(<BaseInput name="baseInput" placeholder="Base input" />);
        expect(screen.getByPlaceholderText('Base input')).toBeInTheDocument();
    });

    test('change value test', () => {
        renderWithTheme(<BaseInput name="baseInput" />);
        const baseInputElement = screen.getByRole('textbox');
        userEvent.type(baseInputElement, 'new value');
        expect(baseInputElement).toHaveValue('new value');
    });

    test('renderInput test', () => {
        const renderInput = () => {
            return <input type="text" />;
        };
        renderWithTheme(<BaseInput name="baseInput" renderInput={renderInput} />);
        expect(document.querySelector('[type="text"]')).toBeInTheDocument();
    });
});
