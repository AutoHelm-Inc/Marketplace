import { useState, useEffect, React } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import AHILEntry from "./components/AHILEntry";
import { useLocation } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { initializeFirebase as initializeFirebase, databaseToJson, searchDatabaseProjects } from './firebase';
import NoSearchResults from './assets/no_search_results.svg'
import { Link } from "react-router-dom";
import Logo from "./assets/AutoHelmLogo.png"

const Login = (props) => {

    const [emailInputValue, setEmailInputValue] = useState(props.searchText);
    const [passwordInputValue, setPasswordInputValue] = useState(props.searchText);

    return (
        <div className="login">
            {/* <TopBar></TopBar> */}
            <div className="loginContentContainer">

                <div className="authFieldsBox">

                    <div className="LoginLogoAndTextContainer">
                        <Link to="/" className="topBarLogoName">
                            <div className="logo">
                                <img src={Logo} style={{ width: 100 }} alt="AutoHelm Logo" />
                            </div>
                            <p className="LoginLogoText">AutoHelm</p>
                        </Link>
                    </div>

                    <div style={{ height: 40 }}></div>

                    <input style={{
                        borderRadius: 20,
                        fontSize: 15,
                        paddingLeft: 20,
                        paddingRight: 20,
                    }} className="searchBar" value={emailInputValue} placeholder="Email" onChange={(e) => setEmailInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter'}
                    />

                    <div style={{ height: 20 }}></div>

                    <input style={{
                        borderRadius: 20,
                        fontSize: 15,
                        paddingLeft: 20,
                        paddingRight: 20,
                    }} className="searchBar" value={passwordInputValue} placeholder="Password" onChange={(e) => setPasswordInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter'}
                    />

                    <div style={{ height: 40 }}></div>

                    <div onClick={() => { }} className="loginButton" style={{ cursor: "pointer" }}>Login</div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Login;