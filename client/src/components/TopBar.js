import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import Logo from "../assets/AutoHelmLogo.png"
import LogoWithName from "../assets/AutoHelmLogoWithName.png"
import Explore from "../Explore";

const TopBar = () => {
    return (
        <div>
            <div className="topBar">
                <div className="logo" >
                    <Link to="/" className="topBarLogoName">
                        <img src={LogoWithName} style={{ width: '26vh', height: 'auto' }} alt="AutoHelm Logo" />
                        {/* <img src={Logo} style={{ width: '9vh', height: 'auto' }} alt="AutoHelm Logo" /> */}
                        {/* <p className="logoText">AutoHelm</p> */}
                    </Link>
                </div>
                <div className="topBarLinksContainer">

                    <div style={{ paddingLeft: 100 }}>
                        <Link to="/explore?q=" className="topBarLinks">
                            <p className="linkText">Explore</p>
                        </Link>
                    </div>

                    <div style={{ paddingLeft: 100 }}>
                        <Link to="/login" className="topBarLinks">
                            <p className="linkText">Login</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;