import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <div>Root route</div>,
    },
]);
