import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const cartItems = useSelector((state) => state.items);
    const totalPrice = useSelector((state) => state.totalPrice);
    console.log(totalPrice);
    const dispatch = useDispatch();
    console.log(cartItems);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = response.data.slice(0, 50); // Fetching first 8 products
            const newProducts = data.map((item) => ({
                ...item,
                price: Math.floor(Math.random() * 1000),
            }));
            setProducts(newProducts);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const addToCart = (item) => {
        toast.success("Item added successfully");
        dispatch({ type: "ADD_TO_CART", payload: item });
    };
    const removeFromCart = (item) => {
        toast.success("Item removed successfully");
        dispatch({ type: "REMOVE_FROM_CART", payload: item });
    };

    return (
        <section className="py-8 bg-gray-200">
            <div className="container px-4 mx-auto text-center">
                <h2 className="mb-8 text-3xl font-bold text-center">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#060047] rounded-lg shadow-lg p-4"
                        >
                            <div
                                className="h-40 mb-4 bg-purple-500 bg-opacity-75 rounded-lg"
                                style={{
                                    backgroundImage: `url('https://picsum.photos/400/300?random=${product.id}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <h3 className="mb-2 text-lg font-semibold text-gray-300">
                                {product.title}
                            </h3>
                            <h3 className="mb-2 text-lg font-semibold text-gray-300">
                                ₹{product.price}
                            </h3>
                            <p className="text-gray-300">{product.body}</p>
                            <button
                                className="px-4 py-2 mt-4 mr-4 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
                                onClick={() =>
                                    addToCart({
                                        id: product.id,
                                        title: product.title,
                                        price: product.price,
                                    })
                                }
                            >
                                Add to Cart
                            </button>
                            <button
                                className="px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
                                onClick={() =>
                                    removeFromCart({
                                        id: product.id,
                                        title: product.title,
                                        price: product.price,
                                    })
                                }
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
