import { useState, useEffect, React } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import AHILEntry from "./components/AHILEntry";
import { useLocation } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { initializeFirebase as initializeFirebase, databaseToJson, searchDatabaseProjects } from './firebase';


const Explore = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("q");

    const [queriedJson, setQueriedJson] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const app = initializeFirebase();
            const answer = await databaseToJson();
            const queriedData = searchDatabaseProjects(answer, query);
            console.log(queriedData)
            setQueriedJson(queriedData);
        };
        fetchData();
    }, [query]);

    return (
        <div className="explore">
            <TopBar></TopBar>
            <div className="exploreSearch">
                <SearchBar />
            </div>
            <div className="exploreContentContainer">
                {queriedJson.map((entry) => (
                    <AHILEntry entryTitle={entry.Name} entryUsername={entry.Username} entryDateCreated={entry.Created} entryDescription={entry.Description} entryPath={entry.Path} />
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Explore;