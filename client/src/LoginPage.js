import { useState, useEffect, React, cloneElement } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./assets/AutoHelmLogo.png"
import PersonLoggingIn from './assets/person_logging_in.svg'
import Teamwork from './assets/teamwork.svg'
import ReactLoading from 'react-loading';

import { auth, login } from './firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = (props) => {
    const [emailInputValue, setEmailInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const [firebaseInitialized, setFirebaseInitialized] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const signIn = async () => {
        if (!emailInputValue || !passwordInputValue) {
            setErrorMessage("Some field is empty.");
            return;
        }
        setErrorMessage(null);
        try {
            await login(emailInputValue, passwordInputValue);
            console.log(emailInputValue);
            navigate('/myworkflows');
        } catch (error) {
            switch (error.code) {
                case "auth/user-disabled":
                    setErrorMessage("The account has been disabled.");
                    break;
                case "auth/user-not-found":
                    setErrorMessage("The email or pass is incorrect.");
                    break;
                case "auth/wrong-password":
                    setErrorMessage("Wrong Password.");
                    break;
                case "auth/invalid-email":
                    setErrorMessage("The email is invalid.");
                    break;
                default:
                    setErrorMessage("Something went wrong. Please try again.");
            }
            console.log(error);
        }
    }

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
                        <div style={{color: '#ff4444', height: 60, display: "flex", alignItems: "center", justifyContent: "center"}}>{errorMessage}</div>

                        {/* <div style={{ height: 40 }}></div> */}

                        <div onClick={() => { signIn(emailInputValue, passwordInputValue) }} className="loginButton" style={{ cursor: "pointer" }}>Login</div>
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