import React from 'react';
import { Overlay, IOverlayProps } from '@/overlay/overlay.component';
import styled from 'styled-components';
import { Typography } from '@/typography';
import { ETypographyVariant } from '@/typography/typography.types';

export const renderOverlayStory = (props: IOverlayProps) => (
    <>
        <button>Button under overlay</button>
        <Overlay {...props}>
            <Typography variant={ETypographyVariant.Body2GrayscaleVariant1}>Text in overlay</Typography>
        </Overlay>
    </>
);

export const StyledOverlayColorStoryContainer = styled.div`
    position: relative;
    transform: rotate(0);
    width: 100px;
    height: 100px;
    padding: 10px;
`;
