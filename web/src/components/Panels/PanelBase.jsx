import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";


const PaddedBox = styled(Box)(({theme}) => ({
    padding: theme.spacing(2),
}));

function Panel({title, children}) {
    return (
        <Card style={{height: "500px"}}>
            <PaddedBox>
                <Typography variant="subtitle1" component="h1">{title}</Typography>
            </PaddedBox>
            <Divider/>
            <PaddedBox>
                {children}
            </PaddedBox>
        </Card>
    );
}


export default Panel;
