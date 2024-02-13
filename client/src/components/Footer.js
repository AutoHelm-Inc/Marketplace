import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <Link to="https://www.freepik.com/free-vector/gamer-playing-with-computer_4911346.htm#&position=1&from_view=undefined" className="creditLink">PersonOnComputer Image by pikisuperstar on Freepik</Link>
                </div>
                <div>
                    <Link to="https://www.freepik.com/free-vector/office-concept-illustration_6183516.htm#page=2&query=work&position=31&from_view=search&track=sph&uuid=225f0283-1295-4eee-89b9-559b5167a458" className="creditLink">Login Image by storyset on Freepik</Link>
                </div>
                <div>
                    <Link to="https://icons8.com/icon/132/search" className="creditLink">Search Icon by </Link><Link className="creditLink" to="https://icons8.com">Icons8</Link>
                </div>
                <div>
                    <Link to="https://www.freepik.com/free-vector/seo-concept-illustration_13717663.htm#query=search&position=8&from_view=search&track=sph" className="creditLink">NoSearchResults Image by storyset on Freepik</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;