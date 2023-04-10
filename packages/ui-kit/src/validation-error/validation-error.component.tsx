import { validationErrorTypography } from '@/validation-error/validation-error.constants';
import { StyledErrorMessage } from '@/validation-error/validation-error.styles';
import { EValidationErrorTypographySize } from '@/validation-error/validation-error.types';
import React, { FC, HTMLAttributes, memo } from 'react';

export interface IValidationErrorProps extends HTMLAttributes<HTMLDivElement> {
    errorText?: string;
    isError: boolean;
    offsetRight?: number;
    typographySize?: EValidationErrorTypographySize;
}

export const validationErrorDefaultProps = {
    offsetRight: 0,
    typographySize: EValidationErrorTypographySize.Medium,
};

const ValidationErrorComponent: FC<IValidationErrorProps> = ({
    children,
    errorText,
    isError,
    className,
    offsetRight = validationErrorDefaultProps.offsetRight,
    typographySize = validationErrorDefaultProps.typographySize,
}) => (
    <div className={className}>
        {children}
        {isError && errorText && (
            <StyledErrorMessage
                offsetRight={offsetRight}
                variant={validationErrorTypography[typographySize]}
                element="p"
            >
                {errorText}
            </StyledErrorMessage>
        )}
    </div>
);

export const ValidationError = memo(ValidationErrorComponent);
