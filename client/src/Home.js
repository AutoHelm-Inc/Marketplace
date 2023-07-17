import { useState, useEffect, Text, input } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate  } from 'react-router-dom'
import Explore from './Explore'
import "./App.css"
import PersonOnComputer from './assets/person_on_computer.svg'
import SearchIcon from './assets/search-icon.png'
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

const Home = () => {

    const navigate = useNavigate();

    const searchBarFunc = (event) => {
        const query = event.target.value;
        if (query != ""){
            navigate(`/explore?q=${query}`);
        }
    };

    const searchIconFunc = (event) => {
        const query = document.querySelector(".searchBar").value;
        if (query != ""){
            navigate(`/explore?q=${query}`);
        }
    };
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
                    <h1 style={{ color: "White", fontSize: 45 }}>Automation Workflows</h1>
                    <h1 style={{ color: "White", fontSize: 45 }}>Made for Convenience.</h1>

                    <div className="searchBarContainer">  
                        <div className="searchIcon">
                            <img src={SearchIcon} alt="Search" onClick={searchIconFunc}/>
                        </div>
                        <input style={{
                            borderRadius: 30,
                            fontSize: 18
                        }} className="searchBar" placeholder="Search For Workflow..." value={input} onKeyPress={(e) => e.key === 'Enter' && searchBarFunc(e)}>
                        </input>
                    </div>
                </div>
                <div className="PersonOnComputerContainer">
                    <img src={PersonOnComputer} style={{ height: '85vh', alignSelf: 'flex-end' }} alt="Person on Computer" />
                </div>
            </div>
            <Routes>
                <Route path="explore" element={<Explore />} />
            </Routes>
            
            <Footer></Footer>
        </div>
    );
}

export default Home;