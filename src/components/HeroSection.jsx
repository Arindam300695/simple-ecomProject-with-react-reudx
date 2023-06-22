import { NavLink } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            <div className="bg-gray-900">
                <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                            Welcome to our E-commerce Store
                        </h1>
                        <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-300 sm:mt-5 sm:text-2xl md:mt-5 md:text-3xl">
                            Browse our collection of products and find what you
                            need.
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
                            <div className="rounded-md shadow">
                                <NavLink
                                    to="/shop"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-gray-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 active:scale-[0.75] transition-all duration-100"
                                >
                                    Shop Now
                                </NavLink>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <NavLink
                                    to="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 active:scale-[0.75] transition-all duration-100"
                                >
                                    Learn More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
