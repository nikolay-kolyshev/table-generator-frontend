import { StyledLabel } from '@/common/index.styles';
import React, { FC, HTMLAttributes } from 'react';

export const DEFAULT_COMPONENT_TEXT = 'Example';
export const DEFAULT_COMPONENT_OTHER_TEXT = 'Other example';

export const DEFAULT_LOREM_IPSUM_TEXT =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam. Lacus luctus accumsan tortor posuere ac. Lorem sed risus ultricies tristique nulla aliquet. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Volutpat maecenas volutpat blandit aliquam. Tortor at auctor urna nunc id. Aliquam id diam maecenas ultricies mi. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Amet massa vitae tortor condimentum lacinia quis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Est ante in nibh mauris cursus mattis. Tortor condimentum lacinia quis vel eros. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Sed ullamcorper morbi tincidunt ornare. Egestas purus viverra accumsan in nisl nisi. Vestibulum morbi blandit cursus risus at ultrices mi tempus.';

export const ComponentLabel: FC<HTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => (
    <StyledLabel {...props}>{children}</StyledLabel>
);
