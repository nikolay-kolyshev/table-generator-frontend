import React from 'react';
import { Modal, lightTheme } from 'ui-kit';
import styled, { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { routerConfig } from '@UI/routing/routing.config';

export const StyledTest = styled.div``;

function App() {
    return (
        <RouterProvider router={routerConfig}>
            <ThemeProvider theme={lightTheme}>
                <div>web-application</div>
            </ThemeProvider>
        </RouterProvider>
    );
}

export default App;
