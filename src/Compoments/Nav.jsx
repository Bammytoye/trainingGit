import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className="bg-gray-600 p-4 px-5 flex justify-between">
                <Link to="/">Dashboard</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
                <Link>Home</Link>
            </nav>
        </div>
    );
};

export default Nav;
