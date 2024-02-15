import React from "react";
import Logo from "../assets/logo.svg?react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";


function Navbar() {
    return (
        <Paper style={{
            padding: "10px",
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            display: "flex",
        }} variant="outlined" square>
            <Container style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }} maxWidth="80%">
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "15px"
                }}>
                    <Card style={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "100px"
                    }} variant="outlined">
                        <Logo width="50px" height="auto"/>
                    </Card>
                    <Typography sx={{color: "grey.100"}} variant="h5">
                        CERBERUS
                    </Typography>
                </div>

                <Tooltip title={"GitHub Repository"} enterDelay={300}>
                    <Button
                        component="a"
                        href="https://github.com/sujaldev/cerberus"
                        target="_blank"
                        variant="outlined"
                        startIcon={<GitHubIcon/>}>
                        Source
                    </Button>
                </Tooltip>
            </Container>
        </Paper>
    );
}

export default Navbar;
