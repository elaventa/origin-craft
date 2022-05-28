import "../styles/globals.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
