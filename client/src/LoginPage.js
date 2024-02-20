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
import PersonLoggingIn from './assets/person_logging_in.svg'
import Teamwork from './assets/teamwork.svg'
import { login } from './firebase'
import ReactLoading from 'react-loading';
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const [emailInputValue, setEmailInputValue] = useState(props.searchText);
    const [passwordInputValue, setPasswordInputValue] = useState(props.searchText);
    const [firebaseInitialized, setFirebaseInitialized] = useState(true);
    const [app, setApp] = useState(null);

    // const app = initializeFirebase();
    // setTimeout(() => {
    //     setFirebaseInitialized(true);
    // }, 200)

    const handleLogin = async () => {
        await login(app, emailInputValue, passwordInputValue);
        // const nav = useNavigate();
        // nav.push("/explore");
    };


    // if (!firebaseInitialized) {
    //     return <ReactLoading type={"spin"} color={"#5298FA"} height={100} width={100} />
    // }

    // return (
    //     <div className="login">
    //         <TopBar></TopBar>
    //         <div className="loginContentContainer">
    //             <ReactLoading type={"spin"} color={"#5298FA"} height={100} width={100} />
    //         </div>
    //     </div>
    // )
    return (
        <div className="login">
            {!firebaseInitialized ?
                (
                    <div>
                        <TopBar></TopBar>
                        <div className="loginContentContainer">
                            <ReactLoading type={"spin"} color={"#5298FA"} height={100} width={100} />
                        </div>
                    </div>) :

                (<div className="loginContentContainer">

                    <div className="authFieldsBox">

                        <Link to="/" className="topBarLogoName">
                            <div className="LoginLogoAndTextContainer">
                                <div className="logo">
                                    <img src={Logo} style={{ width: 100 }} alt="AutoHelm Logo" />
                                </div>
                                <p className="LoginLogoText">AutoHelm</p>
                            </div>
                        </Link>

                        <div style={{ height: 40 }}></div>

                        <input style={{
                            borderRadius: 20,
                            fontSize: 15,
                            paddingLeft: 20,
                            paddingRight: 20,
                        }} className="emailInput" value={emailInputValue} placeholder="Email" onChange={(e) => setEmailInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter'}
                        />

                        <div style={{ height: 20 }}></div>

                        <input type="password" style={{
                            borderRadius: 20,
                            fontSize: 15,
                            paddingLeft: 20,
                            paddingRight: 20,
                        }} className="passwordInput" value={passwordInputValue} placeholder="Password" onChange={(e) => setPasswordInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter'}
                        />

                        <div style={{ height: 40 }}></div>

                        <div onClick={() => { handleLogin() }} className="loginButton" style={{ cursor: "pointer" }}>Login</div>
                    </div>

                    <div style={{ height: 20 }}></div>
                    <small className="PolicyText">One account for marketplace & desktop</small>
                    <div style={{ height: 5 }}></div>
                    <small className="PolicyText">Please read our privacy policy for more information</small>

                    <div className="peronLoggingInImageContainer">
                        <img src={PersonLoggingIn} style={{ height: 400, maxHeight: 500 }} alt="Person logging in" />
                    </div>

                    <div className="teamworkContainer">
                        <img src={Teamwork} style={{ height: 300, maxHeight: 500 }} alt="People with puzzle pieces" />
                    </div>

                </div>)
            }
            <Footer></Footer>
        </div>
    );
}

export default Login;