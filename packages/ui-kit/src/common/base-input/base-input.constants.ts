import { EInputPlaceholderColor, EInputSize } from '@/common/base-input/base-input.types';
import { EColorVariant } from '@/theme/theme.types';

export const baseInputHeights: { [key in EInputSize]: string } = {
    Medium: '42px',
};

export const baseInputPlaceholderColors: { [key in EInputPlaceholderColor]: string } = {
    GrayscaleVariant2: EColorVariant.GrayscaleVariant2,
};
