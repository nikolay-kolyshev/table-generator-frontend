import { EColorVariant, EShadowVariant, ITheme, TThemeColors, TThemeShadows, EThemeVariant } from '@/theme/theme.types';
import { hex2rgba } from '@/common/helpers/hex-to-rgba.helper';

export const darkThemeColors: TThemeColors = {
    [EColorVariant.Primary]: '#1193FF',
    [EColorVariant.Secondary]: '#057AE3',
    [EColorVariant.SecondaryDark]: '#0A508B',
    [EColorVariant.PrimaryDanger]: '#EB5E58',
    [EColorVariant.SecondaryDanger]: '#B0263D',
    [EColorVariant.PrimaryHover]: '#4AAFFF',
    [EColorVariant.GrayscaleVariant1]: '#2F2F2F',
    [EColorVariant.GrayscaleVariant2]: '#4B4B4F',
    [EColorVariant.GrayscaleVariant3]: '#5B6162',
    [EColorVariant.GrayscaleVariant4]: '#535558',
    [EColorVariant.GrayscaleVariant5]: '#6F7B8D',
    [EColorVariant.GrayscaleVariant6]: '#454545',
    [EColorVariant.GrayscaleVariant7]: '#CDCEE1',
    [EColorVariant.WhiteText]: '#000000',
    [EColorVariant.WhiteBg]: '#000000',
    [EColorVariant.Black]: '#FFFFFF',
    [EColorVariant.Background]: '#222224',
};

export const darkThemeShadows: TThemeShadows = {
    [EShadowVariant.LowShadow]: `0px 1px 0px ${darkThemeColors.GrayscaleVariant6}`,
    [EShadowVariant.MediumShadow]: `0px 2px 8px ${hex2rgba(darkThemeColors.Black, 0.08)}`,
    [EShadowVariant.HardShadow]: `0px 4px 4px ${hex2rgba(darkThemeColors.Black, 0.15)}`,
};

export const lightThemeColors: TThemeColors = {
    [EColorVariant.Primary]: '#1193FF',
    [EColorVariant.Secondary]: '#057AE3',
    [EColorVariant.SecondaryDark]: '#0A508B',
    [EColorVariant.PrimaryDanger]: '#EB5E58',
    [EColorVariant.SecondaryDanger]: '#B0263D',
    [EColorVariant.PrimaryHover]: '#4AAFFF',
    [EColorVariant.GrayscaleVariant1]: hex2rgba('#FFFFFF', 0.5),
    [EColorVariant.GrayscaleVariant2]: '#868A8D',
    [EColorVariant.GrayscaleVariant3]: '#C2CBD1',
    [EColorVariant.GrayscaleVariant4]: '#E6ECEF',
    [EColorVariant.GrayscaleVariant5]: '#6F7B8D',
    [EColorVariant.GrayscaleVariant6]: '#EBEBEB',
    [EColorVariant.GrayscaleVariant7]: '#212229',
    [EColorVariant.WhiteText]: '#FFFFFF',
    [EColorVariant.WhiteBg]: '#FFFFFF',
    [EColorVariant.Black]: '#000000',
    [EColorVariant.Background]: '#E5E8ED',
};

export const lightThemeShadows: TThemeShadows = {
    [EShadowVariant.LowShadow]: `0px 1px 0px ${lightThemeColors.GrayscaleVariant6}`,
    [EShadowVariant.MediumShadow]: `0px 2px 8px ${hex2rgba(lightThemeColors.Black, 0.8)}`,
    [EShadowVariant.HardShadow]: `0px 4px 4px ${hex2rgba(lightThemeColors.Black, 0.15)}`,
};

export const lightTheme: ITheme = {
    name: EThemeVariant.Light,
    colors: lightThemeColors,
    shadows: lightThemeShadows,
};

export const darkTheme: ITheme = {
    name: EThemeVariant.Dark,
    colors: darkThemeColors,
    shadows: darkThemeShadows,
};
