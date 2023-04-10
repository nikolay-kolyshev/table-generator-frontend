import * as Icons from './components';
import React, { createElement } from 'react';
import { useTheme } from 'styled-components';
import { StyledIconContainer } from '@/color-icon/color-icon.styles';

export default {
    title: 'Components/Color Icon',
};

export const DefaultColorIconStory = () => {
    const theme = useTheme();
    return Object.keys(Icons).map((item) => (
        <StyledIconContainer key={item}>
            <div>{item}</div>
            <div>{createElement(Icons[item], { color: theme.colors.GrayscaleVariant5 })}</div>
        </StyledIconContainer>
    ));
};
