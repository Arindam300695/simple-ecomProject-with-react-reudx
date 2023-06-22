import { Link } from "react-router-dom";

const ThankYouPage = () => {
    return (
        <div className="container py-8 mx-auto text-center">
            <h2 className="mb-4 text-2xl font-bold">
                Thank You for Your Purchase!
            </h2>
            <p className="mb-4 text-lg">
                Your order has been successfully placed.
            </p>
            <p className="mb-8 text-lg">We appreciate your business.</p>
            <Link
                to="/shop"
                className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
            >
                Continue Shopping
            </Link>
        </div>
    );
};

export default ThankYouPage;
