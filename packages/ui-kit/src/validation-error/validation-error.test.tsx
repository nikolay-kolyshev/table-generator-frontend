import React from 'react';
import {screen} from '@testing-library/react';
import {ValidationError, IValidationErrorProps} from '@/validation-error/validation-error.component';
import {DEFAULT_COMPONENT_TEXT} from '@/common';
import {EValidationErrorTypographySize} from './validation-error.types';
import {lightTheme} from '@/theme/theme.constants';
import {renderWithTheme} from '@/common/tests.helpers';

describe('ValidationError tests', () => {
    const mockProps: IValidationErrorProps = {
        errorText: DEFAULT_COMPONENT_TEXT,
        isError: true,
    };

    it('should be render', () => {
        renderWithTheme(<ValidationError {...mockProps} />);
        expect(screen.getByText(DEFAULT_COMPONENT_TEXT)).toBeInTheDocument();
        expect(screen.getByText(DEFAULT_COMPONENT_TEXT)).toHaveStyle(`color: ${lightTheme.colors.PrimaryDanger}`);
    });

    it('should have correct font size', () => {
        renderWithTheme(
            <ValidationError {...mockProps} typographySize={EValidationErrorTypographySize.Medium} />,
        );
        expect(screen.getByText(DEFAULT_COMPONENT_TEXT)).toHaveStyle(`font-size: 14px`);
        expect(screen.getByText(DEFAULT_COMPONENT_TEXT)).toHaveStyle(`font-size: 16px`);
    });
});
