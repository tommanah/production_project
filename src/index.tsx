import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { ThemeProvider } from "app/providers";

import "shared/config/i18n/i18n";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)