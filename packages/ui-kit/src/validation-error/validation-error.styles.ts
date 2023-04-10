import { deviceSize } from '@/common/grid/device-size.constants';
import { Typography } from '@/typography/typography.component';
import styled from 'styled-components';

export const StyledErrorMessage = styled(Typography)<{ offsetRight: number }>`
    margin-top: 4px;
    padding-right: ${({ offsetRight }) => `${offsetRight}px`};

    @media (max-width: ${deviceSize.tablet.width}px) {
        margin-bottom: 4px;
    }
`;
