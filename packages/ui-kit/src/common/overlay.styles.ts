import { hex2rgba } from '@/common/helpers/hex-to-rgba.helper';
import { css } from 'styled-components';

export const overlayStyles = css`
    position: fixed;
    background-color: ${({ theme }) => hex2rgba(theme.colors.GrayscaleVariant6, 0.3)};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;
