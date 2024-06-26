import { useState, useEffect, React } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import AHILEntry from "./components/AHILEntry";
import { useLocation, Navigate } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { databaseToJson, searchDatabaseProjects, getUserWorkflows, auth, databaseToJson_Private, databaseToJson_Public } from './firebase';
import NoSearchResults from './assets/no_search_results.svg'
import { useAuth } from './contexts/AuthContext'
import GridLines from 'react-gridlines';

const MyWorkflows = (props) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("q");

    const [queriedJson, setQueriedJson] = useState([]);
    const { authUser: user } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            if (!user) {
                return;
            }
            const databaseJsonPrivate = await databaseToJson_Private(auth.currentUser.email);
            const databaseJsonPublic = await databaseToJson_Public();
            let queriedData = getUserWorkflows(auth.currentUser.email, databaseJsonPrivate, databaseJsonPublic);
            console.log(queriedData);
            if (query) {
                queriedData = queriedData.filter((workflow) => workflow["Name"].toLowerCase().includes(query.toLowerCase()));
            }
            setQueriedJson(queriedData);
        };
        fetchData();
    }, [query]);

    if (!user) {
        return <Navigate to="/" replace />
    }

    return (
        <div className="explore">
            <GridLines className="grid-area" cellWidth={60} strokeWidth={2} cellWidth2={120} lineColor="#28282C">
                <TopBar></TopBar>
                <div className="exploreSearch">
                    <SearchBar searchText={location.search.substring(3)} navURL={"/myworkflows"} />
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

export default MyWorkflows;