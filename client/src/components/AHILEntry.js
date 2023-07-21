import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

const AHILEntry = () => {
    return (
        <div className="AHILEntry">
            <div className="entryContainer">
               <h1 className="entryTitle">Hello World</h1>
               <h4 className="entryUsername">Made by bcarrion</h4>
               <h6 className="entryDateCreated">15/03/2023</h6>
               <p className="entryDescription">Apple Inc. is quietly working on artificial intelligence tools that could
                                                challenge those of OpenAI Inc., Alphabet Inc.’s Google and others, but the
                                                company has yet to devise a clear strategy for releasing the technology to consumers.
                                                The iPhone maker has built its own framework to create large language models — the AI-based
                                                systems at the heart of new offerings like ChatGPT and Google’s Bard — according
                                                to people with knowledge of the efforts. With that foundation, known as “Ajax,”
                                                Apple also has created a chatbot service that some engineers call “Apple GPT.”</p>
               <Link className="entryDownload">Download</Link>
            </div>
        </div>
    );
}

export default AHILEntry;