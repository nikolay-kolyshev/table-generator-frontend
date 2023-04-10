import { DEFAULT_COMPONENT_TEXT } from '@/common';
import { Modal, modalDefaultProps } from '@/modal/modal.component';
import { OPEN_MODAL, StyledCustomModalContent } from '@/modal/modal.stub';
import React, { useCallback, useState } from 'react';

export default {
    parameters: {
        withoutMargin: true,
    },
    title: 'Components/Modal',
};

export const DefaultModalStory = () => {
    const [isOpen, setIsShown] = useState(false);

    const handleClose = useCallback(() => {
        setIsShown(false);
    }, []);

    const handleOpen = useCallback(() => {
        setIsShown(true);
    }, []);

    return (
        <>
            <button onClick={handleOpen}>{OPEN_MODAL}</button>
            <Modal isOpen={isOpen} onClose={handleClose} isWithCross={modalDefaultProps.isWithCross}>
                <StyledCustomModalContent>{DEFAULT_COMPONENT_TEXT}</StyledCustomModalContent>
            </Modal>
        </>
    );
};
