import { ComponentLabel, DEFAULT_COMPONENT_TEXT } from '@/common';
import { ValidationError, validationErrorDefaultProps } from '@/validation-error/validation-error.component';
import { EValidationErrorTypographySize } from '@/validation-error/validation-error.types';
import React from 'react';

export default {
    parameters: {
        a11y: {
            options: {
                rules: {
                    'color-contrast': { enabled: false },
                    label: { enabled: false },
                },
            },
        },
    },
    title: 'Components/Validation Error',
};

export const DefaultValidationErrorStory = () => (
    <ValidationError
        isError={true}
        errorText={DEFAULT_COMPONENT_TEXT}
        typographySize={validationErrorDefaultProps.typographySize}
    >
        <input name="defaultValidationError" placeholder={DEFAULT_COMPONENT_TEXT} />
    </ValidationError>
);

export const ValidationErrorIsErrorStory = () => (
    <>
        <ComponentLabel>false</ComponentLabel>
        <ValidationError isError={false}>
            <input name="validationErrorWithoutError" placeholder={DEFAULT_COMPONENT_TEXT} />
        </ValidationError>
        <ComponentLabel>true</ComponentLabel>
        <ValidationError isError={true} errorText={DEFAULT_COMPONENT_TEXT}>
            <input name="validationErrorWithError" placeholder={DEFAULT_COMPONENT_TEXT} />
        </ValidationError>
    </>
);

export const ValidationErrorTypographySizeStory = () => (
    <>
        <ComponentLabel>{EValidationErrorTypographySize.Medium}</ComponentLabel>
        <ValidationError
            isError={true}
            errorText={DEFAULT_COMPONENT_TEXT}
            typographySize={EValidationErrorTypographySize.Medium}
        >
            <input name="validationErrorWithoutError" placeholder={DEFAULT_COMPONENT_TEXT} />
        </ValidationError>
    </>
);
