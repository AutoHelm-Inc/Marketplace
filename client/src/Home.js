import "./App.css"
import PersonOnComputer from './assets/computer_screen.svg'
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import React, { useState } from "react";
import GridLines from 'react-gridlines';

const Home = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="home">
            <GridLines className="grid-area" cellWidth={60} strokeWidth={2} cellWidth2={120} lineColor="#28282C">

                <TopBar></TopBar>
                <div className="homeContentContainer">
                    <div className="HomeLeftSideContainer">
                        <div>
                            <h1 className="HomeScreenText">Automation Workflows</h1>
                            <h1 className="HomeScreenText">Made for Convenience.</h1>
                        </div>
                        <div className="homeExploreBarContainer">
                            <SearchBar searchText={""} navURL={"/explore"} />
                        </div>
                    </div>
                    <div className="PersonOnComputerContainerRight">
                        <img src={PersonOnComputer} style={{ height: '100%', marginLeft: 0 }} alt="Person on Computer" />
                    </div>
                </div>
                <Footer></Footer>
            </GridLines>
        </div>
    );
}

export default Home;