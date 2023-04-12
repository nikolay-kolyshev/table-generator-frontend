import {
    StyledBaseInput,
    StyledBaseInputContainer,
    StyledBaseInputLabel,
    StyledBaseInputWrapper,
    StyledInputWrapper,
} from '@/common/base-input/base-input.styles';
import {
    EInputAutocomplete,
    EInputPlaceholderColor,
    EInputSize,
    EInputType,
} from '@/common/base-input/base-input.types';
import { ETextControlFocusState } from '@/common/text-control/text-control.types';
import React, {
    ChangeEvent,
    ClipboardEvent,
    KeyboardEvent,
    memo,
    MutableRefObject,
    ReactText,
    useCallback,
    useState,
} from 'react';
import { ETypographyVariant } from '@/typography/typography.types';

function scrollInputsAfterKeyboardAppears(inputElement: HTMLInputElement) {
    const isAndroid = navigator.userAgent !== '' && navigator.userAgent.includes('Android');

    if (isAndroid) {
        setTimeout(() => inputElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' }), 400);
    }
}

export interface BaseInputProps {
    disabled?: boolean;
    placeholder?: string;
    maxLength?: number;
    autoComplete?: EInputAutocomplete;
    placeholderColor?: EInputPlaceholderColor;
    shouldInputBeScrolled?: boolean;
    typographyVariant?: ETypographyVariant;
    value?: ReactText;
    title?: string;
    valid?: boolean;
    name: string;
    height?: EInputSize;
    isEllipsis?: boolean;
    isErrorInPriority?: boolean;
    className?: string;
    type?: string;
    inputRef?: MutableRefObject<HTMLInputElement | null>;
    isAutoFilled?: boolean;
    noBorder?: boolean;
    renderTitle?(title: string, isValid: boolean): JSX.Element;
    onChange?(value: string, event?: ChangeEvent<HTMLInputElement>): void;
    onFocus?(): void;
    onBlur?(): void;
    onClick?(): void;
    onKeyDown?(event: KeyboardEvent): void;
    onPaste?(event: ClipboardEvent): void;
    onSearch?(value: ReactText): void;
    onClear?(): void;
    onEnterPress?(): void;
    onShowPasswordClick?(): void;
    renderInput?(props: BaseInputProps, commonProps: BaseInputCommonProps): JSX.Element;
}

export interface BaseInputCommonProps {
    id: string;
    maxLength?: number;
    name: string;
    autoComplete?: EInputAutocomplete;
    placeholder?: string;
    type?: string;
    value?: string | ReactText;
    onChange?(event: ChangeEvent<HTMLInputElement>): void;
    onFocus?(): void;
    onBlur?(): void;
    onClick?(): void;
    onKeyDown?(event: KeyboardEvent): void;
    onKeyUp?(event: KeyboardEvent): void;
}

export const baseInputDefaultProps: Partial<BaseInputProps> = {
    disabled: false,
    height: EInputSize.Medium,
    isAutoFilled: false,
    isEllipsis: true,
    isErrorInPriority: false,
    placeholderColor: EInputPlaceholderColor.GrayscaleVariant2,
    shouldInputBeScrolled: true,
    type: EInputType.Text,
    typographyVariant: ETypographyVariant.Body2Black,
    valid: true,
    value: '',
};

const BaseInputComponent = (props: BaseInputProps) => {
    const {
        shouldInputBeScrolled = baseInputDefaultProps.shouldInputBeScrolled,
        placeholder,
        placeholderColor = baseInputDefaultProps.placeholderColor,
        value = baseInputDefaultProps.value,
        valid = baseInputDefaultProps.valid,
        height = baseInputDefaultProps.height,
        isEllipsis = baseInputDefaultProps.isEllipsis,
        isErrorInPriority = baseInputDefaultProps.isErrorInPriority,
        type = baseInputDefaultProps.type,
        typographyVariant = baseInputDefaultProps.typographyVariant,
        inputRef,
        onChange,
        onFocus,
        onBlur,
        onPaste,
        onEnterPress,
        renderInput,
        name,
        maxLength,
        autoComplete,
        className,
        onKeyDown,
        onClick,
    } = props;

    const [focusState, setFocusState] = useState(ETextControlFocusState.Out);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(event.target.value, event);
            }
        },
        [onChange],
    );

    const handleBlur = useCallback(() => {
        if (onBlur) {
            onBlur();
        }
        setFocusState(ETextControlFocusState.Out);
    }, [onBlur]);

    const handleEnterPress = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Enter' && onEnterPress) {
                onEnterPress();
                setFocusState(ETextControlFocusState.Out);
            }
        },
        [onEnterPress],
    );

    const handleFocus = useCallback(() => {
        if (onFocus) {
            onFocus();
        }

        if (shouldInputBeScrolled && inputRef && inputRef.current) {
            scrollInputsAfterKeyboardAppears(inputRef.current);
        }

        setFocusState(ETextControlFocusState.In);
    }, [inputRef, onFocus, shouldInputBeScrolled]);

    const commonProps: BaseInputCommonProps = {
        autoComplete,
        id: name,
        maxLength,
        name,
        onBlur: handleBlur,
        onChange: handleChange,
        onFocus: handleFocus,
        onKeyUp: handleEnterPress,
        placeholder,
        type,
        value,
        onClick,
        onKeyDown,
    };

    return (
        <StyledBaseInputLabel className={className}>
            <StyledBaseInputWrapper>
                <StyledBaseInputContainer
                    height={height ?? EInputSize.Medium}
                    type={type ?? EInputType.Text}
                    focusState={focusState}
                    valid={valid ?? true}
                    placeholderColor={placeholderColor}
                    isErrorInPriority={Boolean(isErrorInPriority)}
                    onPaste={onPaste}
                >
                    {renderInput ? (
                        renderInput(props, commonProps)
                    ) : (
                        <StyledInputWrapper isEllipsis={isEllipsis}>
                            <StyledBaseInput
                                ref={inputRef}
                                variant={typographyVariant}
                                element="input"
                                {...commonProps}
                            />
                        </StyledInputWrapper>
                    )}
                </StyledBaseInputContainer>
            </StyledBaseInputWrapper>
        </StyledBaseInputLabel>
    );
};

export const BaseInput = memo(BaseInputComponent);
