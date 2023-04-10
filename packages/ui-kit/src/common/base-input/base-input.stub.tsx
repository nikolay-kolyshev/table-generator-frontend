import { DEFAULT_COMPONENT_TEXT } from '@/common';
import { BaseInput as UncontrolledBaseInput, BaseInputProps } from '@/common/base-input/base-input.component';
import { EInputPlaceholderColor, EInputSize, EInputType } from '@/common/base-input/base-input.types';
import React, { ReactText, useState } from 'react';

interface BaseInputStoryOption {
    animatedPlaceholder?: string;
    clearButton?: boolean;
    disabled?: boolean;
    info?: string;
    isPlaceholderAnimation?: boolean;
    mask?: string;
    maxLength?: number;
    passwordButton?: boolean;
    placeholder?: string;
    type?: string;
    title?: string;
    valid?: boolean;
    value?: string;
}

interface RenderBaseInputConfig {
    animatedPlaceholder?: string;
    clearButton?: boolean;
    disabled?: boolean;
    height?: EInputSize;
    hideSearchButtonOnFocus?: boolean;
    info?: string;
    isPlaceholderAnimation?: boolean;
    searchButton?: boolean;
    searchButtonDisabled?: boolean;
    maxLength?: number;
    passwordButton?: boolean;
    placeholder?: string;
    placeholderColor?: EInputPlaceholderColor;
    title?: string;
    type?: EInputType;
    valid?: boolean;
    value?: string;
    name: string;
    onSearch?(value: ReactText): void;
    renderTitle?(title: string, isValid: boolean): JSX.Element;
}

const BaseInput = ({ value, ...props }: BaseInputProps) => {
    const [state, setState] = useState(value !== undefined ? value : '');
    const handleChange = (event: { target: HTMLInputElement } | string) =>
        setState(typeof event !== 'string' ? event.target.value : event);

    return <UncontrolledBaseInput {...props} value={state} onChange={handleChange} />;
};

export const renderBaseInput = ({ placeholder = DEFAULT_COMPONENT_TEXT, ...props }: RenderBaseInputConfig) => (
    <BaseInput placeholder={placeholder} {...props} />
);

const option: BaseInputStoryOption = {
    animatedPlaceholder: '',
    disabled: false,
    info: '',
    isPlaceholderAnimation: false,
    placeholder: '',
    valid: true,
};

export const baseInputStories = [
    { name: 'Default', option },
    { name: 'Disabled', option: { ...option, disabled: true } },
    { name: 'Placeholder', option: { ...option, placeholder: 'Placeholder example' } },
    {
        name: 'Animated placeholder',
        option: { ...option, isPlaceholderAnimation: true, animatedPlaceholder: 'Placeholder example' },
    },
    {
        name: 'With title',
        option: { ...option, title: DEFAULT_COMPONENT_TEXT },
    },
    { name: 'With error', option: { ...option, valid: false } },
    { name: 'With info', option: { ...option, info: 'Info example' } },
];

export const customRenderTitle = (title: string) => <span>{title}</span>;
