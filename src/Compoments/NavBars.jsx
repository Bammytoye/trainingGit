import React from "react";
import { Link } from "react-router-dom";

const NavBars = () => {
    return (
        <div>
            {/* WITHOUT ROUTE */}

            {/* <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a> */}

            {/* <BsCheck2All/> */}
            {/* <img src={image}/> */}
            <img src="/public/nigeriaFlag.jpg" alt="" />
            {/* <image */}

            {/* WITH ROUTE */}
            <nav className="bg-gray-600 p-5 flex justify-between">
                <Link to="/" className="text-white hover:text-amber-800">
                    Home
                </Link>
                <Link to="/contact" className="text-white hover:text-amber-800">
                    Map
                </Link>
                <Link to="/footer" className="text-white hover:text-amber-800">
                    Async
                </Link>
            </nav>
        </div>
    );
};

export default NavBars;
