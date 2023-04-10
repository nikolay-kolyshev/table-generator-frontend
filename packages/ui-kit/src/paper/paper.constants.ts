import { EPaperBorderRadius, EPaperColor, EPaperShadow, EPaperPadding } from '@/paper/paper.types';
import { EColorVariant } from '@/theme/theme.types';
import { DefaultTheme } from 'styled-components';

export const paperPaddings: { [key in EPaperPadding]: [string, string, string, string] } = {
    None: ['0', '0', '0', '0'],
    Medium: ['20px', '16px', '20px', '16px'],
};

export const paperBorderRadiuses: { [key in EPaperBorderRadius]: string } = {
    Medium: '4px',
    None: '0',
};

export const paperColors: { [key in EPaperColor]: string } = {
    WhiteBg: EColorVariant.WhiteBg,
};

export const getPaperShadow = (theme: DefaultTheme): { [key in EPaperShadow]: string } => ({
    None: 'none',
    HardShadow: theme.shadows.HardShadow,
});
