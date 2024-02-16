import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

import PanelBase from "./PanelBase.jsx";


function OptionsPanel() {
    return (
        <PanelBase title="Cerberus Options">
            <div style={{
                maxHeight: "250px",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                gap: "10px",
                padding: "10px 30px",
            }}>
                <FormControlLabel control={<Switch/>} label={
                    <Typography padding="10px" variant="subtitle2">Levenshtein Distance</Typography>
                }/>
                <FormControlLabel control={<Switch/>} label={
                    <Typography padding="10px" variant="subtitle2">Unicode exploits</Typography>
                }/>
                <FormControlLabel control={<Switch/>} label={
                    <Typography padding="10px" variant="subtitle2">Phising Databases</Typography>
                }/>
                <FormControlLabel control={<Switch/>} label={
                    <Typography padding="10px" variant="subtitle2">GeoBlock</Typography>
                }/>
                <FormControlLabel control={<Switch/>} label={
                    <Typography padding="10px" variant="subtitle2">IP Reputation</Typography>
                }/>
                <FormControlLabel control={<Switch/>} label={
                    <Typography padding="10px" variant="subtitle2">Ad Blocking</Typography>
                }/>
                <FormControlLabel control={<Switch/>} label={
                    <Typography padding="10px" variant="subtitle2" color="#ffcdd2">Sandbox Run</Typography>
                }/>
            </div>
        </PanelBase>
    );
}


export default OptionsPanel;
