import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";

import GeoBlockPanel from "../components/Panels/GeoBlockPanel.jsx";
import OptionsPanel from "../components/Panels/OptionsPanel.jsx";
import SandboxPanel from "../components/Panels/SandboxPanel.jsx";
import WireGuardPanel from "../components/Panels/WireGuardPanel.jsx";


const DashboardGrid = styled(Grid)(({theme}) => ({
    padding: theme.spacing(4),
}));


function Dashboard() {
    return (
        <Box sx={{width: "100%", height: "100%", overflowY: "scroll"}}>
            <DashboardGrid container columnSpacing={4} rowSpacing={4}>
                <Grid item xs={5}>
                    <WireGuardPanel/>
                </Grid>
                <Grid item xs={3}>
                    <GeoBlockPanel/>
                </Grid>
                <Grid item xs={4}>
                    <OptionsPanel/>
                </Grid>
                <Grid item xs={5}>
                    <SandboxPanel/>
                </Grid>
            </DashboardGrid>
        </Box>
    );
}


export default Dashboard;
