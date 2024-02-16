import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar.jsx";
import Dashboard from "../layouts/Dashboard.jsx";

import socket from "../socket.js";

function App() {
    socket.emit("init");

    const [flows, setFlows] = useState([]);

    useEffect(() => {
        function onAddFlow(value) {
            setFlows(previous => [...previous, value]);
        }

        socket.on("add_flow", onAddFlow);

        return () => {
            socket.off("add_flow", onAddFlow);
        };
    }, []);

    console.log(flows);

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            overflowY: "hidden"
        }}>
            <Navbar/>
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "25px",
                color: "gray"
            }}>
                <Dashboard/>
            </div>
        </div>
    );
}

export default App;
