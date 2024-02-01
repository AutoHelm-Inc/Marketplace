import "./App.css"
import PersonOnComputer from './assets/person_on_computer.svg'
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import React, { useState } from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="home">
            <TopBar></TopBar>
            <div className="homeContentContainer">
                <div className="HomeLeftSideContainer">
                    <h1 className="HomeScreenText">Automation Workflows</h1>
                    <h1 className="HomeScreenText">Made for Convenience.</h1>
                    <SearchBar />
                    {/* <div className="PersonOnComputerContainerBottom">
                        <img src={PersonOnComputer} style={{ width: '90%'}} alt="Person on Computer" />
                    </div> */}
                </div>
                <div className="PersonOnComputerContainerRight">
                    <img src={PersonOnComputer} style={{ height: '100%' }} alt="Person on Computer" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;