import { hex2rgba } from '@/common/helpers/hex-to-rgba.helper';
import { Paper } from '@/paper/paper.component';
import styled from 'styled-components';

export const StyledPaperStub = styled(Paper)`
    background-image: ${({ theme }) => `linear-gradient(
            to bottom,
            ${hex2rgba(theme.colors.GrayscaleVariant1, 1)} 0%,
            ${hex2rgba(theme.colors.GrayscaleVariant1, 1)} 100%
        ),
        linear-gradient(to bottom, ${hex2rgba(theme.colors.WhiteBg, 1)} 0%, ${hex2rgba(
        theme.colors.WhiteBg,
        1,
    )} 100%)`};
    background-clip: content-box, padding-box;
`;
