import { lightTheme } from 'ui-kit';
import { ThemeProvider } from 'styled-components';

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <div>web-application</div>
        </ThemeProvider>
    );
}

export default App;
