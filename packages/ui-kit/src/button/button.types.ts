import { ETypographyVariant } from '@/typography/typography.types';
export type { IButtonProps } from './button.component';
export enum EButtonHeight {
    Medium = 'Medium',
    Small = 'Small',
    ExtraSmall = 'ExtraSmall',
    Auto = 'Auto',
}

export enum EButtonColor {
    Primary = 'Primary',
    Crystal = 'Crystal',
    GrayscaleVariant3 = 'GrayscaleVariant3',
}

export enum EButtonVariant {
    PrimaryMedium = 'PrimaryMedium',
    PrimarySmall = 'PrimarySmall',
    SecondaryUnderlinedSmall = 'SecondaryUnderlinedSmall',
    DangerUnderlinedSmall = 'DangerUnderlinedSmall',
    CrystalExtraSmall = 'CrystalExtraSmall',
}

export interface IButtonVariantType {
    color: EButtonColor;
    typographyVariant: ETypographyVariant;
    height: EButtonHeight;
    disabled: {
        color: EButtonColor;
        typographyVariant?: ETypographyVariant;
        borderColor?: EButtonColor;
        icon?: string;
    };
    isTextButton?: boolean;
    isSmall?: boolean;
}
