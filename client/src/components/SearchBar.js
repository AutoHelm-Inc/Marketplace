import React, { useState } from "react";
import "../App.css"
import SearchIcon from '../assets/search-icon.png';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState(props.searchText);

    const navURL = props.navURL;

    const searchBarFunc = (event) => {
        navigate(`${navURL}?q=${inputValue}`);
    };

    const searchIconFunc = (event) => {
        if (inputValue == "") {
            navigate(`${navURL}?q=`);
        } else {
            navigate(`${navURL}?q=${inputValue}`);
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
                    }} className="searchBar" value={inputValue} placeholder="Search For Workflow..." onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && searchBarFunc(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;