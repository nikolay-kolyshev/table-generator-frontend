import {
    ETypographyColor,
    ETypographyFontFamily,
    ETypographyFontWeight,
    ETypographyStyle,
    ETypographyVariant,
} from '@/typography/typography.types';
import { EColorVariant } from '@/theme/theme.types';

export const typographyFontFamilies: { [key in ETypographyFontFamily]: string } = {
    [ETypographyFontFamily.Roboto]: 'Roboto, sans-serif',
};

export const typographyFontWeights: { [key in ETypographyFontWeight]: string } = {
    [ETypographyFontWeight.Bold]: '700',
    [ETypographyFontWeight.Regular]: '400',
};

export const typographyColors: { [key in ETypographyColor]: EColorVariant } = {
    [ETypographyColor.Black]: EColorVariant.Black,
    [ETypographyColor.WhiteText]: EColorVariant.WhiteText,
    [ETypographyColor.Secondary]: EColorVariant.Secondary,
    [ETypographyColor.GrayscaleVariant1]: EColorVariant.GrayscaleVariant1,
    [ETypographyColor.GrayscaleVariant2]: EColorVariant.GrayscaleVariant2,
    [ETypographyColor.GrayscaleVariant7]: EColorVariant.GrayscaleVariant7,
    [ETypographyColor.PrimaryDanger]: EColorVariant.PrimaryDanger,
    [ETypographyColor.SecondaryDanger]: EColorVariant.SecondaryDanger,
};

interface TypographyStyleProps {
    fontFamily: ETypographyFontFamily;
    fontSize: string;
    fontWeight: ETypographyFontWeight;
    lineHeight: string;
    letterSpacing: string;
    textTransform: string;
    textDecoration: string;
    fontStyle: string;
}

interface TypographyVariantProps extends TypographyStyleProps {
    color: ETypographyColor;
}

const getTypographyVariant = (
    typographyStyle: ETypographyStyle,
    typographyColor: ETypographyColor,
): TypographyVariantProps => ({
    color: typographyColor,
    ...typographyStyles[typographyStyle],
});

const getTypographyStyles = (
    fontSize: string,
    lineHeight: string,
    letterSpacing = 'normal',
    fontFamily = ETypographyFontFamily.Roboto,
    fontWeight = ETypographyFontWeight.Regular,
    textTransform = 'none',
    textDecoration = 'none',
    fontStyle = 'normal',
): TypographyStyleProps => ({
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    textTransform,
    textDecoration,
    fontStyle,
});

const typographyStyles: { [key in ETypographyStyle]: TypographyStyleProps } = {
    Heading1: getTypographyStyles('50px', '50px', 'normal', ETypographyFontFamily.Roboto, ETypographyFontWeight.Bold),
    Heading2: getTypographyStyles('32px', '32px', 'normal', ETypographyFontFamily.Roboto, ETypographyFontWeight.Bold),

    Body1: getTypographyStyles(
        '14px',
        '14.06px',
        'normal',
        ETypographyFontFamily.Roboto,
        ETypographyFontWeight.Regular,
    ),
    Body2: getTypographyStyles(
        '12px',
        '14.06px',
        'normal',
        ETypographyFontFamily.Roboto,
        ETypographyFontWeight.Regular,
    ),

    Label1: getTypographyStyles(
        '12px',
        '14.06px',
        'normal',
        ETypographyFontFamily.Roboto,
        ETypographyFontWeight.Bold,
        'uppercase',
    ),
    Label2: getTypographyStyles(
        '12px',
        '14.06px',
        'normal',
        ETypographyFontFamily.Roboto,
        ETypographyFontWeight.Regular,
    ),

    UnderlinedLabel1: getTypographyStyles(
        '12px',
        '14.06px',
        'normal',
        ETypographyFontFamily.Roboto,
        ETypographyFontWeight.Regular,
        'none',
        'underline',
    ),

    Caption1: getTypographyStyles(
        '12px',
        '14.06px',
        'normal',
        ETypographyFontFamily.Roboto,
        ETypographyFontWeight.Regular,
        'none',
        'none',
        'italic',
    ),
};

export const typographyVariants: {
    [key in ETypographyVariant]: TypographyVariantProps;
} = {
    Heading1Black: getTypographyVariant(ETypographyStyle.Heading1, ETypographyColor.Black),
    Heading2Black: getTypographyVariant(ETypographyStyle.Heading2, ETypographyColor.Black),
    Body1Black: getTypographyVariant(ETypographyStyle.Body1, ETypographyColor.Black),
    Body2Black: getTypographyVariant(ETypographyStyle.Body2, ETypographyColor.Black),
    Body2GrayscaleVariant1: getTypographyVariant(ETypographyStyle.Body2, ETypographyColor.GrayscaleVariant1),
    Body2GrayscaleVariant2: getTypographyVariant(ETypographyStyle.Body2, ETypographyColor.GrayscaleVariant2),
    Label1WhiteText: getTypographyVariant(ETypographyStyle.Label1, ETypographyColor.WhiteText),
    Label2WhiteText: getTypographyVariant(ETypographyStyle.Label2, ETypographyColor.WhiteText),
    UnderlinedLabel1Secondary: getTypographyVariant(ETypographyStyle.UnderlinedLabel1, ETypographyColor.Secondary),
    UnderlinedLabel1SecondaryDanger: getTypographyVariant(
        ETypographyStyle.UnderlinedLabel1,
        ETypographyColor.SecondaryDanger,
    ),
    Caption1Danger: getTypographyVariant(ETypographyStyle.Caption1, ETypographyColor.PrimaryDanger),
};
