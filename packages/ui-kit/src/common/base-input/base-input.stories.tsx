import { ComponentLabel, DEFAULT_COMPONENT_TEXT } from '@/common';
import { baseInputDefaultProps } from '@/common/base-input/base-input.component';
import { renderBaseInput } from '@/common/base-input/base-input.stub';
import { StyledValidationWrapper } from '@/common/base-input/base-input.styles';
import { EInputPlaceholderColor, EInputSize, EInputType } from '@/common/base-input/base-input.types';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { lightTheme } from '@/theme/theme.constants';

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
        backgrounds: {
            default: 'white',
            values: [
                { name: 'white', value: lightTheme.colors.WhiteBg },
                { name: 'facebook', value: '#3b5998' },
            ],
        },
    },
    title: 'Components/Base Input',
};

export const DefaultBaseInputStory = () =>
    renderBaseInput({
        height: baseInputDefaultProps.height,
        info: '',
        name: 'baseInputDefault',
        onSearch: action('onSearch'),
        placeholder: '',
        placeholderColor: baseInputDefaultProps.placeholderColor,
        type: EInputType.Text,
        valid: baseInputDefaultProps.valid,
    });

export const BaseInputPlaceholderStory = () =>
    renderBaseInput({ placeholder: DEFAULT_COMPONENT_TEXT, name: 'baseInputPlaceholder' });

export const BaseInputPlaceholderColorStory = () => (
    <>
        {renderBaseInput({
            name: 'baseInputWithColorPlaceholder',
            placeholder: EInputPlaceholderColor.GrayscaleVariant2,
            placeholderColor: EInputPlaceholderColor.GrayscaleVariant2,
        })}
    </>
);

export const BaseInputValueStory = () => renderBaseInput({ value: DEFAULT_COMPONENT_TEXT, name: 'baseInputValue' });

export const BaseInputTypeStory = () => (
    <>
        <ComponentLabel>{EInputType.Text}</ComponentLabel>
        {renderBaseInput({
            name: 'baseInputTypeText',
            type: EInputType.Text,
            value: DEFAULT_COMPONENT_TEXT,
        })}
        <ComponentLabel>{EInputType.Text}</ComponentLabel>
        {renderBaseInput({ type: EInputType.Text, value: DEFAULT_COMPONENT_TEXT, name: 'baseInputTypeText' })}
    </>
);

export const BaseInputValidStory = () => (
    <>
        <ComponentLabel>true</ComponentLabel>
        {renderBaseInput({ valid: true, name: 'baseInputValid' })}
        <ComponentLabel>false</ComponentLabel>
        {renderBaseInput({ valid: false, name: 'baseInputInvalid' })}
        <ComponentLabel>false with error message</ComponentLabel>
        <StyledValidationWrapper isError={true} errorText="Error example">
            {renderBaseInput({ valid: false, name: 'baseInputErrorMessage' })}
        </StyledValidationWrapper>
    </>
);

export const BaseInputHeightStory = () => (
    <>
        <ComponentLabel>{EInputSize.Medium}</ComponentLabel>
        {renderBaseInput({ height: EInputSize.Medium, name: 'baseInputHeightMedium' })}
    </>
);
