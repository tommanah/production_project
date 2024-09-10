import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import { ThemeProvider } from "app/providers";

import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)