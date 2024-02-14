import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";

import WireGuardPanel from "../components/Panels/WireGuardPanel.jsx";


const DashboardGrid = styled(Grid)(({theme}) => ({
    padding: theme.spacing(4),
}));


function Dashboard() {
    return (
        <Box sx={{width: "100%", height: "100%", overflowY: "scroll"}}>
            <DashboardGrid container columnSpacing={4} rowSpacing={4}>
                <Grid item xs={4}>
                    <WireGuardPanel/>
                </Grid>
            </DashboardGrid>
        </Box>
    );
}


export default Dashboard;
