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
                    {/* <p style="font-size:50px;">
                        Automation Workflows
                    </p>

                    <p style="font-size:50px;">
                        All made for you.
                    </p> */}
                    <h1 style={{ color: "White", fontSize: '300%', alignSelf: "center" }}>Automation Workflows</h1>
                    <h1 style={{ color: "White", fontSize: '250%', alignSelf: "center" }}>Made for Convenience.</h1>

                    <SearchBar />
                </div>
                <div className="PersonOnComputerContainer">
                    <img src={PersonOnComputer} style={{ height: '100%', alignSelf: 'flex-end' }} alt="Person on Computer" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;