import React, { useState, useEffect } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import Logo from "../assets/AutoHelmLogo.png"
import Explore from "../Explore";
import {auth, signout} from "../firebase"
import { useAuth } from '../contexts/AuthContext'

const TopBar = () => {
    const { authUser: user, signout: logout } = useAuth();

    return (
        <div>
            <div className="topBar">
                <Link to="/" className="topBarLogoName">
                    <div className="logo" style={{ marginLeft: 25 }}>
                        <img src={Logo} style={{ width: '9vh', height: 'auto' }} alt="AutoHelm Logo" />
                    </div>
                    <p className="logoText">AutoHelm</p>
                </Link>
                <div className="topBarLinksContainer">
                    
                    <Link to="/explore?q=" style={{ alignSelf: 'flex-start' }} className="topBarLinks">
                        <p className="linkText">Explore</p>
                    </Link>
                    {
                        user ? (
                            <div>
                                <Link to="/myworkflows" style={{ alignSelf: 'flex-start' }} className="topBarLinks">
                                    <p className="linkText">My Workflows</p>
                                </Link>
                                <Link className="topBarLinks" onClick={() => logout()}>
                                    <p className="linkText" style={{whiteSpace: 'nowrap'}}>Sign Out</p>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" style={{ alignSelf: 'flex-start' }} className="topBarLinks">
                                    <p className="linkText">Login</p>
                                </Link>
                            </>
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default TopBar;