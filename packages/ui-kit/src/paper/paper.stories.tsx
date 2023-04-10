import { ComponentLabel, DEFAULT_COMPONENT_TEXT } from '@/common';
import { Paper, paperDefaultProps } from '@/paper/paper.component';
import { paperPaddings } from '@/paper/paper.constants';
import { StyledPaperStub } from '@/paper/paper.stub';
import { EPaperBorderRadius, EPaperColor, EPaperShadow, EPaperPadding } from '@/paper/paper.types';
import React from 'react';
import { lightTheme } from '@/theme/theme.constants';

export default {
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                { name: 'white', value: lightTheme.colors.WhiteBg },
                { name: 'dark', value: lightTheme.colors.WhiteBg },
            ],
        },
    },
    title: 'Components/Paper',
};

const getPaddings = (paperPadding: EPaperPadding, disableVerticalPaddings?: boolean) => {
    const paddings = paperPaddings[paperPadding];
    if (disableVerticalPaddings === true) {
        const disabledVertical = [...paddings];
        disabledVertical[1] = '0';
        disabledVertical[3] = '0';

        return disabledVertical;
    }

    return paddings;
};

const renderPaddingLabel = (paperPadding: EPaperPadding, disableVerticalPaddings?: boolean) => (
    <>
        <ComponentLabel>{paperPadding}</ComponentLabel>
        <div>{`padding: ${getPaddings(paperPadding, disableVerticalPaddings).join(', ')};`}</div>
    </>
);

export const DefaultPaperStory = () => (
    <Paper
        padding={paperDefaultProps.padding}
        borderRadius={paperDefaultProps.borderRadius}
        disableVerticalPaddings={paperDefaultProps.disableVerticalPaddings}
        color={paperDefaultProps.color}
        shadow={paperDefaultProps.elevation}
    >
        {DEFAULT_COMPONENT_TEXT}
    </Paper>
);

export const PaperPaddingStory = () => (
    <>
        <StyledPaperStub padding={EPaperPadding.None}>{renderPaddingLabel(EPaperPadding.None)}</StyledPaperStub>
        <StyledPaperStub padding={EPaperPadding.Medium}>{renderPaddingLabel(EPaperPadding.Medium)}</StyledPaperStub>
    </>
);

export const PaperDisableVerticalPaddingsStory = () => (
    <>
        <StyledPaperStub disableVerticalPaddings={true} padding={EPaperPadding.None}>
            {renderPaddingLabel(EPaperPadding.None, true)}
        </StyledPaperStub>
        <StyledPaperStub disableVerticalPaddings={true} padding={EPaperPadding.Medium}>
            {renderPaddingLabel(EPaperPadding.Medium, true)}
        </StyledPaperStub>
    </>
);

export const PaperBorderRadiusStory = () => (
    <>
        <Paper borderRadius={EPaperBorderRadius.None}>{EPaperBorderRadius.None}</Paper>
        <Paper borderRadius={EPaperBorderRadius.Medium}>{EPaperBorderRadius.Medium}</Paper>
    </>
);

export const PaperColorStory = () => (
    <>
        <Paper color={EPaperColor.WhiteBg}>{EPaperColor.WhiteBg}</Paper>
    </>
);
export const PaperShadowStory = () => (
    <>
        <Paper shadow={EPaperShadow.None}>{EPaperShadow.None}</Paper>
        <Paper shadow={EPaperShadow.HardShadow}>{EPaperShadow.HardShadow}</Paper>
    </>
);

PaperPaddingStory.parameters = {
    backgrounds: {
        default: 'white',
        values: [
            { name: 'white', value: lightTheme.colors.WhiteBg },
            { name: 'dark', value: lightTheme.colors.WhiteBg },
        ],
    },
};

PaperDisableVerticalPaddingsStory.parameters = {
    backgrounds: {
        default: 'white',
        values: [
            { name: 'white', value: lightTheme.colors.WhiteBg },
            { name: 'dark', value: lightTheme.colors.WhiteBg },
        ],
    },
};
