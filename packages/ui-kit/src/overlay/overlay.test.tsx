import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Overlay } from '@/overlay/overlay.component';
import { renderWithTheme } from '@/common/tests.helpers';

type NodeWidth = Pick<HTMLElement, 'offsetWidth'>;
const mockRef = { offsetWidth: 100 };

const mockPreventTab = jest.fn();
const mockPreventShiftTab = jest.fn();
const mockPreventFocusing = jest.fn();
jest.mock('./overlay.helpers', () => ({
    ...jest.requireActual('./overlay.helpers'),
    preventTab: () => mockPreventTab(),
    preventShiftTab: () => mockPreventShiftTab(),
    preventFocusing: () => mockPreventFocusing(),
}));

describe('overlay component tests', () => {
    const setMockRefElement = (node?: NodeWidth): void => {
        const mockRef = {
            get current() {
                return node;
            },
            set current(_value) {},
        };

        jest.spyOn(React, 'useRef').mockReturnValue(mockRef);
    };

    it('should be render', () => {
        renderWithTheme(<Overlay>test_overlay</Overlay>);
        expect(screen.getByText('test_overlay')).toBeInTheDocument();
    });

    it('should called preventTab', () => {
        setMockRefElement(mockRef);
        renderWithTheme(
            <Overlay>
                <button>test_overlay</button>
            </Overlay>,
        );
        const btn = screen.getByRole('button');
        btn && fireEvent.keyDown(btn);
        expect(mockPreventTab).toBeCalled();
    });

    it('should called preventShiftTab', () => {
        setMockRefElement(mockRef);
        renderWithTheme(
            <Overlay>
                <button>test_overlay</button>
            </Overlay>,
        );
        const btn = screen.getByRole('button');
        btn && fireEvent.keyDown(btn);
        expect(mockPreventShiftTab).toBeCalled();
    });

    it('should called preventFocusing', () => {
        setMockRefElement(mockRef);
        renderWithTheme(<Overlay>test_overlay</Overlay>);
        fireEvent.keyDown(document);
        expect(mockPreventFocusing).toBeCalled();
    });
});
