import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProductsSlider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();

            // Fetching first 6 products
            const slicedData = data.slice(0, 6);

            // Generate random image URL for each product
            const productData = slicedData.map((product) => ({
                ...product,
                image: `https://picsum.photos/400/300?random=${product.id}`,
            }));

            setProducts(productData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000, // Auto slide after 2 seconds
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-8">
            <h2 className="text-3xl font-bold text-center mb-8">
                Featured Products
            </h2>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="px-4">
                        <div className="bg-[#E3F6FF] rounded-lg shadow-lg p-4 text-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="mb-4 rounded-lg m-auto"
                            />
                            <h3 className="text-xl font-semibold mb-4">
                                {product.title}
                            </h3>
                            <p className="text-gray-700 font-semibold">
                                {product.body}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default FeaturedProductsSlider;
