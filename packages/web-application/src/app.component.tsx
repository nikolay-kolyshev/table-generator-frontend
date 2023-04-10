import React from "react";
import {Modal, lightTheme} from "ui-kit";
import {ThemeProvider} from "styled-components";
import {RouterProvider} from "react-router-dom";
import {routerConfig} from "./UI/routing/routing.config";

function App() {
  return (
    <RouterProvider router={routerConfig}>
        <ThemeProvider theme={lightTheme}>
            <div>
                web-application
                <Modal isOpen={true}>
                    content
                </Modal>
            </div>
        </ThemeProvider>
    </RouterProvider>
  )
}

export default App
