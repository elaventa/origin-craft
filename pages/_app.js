import "../styles/globals.scss";

import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                title="Origin Craft UAE"
                description="At Origin Craft, we provide creative and professionally made customized Leather & Paper- Boxes & Holders for any product."
                openGraph={{
                    type: "website",
                    locale: "en_IE",
                    url: "https://origincraft.ae/",
                    siteName: "OriginCraft",
                    images: [
                        {
                            url: "https://res.cloudinary.com/dpurlepvo/image/upload/v1679722897/bag_jedhvu.webp",
                        },
                    ],
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
