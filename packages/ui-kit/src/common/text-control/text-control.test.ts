import { BorderColorProps, getBorderColor } from './text-control.styles';
import { ETextControlFocusState } from '@/common/text-control/text-control.types';
import { lightTheme } from '@/theme/theme.constants';

describe('Text control getBorderColor tests', () => {
    const getBorderColorTestCases: [BorderColorProps, string][] = [
        [{ focusState: ETextControlFocusState.In, theme: lightTheme }, lightTheme.colors.GrayscaleVariant4],
        [{ focusState: ETextControlFocusState.Out, theme: lightTheme }, lightTheme.colors.GrayscaleVariant4],
        [
            { focusState: ETextControlFocusState.In, isErrorInPriority: true, valid: true, theme: lightTheme },
            lightTheme.colors.GrayscaleVariant4,
        ],
        [
            { focusState: ETextControlFocusState.In, isErrorInPriority: true, valid: false, theme: lightTheme },
            lightTheme.colors.PrimaryDanger,
        ],
        [{ valid: false, theme: lightTheme }, lightTheme.colors.PrimaryDanger],
        [{ valid: true, theme: lightTheme }, lightTheme.colors.GrayscaleVariant4],
        [{ theme: lightTheme }, lightTheme.colors.GrayscaleVariant4],
    ];

    it.each(getBorderColorTestCases)('getBorderColor %s', (props, expectedResult) => {
        expect(getBorderColor(props)).toBe(expectedResult);
    });
});
