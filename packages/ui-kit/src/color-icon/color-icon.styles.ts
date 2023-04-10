import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { EColorVariant } from '@/theme/theme.types';

export const StyledIconContainer = styled.div`
    flex: 1;
    text-align: center;
`;

export const svgIconContainerMixin = (theme: DefaultTheme, color: EColorVariant) => `
    color: ${theme.colors[color]};
    display: flex;
    align-items: center;
    justify-content: center;
`;
