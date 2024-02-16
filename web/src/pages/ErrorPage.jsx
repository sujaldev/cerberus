import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import {styled} from "@mui/material/styles";

import Typo from "../components/errors/Typo.jsx";

const Warning = styled(WarningIcon)(({theme}) => ({
    color: theme.palette.error.main,
    fontSize: `${theme.typography.h1.fontSize * 5.5}px`,
}));

function ErrorPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const errorType = urlParams.get("err");

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            gap: "20px",
        }}>
            <Warning/>
            <h1>STOP!</h1>
            {{
                "typo": <Typo params={urlParams}/>
            }[errorType]}
        </div>
    );
}

export default ErrorPage;
