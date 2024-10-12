import React from "react";

export default function Navbar({toggleTheme}){
    return(
    <nav>
        <div className="nav-left">
        {/* <img className="nav-logo" src={`${process.env.PUBLIC_URL}/textmaster-favicon-color.png`} alt="TextMaster Logo" /> */}
        <h1>TextMaster</h1>
        <a href="#about">About</a>  
        </div>
        <div className="nav-right">
            <label className="switch">
                <input type="checkbox" onChange={toggleTheme} />
                <span className="slider round"></span>
            </label>
        </div>
    </nav>
    )
}