import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./pages/App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme";

const router = createBrowserRouter([
    {
        "path": "/",
        "element": <App/>
    },
    {
        "path": "/block",
        "element": <ErrorPage/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
);
