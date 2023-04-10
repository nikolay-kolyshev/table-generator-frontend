import { EButtonVariant } from '@/button/button.types';

export const buttonGuide: { [key: string]: { title: string; variants: EButtonVariant[] } } = {
    Medium: {
        title: 'Medium',
        variants: [
            EButtonVariant.PrimaryMedium,
        ],
    },
    Small: {
        title: 'Small',
        variants: [
            EButtonVariant.PrimarySmall,
            EButtonVariant.DangerUnderlinedSmall,
            EButtonVariant.SecondaryUnderlinedSmall,
        ],
    },
    ExtraSmall: {
        title: 'Extra Small',
        variants: [
            EButtonVariant.CrystalExtraSmall,
        ],
    },
};
