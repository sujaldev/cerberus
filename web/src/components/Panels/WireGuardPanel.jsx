import React from "react";
import QRCode from "react-qr-code";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SyntaxHighlighter from "react-syntax-highlighter";
import {androidstudio} from "react-syntax-highlighter/dist/esm/styles/hljs";

import PanelBase from "./PanelBase.jsx";


function WireGuardPanel({conf}) {
    return (
        <PanelBase title="WireGuard Config">
            {conf ?
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                    <div>
                        <Paper variant="outlined" style={{
                            display: "inline-flex",
                            background: "white",
                            padding: "10px"
                        }}>
                            <QRCode size={180} value={conf}/>
                        </Paper>
                    </div>

                    <SyntaxHighlighter language="ini" style={androidstudio} customStyle={{
                        fontSize: "12px",
                        padding: "20px"
                    }}>
                        {conf}
                    </SyntaxHighlighter>
                </div>
                :
                <Typography variant="body1">Empty config</Typography>
            }
        </PanelBase>
    );
}


export default WireGuardPanel;
