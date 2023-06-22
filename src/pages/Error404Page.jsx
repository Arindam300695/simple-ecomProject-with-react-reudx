import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-white mb-8">Oops!</h1>
            <p className="text-2xl text-gray-300 mb-8">
                Something went wrong...
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6 py-3 font-semibold focus:outline-none active:scale-[0.75] transition-all duration-300">
                <NavLink to="/"> Refresh Page</NavLink>
            </button>
        </div>
    );
};

export default ErrorPage;
