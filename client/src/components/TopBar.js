import React, { useState, useEffect } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import Logo from "../assets/AutoHelmLogo.png"
import LogoWithName from "../assets/AutoHelmLogoWithName.png"
import Explore from "../Explore";
import { auth, signout } from "../firebase"
import { useAuth } from '../contexts/AuthContext'

const TopBar = () => {
    const { authUser: user, signout: logout } = useAuth();

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
                        <Link to="/explore?q=" style={{ alignSelf: 'flex-start' }} className="topBarLinks">
                            <p className="linkText">Explore</p>
                        </Link>
                    </div>
                    {
                        user ? (
                            <div className="topBarLinksContainer">
                                <div style={{ paddingLeft: 100 }}>
                                    <Link to="/myworkflows" style={{ alignSelf: 'flex-start' }} className="topBarLinks">
                                        <p className="linkText">My Workflows</p>
                                    </Link>
                                </div>

                                <div style={{ paddingLeft: 100 }}>
                                    <Link className="topBarLinks" onClick={() => logout()}>
                                        <p className="linkText" style={{ whiteSpace: 'nowrap' }}>Sign Out</p>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            // <>
                            <div style={{ paddingLeft: 100 }}>
                                <Link to="/login" style={{ alignSelf: 'flex-start' }} className="topBarLinks">
                                    <p className="linkText">Login</p>
                                </Link>
                            </div>
                            // </>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

export default TopBar;