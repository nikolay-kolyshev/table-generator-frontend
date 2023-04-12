import React, { useState, useCallback } from 'react';
import { EModalVariant } from './modal.types';
import { OPEN_MODAL, StyledCustomModalContent } from './modal.stub';
import { Modal } from './modal.component';
import { DEFAULT_COMPONENT_TEXT } from '@/common';
import { Typography } from '@/typography';
import { ETypographyVariant } from '@/typography/typography.types';

export default {
    parameters: {
        withoutMargin: true,
    },
    title: 'Components/Modal/Modal Variant',
};

export const CenterStory = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <>
            <button onClick={handleOpen}>{OPEN_MODAL}</button>
            <Modal isOpen={isOpen} onClose={handleClose} variant={EModalVariant.Center}>
                <StyledCustomModalContent>
                    <Typography variant={ETypographyVariant.Body1Black}>{DEFAULT_COMPONENT_TEXT}</Typography>
                </StyledCustomModalContent>
            </Modal>
        </>
    );
};

export const BottomStory = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <>
            <button onClick={handleOpen}>{OPEN_MODAL}</button>
            <Modal isOpen={isOpen} onClose={handleClose} variant={EModalVariant.Bottom}>
                <StyledCustomModalContent>
                    <Typography variant={ETypographyVariant.Body1Black}>{DEFAULT_COMPONENT_TEXT}</Typography>
                </StyledCustomModalContent>
            </Modal>
        </>
    );
};
