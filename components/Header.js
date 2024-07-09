import React from "react"

export default function Header() {
    return (
        <div className="header">
            <img id= "header-img" src={require("../images/logo.jpg")} alt="" />
            <h1 id="header-title">Doctor Chopper Generator</h1>
            <h2 id="header-subtitle">Strawhat Pirates</h2>
        </div>
        
    );
}