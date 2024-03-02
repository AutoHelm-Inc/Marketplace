import { useState, useEffect, React } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import AHILEntry from "./components/AHILEntry";
import { useLocation } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { databaseToJson_Public, getPublicWorkflows } from './firebase';
import NoSearchResults from './assets/no_search_results.svg'
import GridLines from 'react-gridlines';

const Explore = (props) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let query = queryParams.get("q");

    const [queriedJson, setQueriedJson] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!query) {
                query = "";
            }
            const answer = await databaseToJson_Public();
            const queriedData = getPublicWorkflows(answer, query);
            console.log(queriedData)
            setQueriedJson(queriedData);
        };
        fetchData();
    }, [query]);

    return (
        <div className="explore">
            <GridLines className="grid-area" cellWidth={60} strokeWidth={2} cellWidth2={120} lineColor="#28282C">
                <TopBar></TopBar>
                <div className="exploreSearch">
                    <SearchBar searchText={location.search.substring(3)} navURL={"/explore"} />
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
            </GridLines>
        </div>
    );
}

export default Explore;