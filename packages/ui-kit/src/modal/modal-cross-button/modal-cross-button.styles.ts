import styled from 'styled-components';
import { EModalVariant } from '../modal.types';

export const StyledModalCross = styled.div<{ variant: EModalVariant }>`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 50%;
    border: solid 2px ${({theme}) => theme.colors.PrimaryDanger};
`;
