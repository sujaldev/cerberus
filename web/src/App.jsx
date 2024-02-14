import React from "react";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./layouts/Dashboard.jsx";

function App() {
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
