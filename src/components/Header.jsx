import { FaShoppingCart } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const Header = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.items);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {/* normal navbar section starts here */}
            <header className="hidden bg-white shadow sm:inline">
                <div className="container flex items-center justify-between px-4 py-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center">
                        <RiShoppingBasketLine className="text-2xl text-gray-800" />
                        <h1 className="ml-2 text-xl font-bold text-gray-800">
                            E-commerce Store
                        </h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <NavLink
                            to="/"
                            className="block mb-4 text-xl font-semibold transition duration-300 text-slate-900 hover:text-purple-500"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/shop"
                            className="block mb-4 text-xl font-semibold transition duration-300 text-slate-900 hover:text-purple-500"
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="block mb-4 text-xl font-semibold transition duration-300 text-slate-900 hover:text-purple-500"
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="block mb-4 text-xl font-semibold transition duration-300 text-slate-900 hover:text-purple-500"
                        >
                            Contact
                        </NavLink>
                        <div className="relative mr-4">
                            <FaShoppingCart className="text-2xl text-gray-800" />
                            <span
                                className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full cursor-pointer -top-1 -right-1 active:scale-[0.75] transition-all duration-300"
                                onClick={() => {
                                    navigate("/cart");
                                }}
                            >
                                {cartItems.length}
                            </span>
                        </div>
                    </div>
                </div>
            </header>
            {/* normal navbar section endts here */}

            {/* mobile navbar section starts here */}
            <header className="font-bold bg-white shadow sm:hidden">
                <div className="container flex items-center justify-between px-4 py-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center">
                        <RiShoppingBasketLine className="text-2xl text-gray-800" />
                        <h1 className="ml-2 text-xl font-bold text-gray-800">
                            E-commerce Store
                        </h1>
                    </div>
                    <div className="relative sm:hidden">
                        <button
                            type="button"
                            className="text-gray-800 hover:text-gray-900 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isOpen ? (
                                <FiX className="text-2xl transition duration-300 ease-in-out transform hover:rotate-45" />
                            ) : (
                                <FiMenu className="text-2xl transition duration-300 ease-in-out transform hover:scale-110" />
                            )}
                        </button>
                        <div className="transition-all duration-1000 ">
                            {isOpen ? (
                                <div className="absolute top-10 right-[-16px] h-[30rem] w-screen  bg-purple-600 shadow-md py-2 z-10 transition-all duration-1000">
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <NavLink
                                            to="/"
                                            className="block mb-4 text-xl text-white transition duration-300 hover:text-purple-500"
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to="/shop"
                                            className="block mb-4 text-xl text-white transition duration-300 hover:text-purple-500"
                                        >
                                            Shop
                                        </NavLink>
                                        <NavLink
                                            to="/about"
                                            className="block mb-4 text-xl text-white transition duration-300 hover:text-purple-500"
                                        >
                                            About
                                        </NavLink>
                                        <NavLink
                                            to="/contact"
                                            className="block mb-4 text-xl text-white transition duration-300 hover:text-purple-500"
                                        >
                                            Contact
                                        </NavLink>
                                        <div className="relative mr-4">
                                            <FaShoppingCart className="text-2xl text-gray-800" />
                                            <span
                                                className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full cursor-pointer -top-1 -right-1 active:scale-[0.75] transition-all duration-300"
                                                onClick={() => {
                                                    navigate("/cart");
                                                }}
                                            >
                                                {cartItems.length}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="absolute top-[-500px] right-[-16px] h-[30rem] w-screen bg-purple-600 shadow-md py-2 z-10 transition-all duration-1000">
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <NavLink
                                            to="/"
                                            className="block mb-4 text-xl text-white transition duration-300 hover:text-purple-500"
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to="/shop"
                                            className="block mb-4 text-xl text-white transition duration-300 hover:text-purple-500"
                                        >
                                            Shop
                                        </NavLink>
                                        <NavLink
                                            to="/about"
                                            className="block mb-4 text-xl text-white transition duration-300 hover:text-purple-500"
                                        >
                                            About
                                        </NavLink>
                                        <NavLink
                                            to="/contact"
                                            className="block mb-4 text-xl text-white transition duration-300 hover:text-purple-500"
                                        >
                                            Contact
                                        </NavLink>
                                        <div className="relative mr-4">
                                            <FaShoppingCart className="text-2xl text-gray-800" />
                                            <span
                                                className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full cursor-pointer -top-1 -right-1 active:scale-[0.75] transition-all duration-300"
                                                onClick={() => {
                                                    navigate("/cart");
                                                }}
                                            >
                                                {cartItems.length}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            {/* mobile navbar section ends here */}
            <Toaster />
        </>
    );
};

export default Header;
