import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import PanelBase from "./PanelBase.jsx";


function OptionsPanel() {
    return (
        <PanelBase title="Sandbox Run">
            <Paper style={{
                minHeight: "250px",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }} variant="outlined">
                <Typography variant="body2">Sandbox runs will appear here.</Typography>
            </Paper>
        </PanelBase>
    );
}


export default OptionsPanel;
