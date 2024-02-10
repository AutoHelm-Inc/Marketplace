import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import Logo from "../assets/AutoHelmLogo.png"
import Explore from "../Explore";

const TopBar = () => {
    return (
        <div>
            <div className="topBar">
                <Link to="/" className="topBarLogoName">
                    <div className="logo">
                        <img src={Logo} style={{ width: '9vh', height: 'auto' }} alt="AutoHelm Logo" />
                    </div>
                    <p className="logoText">AutoHelm</p>
                </Link>
                <div className="topBarLinksContainer">
                    <Link to="/explore?q=" style={{ alignSelf: 'flex-start' }} className="topBarLinks">
                        <p className="linkText">Explore</p>
                    </Link>
                    <Link to="/login" style={{ alignSelf: 'flex-start' }} className="topBarLinks">
                        <p className="linkText">Login</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBar;