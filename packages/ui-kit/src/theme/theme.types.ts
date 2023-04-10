export enum EColorVariant {
    Primary = 'Primary',
    Secondary = 'Secondary',
    SecondaryDark = 'SecondaryDark',
    PrimaryDanger = 'PrimaryDanger',
    SecondaryDanger = 'SecondaryDanger',
    PrimaryHover = 'PrimaryHover',
    GrayscaleVariant1 = 'GrayscaleVariant1',
    GrayscaleVariant2 = 'GrayscaleVariant2',
    GrayscaleVariant3 = 'GrayscaleVariant3',
    GrayscaleVariant4 = 'GrayscaleVariant4',
    GrayscaleVariant5 = 'GrayscaleVariant5',
    GrayscaleVariant6 = 'GrayscaleVariant6',
    GrayscaleVariant7 = 'GrayscaleVariant7',
    WhiteText = 'WhiteText',
    WhiteBg = 'WhiteBg',
    Black = 'Black',
    Background = 'Background',
}
export enum EShadowVariant {
    'LowShadow' = 'LowShadow',
    'MediumShadow' = 'MediumShadow',
    HardShadow = 'HardShadow',
}

export enum EThemeVariant {
    Dark = 'Dark',
    Light = 'Light',
}

export type TThemeColors = Record<EColorVariant, string>;
export type TThemeShadows = Record<EShadowVariant, string>;

export interface ITheme {
    name: EThemeVariant;
    shadows: TThemeShadows;
    colors: TThemeColors;
}
