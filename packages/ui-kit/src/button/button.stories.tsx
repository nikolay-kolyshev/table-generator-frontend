import { Button } from '@/button/button.component';
import { buttonGuide } from '@/button/button.stub';
import { EButtonVariant } from '@/button/button.types';
import { ComponentLabel, DEFAULT_COMPONENT_TEXT } from '@/common';
import React, { Fragment } from 'react';
import { darkTheme, lightTheme } from '@/theme/theme.constants';

export default {
    title: 'Components/Button',
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                { name: 'white', value: lightTheme.colors.WhiteBg },
                { name: 'dark', value: darkTheme.colors.WhiteBg },
            ],
        },
    },
};

const buttonGroupStyles = {
    minWidth: '800px',
    width: '100%',
};

const buttonGroupItemStyle = {
    marginRight: '20px',
    verticalAlign: 'middle',
};

const renderButtonGroup = (variant: EButtonVariant) => (
    <Fragment>
        <ComponentLabel>Variant: {variant}</ComponentLabel>
        <div style={buttonGroupStyles} key={variant}>
            <span style={buttonGroupItemStyle}>
                <Button variant={variant}>{DEFAULT_COMPONENT_TEXT}</Button>
            </span>
            <span style={buttonGroupItemStyle}>
                <Button variant={variant} disabled={true}>
                    {DEFAULT_COMPONENT_TEXT}
                </Button>
            </span>
            {variant.toLowerCase().includes('small') ? (
                <>
                    <span style={buttonGroupItemStyle}>
                        <Button variant={variant}>{DEFAULT_COMPONENT_TEXT}</Button>
                    </span>
                    <span style={buttonGroupItemStyle}>
                        <Button variant={variant} isIconButton={true}></Button>
                    </span>
                </>
            ) : (
                <>
                    <span style={buttonGroupItemStyle}>
                        <Button variant={variant}>{DEFAULT_COMPONENT_TEXT}</Button>
                    </span>
                    <span style={buttonGroupItemStyle}>
                        <Button variant={variant} isIconButton={true}></Button>
                    </span>
                </>
            )}
        </div>
    </Fragment>
);

export const ButtonGuideStory = () => (
    <Fragment>
        <ComponentLabel>Name: Default</ComponentLabel>
        <Button>{DEFAULT_COMPONENT_TEXT}</Button>
        {Object.keys(buttonGuide).map((key) => (
            <Fragment key={key}>{buttonGuide[key].variants.map(renderButtonGroup)}</Fragment>
        ))}
    </Fragment>
);

export const ButtonResponsiveStory = () => (
    <>
        <Button responsive={false}>false</Button>
        <Button responsive={true}>true</Button>
    </>
);
