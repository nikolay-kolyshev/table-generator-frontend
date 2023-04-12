import { overlayStyles } from '@/common/overlay.styles';
import { OVERLAY_Z_INDEX } from '@/common/z-index.constants';
import styled from 'styled-components';
import { hex2rgba } from '@/common/helpers/hex-to-rgba.helper';
import { EColorVariant } from '@/theme/theme.types';

const alphaChannel = 0.6;

export const StyledOverlay = styled.div<{ alpha?: number; color?: EColorVariant; topOffset?: number }>`
    display: flex;
    justify-content: center;
    ${overlayStyles};
    z-index: ${OVERLAY_Z_INDEX};
    ${({ alpha = alphaChannel, color, theme }) =>
        color && `background-color: ${hex2rgba(theme.colors.GrayscaleVariant6, alpha)};`}
    ${({ topOffset }) => (topOffset ? `padding-top: ${topOffset}px;` : 'align-items: center;')}
`;
