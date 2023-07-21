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
                    <Link to="https://www.vecteezy.com/free-vector/vector" className="creditLink">Logo Boat Vector by Vecteezy</Link>
                </div>
                <div>
                    <Link to="https://icons8.com/icon/132/search" className="creditLink">Search Icon by </Link><Link className="creditLink" to="https://icons8.com">Icons8</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;