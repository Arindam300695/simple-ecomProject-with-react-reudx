import { useSelector, useDispatch } from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { toast } from "react-hot-toast";

const Cart = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.items);
    const totalPrice = useSelector((state) => state.totalPrice);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };
    const handleCheckout = () => {
        navigate("/thankyou");
        dispatch({ type: "CLEAR_CART" });
    };
    const removeFromCart = (item) => {
        toast.success("Item removed successfully from cart");
        dispatch({ type: "REMOVE_FROM_CART", payload: item });
    };
    const addToCart = (item) => {
        toast.success("Item added successfully");
        dispatch({ type: "ADD_TO_CART", payload: item });
    };

    return (
        <>
            <Header />
            <div className="container py-8 mx-auto text-center">
                <h2 className="mb-4 text-2xl font-bold">Cart Page</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="flex flex-col">
                        {cartItems?.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-4 mb-4 text-left transition duration-300 bg-white rounded-lg shadow hover:shadow-lg"
                            >
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <p className="text-lg font-semibold">
                                            {item.title}
                                        </p>
                                        <p className="text-gray-500">
                                            Price: {item.price}
                                        </p>
                                        <p className="text-gray-500">
                                            Count: {item.count}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="p-2 ml-4 font-semibold text-red-500 bg-green-400 rounded-lg hover:text-red-700 active:scale-[0.75]"
                                >
                                    Add
                                </button>
                                <button
                                    onClick={() => removeFromCart(item)}
                                    className="ml-4 text-red-500 hover:text-red-700 active:scale-[0.75]"
                                >
                                    <FiTrash2 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-bold">
                                Total Price: {totalPrice}
                            </p>
                            <button
                                onClick={handleClearCart}
                                className="px-4 py-2 text-white transition duration-300 bg-red-500 rounded hover:bg-red-700 active:scale-[0.75]"
                            >
                                Clear Cart
                            </button>
                        </div>
                        <h1
                            className="px-4 py-2 mt-8 text-white transition duration-300 bg-green-500 rounded cursor-pointer hover:bg-green-700 active:scale-[0.75]"
                            onClick={handleCheckout}
                        >
                            Proceed to Checkout
                        </h1>
                    </div>
                )}
                <button
                    className="w-[50%] mt-4 px-4 py-2 text-white transition duration-300 bg-red-500 rounded hover:bg-red-700 active:scale-[0.75]"
                    onClick={() => {
                        setTimeout(() => {
                            navigate("/");
                        }, 1200);
                    }}
                >
                    Go Back to Home
                </button>
            </div>
        </>
    );
};

export default Cart;
