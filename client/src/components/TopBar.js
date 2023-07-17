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
                        <img src={Logo} style={{ width: '7vh', height: 'auto'}} alt="AutoHelm Logo" />
                    </div>
                    <span className="logoText">AutoHelm</span>
                </Link>
                <div className="topBarLinksContainer">
                    <Link to="/explore" style={{ alignSelf: 'flex-start' }} className="topBarLinks">
                        Explore
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBar;