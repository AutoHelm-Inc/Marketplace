import React, { useState } from "react";
import "../App.css"
import SearchIcon from '../assets/search-icon.png';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState("");

    const searchBarFunc = (event) => {
        const query = event.target.value;
        navigate(`/explore?q=${query}`);

    };

    const searchIconFunc = (event) => {
        const query = document.querySelector(".searchBar").value;
        if (query == "") {
            navigate(`/explore`);
        } else {
            navigate(`/explore?q=`);
        }
    };

    return (
        <div>
            <div className="searchBar">
                <div className="searchBarContainer">
                    <div className="searchIcon">
                        <img src={SearchIcon} alt="Search" onClick={searchIconFunc} style={{ cursor: "pointer" }} />
                    </div>
                    <input style={{
                        borderRadius: 30,
                        fontSize: 18,
                        paddingLeft: 20,
                    }} className="searchBar" placeholder="Search For Workflow..." onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && searchBarFunc(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;