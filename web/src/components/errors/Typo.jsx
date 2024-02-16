import Typography from "@mui/material/Typography";
import React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";

const ErrButton = styled(Button)(({theme}) => ({
    color: theme.palette.error.main,
    borderColor: theme.palette.error.main
}));


function Typo({params}) {
    return (
        <Paper sx={{
            padding: "20px",
            textAlign: "center",
        }}>
            <Typography variant="subtitle2">
                This website is suspiciously similar to <b>{`${params.get("corrected_domain")}`}</b>:
            </Typography>
            <br/>
            <Button variant="outlined" size="large">
                <Link href={params.get("corrected_url")}>Go to {params.get("corrected_domain")}</Link>
            </Button>
            <br/>
            <br/>
            <ErrButton variant="outlined" size="large">
                <Link style={{color: "inherit"}}
                    href={params.get("original_url")}>Allow {params.get("original_domain")}</Link>
            </ErrButton>
        </Paper>
    );
}

export default Typo;
