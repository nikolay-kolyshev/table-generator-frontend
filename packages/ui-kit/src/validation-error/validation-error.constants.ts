import { ETypographyVariant } from '@/typography/typography.types';
import { EValidationErrorTypographySize } from '@/validation-error/validation-error.types';

export const validationErrorTypography: { [key in EValidationErrorTypographySize]: ETypographyVariant } = {
    Medium: ETypographyVariant.Caption1Danger,
};
