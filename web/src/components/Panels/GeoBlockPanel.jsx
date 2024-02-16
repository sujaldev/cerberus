import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

import PanelBase from "./PanelBase.jsx";


function GeoBlockPanel() {
    return (
        <PanelBase title="GeoBlock">
            <Typography variant="subtitle2">Block a website if it is hosted in a particular country:</Typography>
            <div style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-evenly",
            }}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="China"/>
                    <FormControlLabel control={<Checkbox/>} label="Taiwan"/>
                    <FormControlLabel control={<Checkbox/>} label="Thailand"/>
                    <FormControlLabel control={<Checkbox/>} label="Iraq"/>
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Russia"/>
                    <FormControlLabel control={<Checkbox/>} label="Brazil"/>
                    <FormControlLabel control={<Checkbox/>} label="Italy"/>
                    <FormControlLabel control={<Checkbox/>} label="Turkey"/>
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Pakistan"/>
                    <FormControlLabel control={<Checkbox/>} label="Afghanistan"/>
                    <FormControlLabel control={<Checkbox/>} label="Saudi Arabia"/>
                    <FormControlLabel control={<Checkbox/>} label="Japan"/>
                </FormGroup>
            </div>
        </PanelBase>
    );
}


export default GeoBlockPanel;
