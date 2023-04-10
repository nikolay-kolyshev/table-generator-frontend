import { screen } from '@testing-library/react';
import React from 'react';
import { PortalStub } from '@/common/portal/portal.stub';
import { MOCK_PORTAL_CONTENT_TEXT, MOCK_PORTAL_PROPS } from '@/common/portal/portal.mock';
import { renderWithTheme } from '../tests.helpers';

describe('Portal [test-case]]', () => {
    it('should be render', async () => {
        renderWithTheme(<PortalStub />);
        await screen.findByRole('article');
        expect(screen.getByRole('article')).toBeInTheDocument();
        expect(screen.getByRole('article').id).toBe(MOCK_PORTAL_PROPS.htmlElementId);
        expect(screen.getByRole('article').classList).toContain(MOCK_PORTAL_PROPS.htmlClassName);
        expect(screen.getByRole('article').children.length).toBe(1);
        expect(screen.getByText(MOCK_PORTAL_CONTENT_TEXT)).toBeInTheDocument();

        expect.assertions(5);
    });
});
