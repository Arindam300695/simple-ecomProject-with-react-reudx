import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
    return (
        <div className="h-screen overflow-hidden overflow-y-scroll">
            <Header />
            <HeroSection />
            <FeaturedProducts />
        </div>
    );
};

export default HomePage;
