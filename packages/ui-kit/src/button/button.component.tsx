import { buttonVariants } from '@/button/button.constants';
import { StyledButton } from '@/button/button.styles';
import { EButtonVariant } from '@/button/button.types';
import { useFocusOnInit } from '@/common/hooks/use-focus-on-init.hook';
import React, {
    ButtonHTMLAttributes,
    FocusEvent,
    memo,
    PropsWithChildren,
    useCallback,
    useMemo,
    useRef,
    useState,
    forwardRef,
} from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    focusedOnInit?: boolean;
    disabled?: boolean;
    responsive?: boolean;
    variant?: EButtonVariant;
    isIconButton?: boolean;
    withoutHover?: boolean;
}

export const buttonDefaultProps = {
    disabled: false,
    focusedOnInit: false,
    responsive: false,
    variant: EButtonVariant.PrimaryMedium,
};

export const ButtonComponent = forwardRef(
    (
        {
            children,
            responsive = buttonDefaultProps.responsive,
            disabled = buttonDefaultProps.disabled,
            variant = buttonDefaultProps.variant,
            focusedOnInit = buttonDefaultProps.focusedOnInit,
            isIconButton,
            withoutHover,
            ...props
        }: PropsWithChildren<IButtonProps>,
        ref: React.MutableRefObject<HTMLButtonElement | null>,
    ) => {
        const [isFocusDisabled, setIsFocusDisabled] = useState(focusedOnInit);
        const { onBlur } = props;
        const localRef = useRef<HTMLButtonElement | null>(null);
        const buttonRef = ref || localRef;
        useFocusOnInit(buttonRef, focusedOnInit);

        const { buttonVariant, typographyVariant } = useMemo(() => {
            const currentVariant = buttonVariants[variant];

            return {
                buttonVariant: currentVariant,
                typographyVariant:
                    disabled && currentVariant.disabled.typographyVariant !== undefined
                        ? currentVariant.disabled.typographyVariant
                        : currentVariant.typographyVariant,
            };
        }, [variant, disabled]);

        const handleBlur = useCallback(
            (event: FocusEvent<HTMLButtonElement>) => {
                setIsFocusDisabled(false);
                onBlur?.(event);
            },
            [onBlur],
        );

        return (
            <StyledButton
                {...props}
                element="button"
                buttonVariant={buttonVariant}
                disabled={disabled}
                responsive={responsive}
                variant={typographyVariant}
                ref={buttonRef}
                isFocusDisabled={isFocusDisabled}
                onBlur={handleBlur}
                isIconButton={isIconButton}
                withoutHover={withoutHover}
            >
                {children}
            </StyledButton>
        );
    },
);

export const Button = memo(ButtonComponent);
