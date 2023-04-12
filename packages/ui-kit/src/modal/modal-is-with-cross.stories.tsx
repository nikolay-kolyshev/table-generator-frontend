import { DEFAULT_COMPONENT_TEXT } from '@/common';
import { Modal } from '@/modal/modal.component';
import { OPEN_MODAL, StyledCustomModalContent } from '@/modal/modal.stub';
import React, { useCallback, useState } from 'react';
import { Typography } from '@/typography';
import { ETypographyVariant } from '@/typography/typography.types';

export default {
    parameters: {
        withoutMargin: true,
    },
    title: 'Components/Modal/Modal is with cross',
};

export const ModalWithCrossStory = () => {
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
            <Modal isOpen={isOpen} onClose={handleClose} isWithCross={true}>
                <StyledCustomModalContent>
                    <Typography variant={ETypographyVariant.Body1Black}>{DEFAULT_COMPONENT_TEXT}</Typography>
                </StyledCustomModalContent>
            </Modal>
        </>
    );
};

export const ModalWithoutCrossStory = () => {
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
            <Modal isOpen={isOpen} onClose={handleClose} isWithCross={false}>
                <StyledCustomModalContent>
                    <Typography variant={ETypographyVariant.Body1Black}>{DEFAULT_COMPONENT_TEXT}</Typography>
                </StyledCustomModalContent>
            </Modal>
        </>
    );
};
