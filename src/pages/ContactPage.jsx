import Header from "../components/Header";

const ContactPage = () => {
    return (
        <>
            <Header />
            <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Contact Us
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="text-gray-700 font-semibold"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="text-gray-700 font-semibold"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="text-gray-700 font-semibold"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                                rows="5"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-md px-4 py-2 font-semibold focus:outline-none"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
