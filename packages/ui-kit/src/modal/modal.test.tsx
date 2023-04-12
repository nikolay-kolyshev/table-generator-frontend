import { screen } from '@testing-library/react';
import React, { useState } from 'react';
import { Modal } from './modal.component';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@/common/tests.helpers';

const DefaultModal = ({ isOpenModal = false, isNoCLoseMode = false }) => {
    const [isOpen, setIsOpen] = useState(isOpenModal);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose} isNoCloseMode={isNoCLoseMode}>
                Modal Content
            </Modal>
            <button onClick={handleOpen}>Open modal</button>
        </>
    );
};

describe('Modal component', () => {
    test('render test', () => {
        renderWithTheme(<DefaultModal isOpenModal />);
        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    test('Open close test', () => {
        renderWithTheme(<DefaultModal />);
        expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();

        userEvent.click(screen.getByText('Open modal'));
        expect(screen.getByText('Modal Content')).toBeInTheDocument();

        userEvent.click(screen.getByRole('presentation'));
        expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    test('isNoCLoseMode test', () => {
        renderWithTheme(<DefaultModal isOpenModal isNoCLoseMode />);

        expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
    });
});
