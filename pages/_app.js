import "../styles/globals.scss";
import Navbar from "../components/Navbar/Navbar";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <GetInTouch />
            <Footer />
        </>
    );
}

export default MyApp;
