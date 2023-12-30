// Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-100 p-4 text-gray-800 border-b-2 border-t-4 border-t-green-800 border-b-gray-300">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/question" className="text-green-900 text-2xl italic font-black font-Nunito">AskNaija</Link>

                {/* Hamburger menu for mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none focus:shadow-outline"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navbar links */}
                <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="lg:flex lg:ml-4">
                        <Link to="/question" className=" font-bold px-3 py-2 rounded-md text-sm ">Home</Link>
                        <Link to="/about" className=" font-bold px-3 py-2 rounded-md text-sm ">About</Link>
                        {/* Add more links as needed */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
