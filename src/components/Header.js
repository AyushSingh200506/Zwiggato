import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [LoggedIn, setLoggedIn] = useState("Login");
    return (
        <div className="header">
            <div className="logo.container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className = "Login" onClick={() => {
                        setLoggedIn(LoggedIn === "Login" ? "Logout" : "Login");
                    }}>
                        {LoggedIn}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;