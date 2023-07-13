import { useState, useEffect, Text, input } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Explore from './Explore'
import "./App.css"
import PersonOnComputer from './assets/person_on_computer.svg'

const Home = () => {
    return (
        <div className="home">

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

                    <input style={{
                        marginTop: 20,
                        width: "100%",
                        paddingLeft: "20px",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        fontSize: 18,
                        borderRadius: 30,
                    }} placeholder="Search for workflow..." value={input} />
                </div>

                <div className="PersonOnComputerContainer">
                    <img src={PersonOnComputer} style={{ height: '85vh', alignSelf: 'flex-end' }} alt="Person on Computer" />
                </div>
            </div>


            <Routes>
                <Route path="explore" element={<Explore />} />
            </Routes>
        </div>
    );
}

export default Home;