import { EAnimationState, EModalVariant } from '@/modal/modal.types';
import styled from 'styled-components';

interface IModalStyleProps {
    isWithCross: boolean;
    variant: EModalVariant;
}

export const StyledModalContent = styled.span<
    {
        animationState: string;
    } & IModalStyleProps
>(({ isWithCross, animationState, variant }) => ({
    transform: `translateX(-50%) translateY(${animationState === EAnimationState.In ? variant === EModalVariant.Center ?  'calc(5vh - 100%)' : 'calc(50vh - 100%)' :  variant === EModalVariant.Center ?  'calc(-12vh - 100%)' : 'calc(67vh - 100%)'})`,
    opacity: animationState === EAnimationState.In ? '1' : '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    'max-width': '100%',
    'max-height': '100%',
    transition: 'transform 0.45s ease-out, opacity 150ms linear 0ms',
    flexDirection: 'column',
}));

export const StyledModalChildren = styled.span<IModalStyleProps>`
    overflow: auto;
    max-width: 100vw;
    ${({variant}) => variant === EModalVariant.Center ? 'margin-bottom: 16px' : 'margin-top: 16px'};
`;
