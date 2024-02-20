import { React } from "react";
import "../App.css"
import { getStorage } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
import { initializeFirebase as initializeFirebase, downloadAhilFile } from '../firebase';

const AHILEntry = ({ firebaseApp, entryTitle, entryUsername, entryDateCreated, entryDescription, entryPath }) => {

    const storage = getStorage(firebaseApp);

    const downloadClick = () => {
        downloadAhilFile(storage, entryTitle, entryPath, true);
    };

    return (
        <div className="AHILEntry">
            <div className="entryContainer">
                <h1 className="entryTitle">{entryTitle}</h1>
                <h4 className="entryUsername">Made by {entryUsername}</h4>
                <h6 className="entryDateCreated">{entryDateCreated}</h6>
                <p className="entryDescription">{entryDescription}</p>
                <div onClick={downloadClick} className="entryDownload" style={{ cursor: "pointer" }}>DOWNLOAD</div>
            </div>
        </div>
    );
}

export default AHILEntry;