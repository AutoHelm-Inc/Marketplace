import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import AHILEntry from "./components/AHILEntry";

const Explore = () => {
    return (
        <div className="explore">
            <TopBar></TopBar>
            <div className="homeContentContainer">
                <AHILEntry></AHILEntry>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Explore;