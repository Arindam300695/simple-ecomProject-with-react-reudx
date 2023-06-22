import Header from "../components/Header";

const AboutPage = () => {
    return (
        <>
            <Header />
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        About Us
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Company Logo"
                            className="w-64 h-64 rounded-full object-cover mb-8 md:mb-0 md:mr-8"
                        />
                        <div className="max-w-lg">
                            <p className="text-gray-700 mb-4 font-semibold">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam sit amet nisi nec lectus
                                semper consectetur. Nullam consectetur feugiat
                                nunc vitae lobortis. Nam pellentesque
                                consectetur risus, in consequat nunc. Nulla vel
                                feugiat justo, nec pharetra enim.
                            </p>
                            <p className="text-gray-700 mb-4 font-semibold">
                                Vestibulum varius aliquam nunc. Aenean sodales
                                tristique dui sed laoreet. Nulla maximus, metus
                                a eleifend aliquam, mauris elit tristique neque,
                                at hendrerit purus lectus vitae dui. Quisque
                                quis scelerisque lectus, ac rhoncus est.
                            </p>
                            <p className="text-gray-700 font-semibold">
                                Sed lacinia dui vel erat ullamcorper, eget
                                gravida lectus volutpat. Vivamus maximus urna
                                vitae urna volutpat, ut vehicula justo rhoncus.
                                Cras et facilisis nisl. In hac habitasse platea
                                dictumst.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
