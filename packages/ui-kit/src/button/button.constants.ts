import { EButtonColor, EButtonHeight, EButtonVariant, IButtonVariantType } from '@/button/button.types';
import {EColorVariant} from '@/theme/theme.types';
import { ETypographyVariant } from '@/typography/typography.types';

export const buttonColors: { [key in EButtonColor]: string } = {
    [EButtonColor.Primary]: EButtonColor.Primary,
    [EButtonColor.GrayscaleVariant3]: EColorVariant.GrayscaleVariant3,
    [EButtonColor.Crystal]: 'transparent',
};

export const buttonHoverColors: { [key in EButtonColor]: string } = {
    [EButtonColor.Primary]: EColorVariant.PrimaryHover,
    [EButtonColor.GrayscaleVariant3]: EColorVariant.GrayscaleVariant3,
    [EButtonColor.Crystal]: 'transparent',
};

export const buttonHeights: { [key in EButtonHeight]: string } = {
    [EButtonHeight.Medium]: '42px',
    [EButtonHeight.Small]: '24px',
    [EButtonHeight.ExtraSmall]: '14px',
    [EButtonHeight.Auto]: 'auto',
};

export const buttonVariants: {
    [key in EButtonVariant]: IButtonVariantType;
} = {
    [EButtonVariant.PrimaryMedium]: {
        color: EButtonColor.Primary,
        disabled: {
            color: EButtonColor.GrayscaleVariant3,
        },
        height: EButtonHeight.Medium,
        typographyVariant: ETypographyVariant.Label1WhiteText,
    },
    [EButtonVariant.PrimarySmall]: {
        color: EButtonColor.Primary,
        disabled: {
            color: EButtonColor.GrayscaleVariant3,
        },
        height: EButtonHeight.Small,
            typographyVariant: ETypographyVariant.Label2WhiteText,
    },
    [EButtonVariant.SecondaryUnderlinedSmall]: {
        color: EButtonColor.Crystal,
        disabled: {
            color: EButtonColor.Crystal,
        },
        height: EButtonHeight.ExtraSmall,
            typographyVariant: ETypographyVariant.UnderlinedLabel1Secondary,
        isTextButton: true,
    },
    [EButtonVariant.DangerUnderlinedSmall]: {
        color: EButtonColor.Crystal,
        disabled: {
            color: EButtonColor.Crystal,
        },
        height: EButtonHeight.ExtraSmall,
            typographyVariant: ETypographyVariant.UnderlinedLabel1SecondaryDanger,
        isTextButton: true,
    },
    [EButtonVariant.CrystalExtraSmall]: {
        color: EButtonColor.Crystal,
        disabled: {
            color: EButtonColor.Crystal,
        },
        height: EButtonHeight.Small,
            typographyVariant: ETypographyVariant.Body1Black,
    },
};
