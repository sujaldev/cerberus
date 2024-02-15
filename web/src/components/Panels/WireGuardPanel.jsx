import React from "react";
import QRCode from "react-qr-code";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import SyntaxHighlighter from "react-syntax-highlighter";
import {androidstudio} from "react-syntax-highlighter/dist/esm/styles/hljs";

import PanelBase from "./PanelBase.jsx";


function WireGuardPanel({conf}) {
    return (
        <PanelBase title="WireGuard Config">
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                {conf ?
                    <>
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
                    </>
                    :
                    <>
                        <Skeleton width="60%" height="200px" style={{borderRadius: "5px"}} variant="rectangular"/>
                        <Skeleton style={{
                            width: "28%",
                            paddingBottom: "28%",
                            borderRadius: "5px",
                        }} variant="rectangular"/>
                    </>
                }
            </div>
        </PanelBase>
    );
}


export default WireGuardPanel;
