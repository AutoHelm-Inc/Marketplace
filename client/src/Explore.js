import { useState, useEffect, React } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import AHILEntry from "./components/AHILEntry";
import { useLocation } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { initializeFirebase as initializeFirebase, databaseToJson, searchDatabaseProjects } from './firebase';
import NoSearchResults from './assets/no_search_results.svg'

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
                <SearchBar searchText={location.search.substring(3)} />
            </div>
            <div className="exploreContentContainer">
                {queriedJson.length == 0 ?
                    <div>
                        <h1 style={{ color: "White", fontSize: 45, justifyContent: "center" }}>No Results!</h1>
                        <div className="NoSearchResultsImageContainer">
                            <img src={NoSearchResults} style={{ height: '55vh', alignSelf: 'flex-end' }} alt="Person on Computer" />
                        </div>
                    </div>
                    :
                    queriedJson.map((entry) => (
                        <AHILEntry entryTitle={entry.Name} entryUsername={entry.Username} entryDateCreated={entry.Created} entryDescription={entry.Description} entryPath={entry.Path} />
                    ))}
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Explore;