import "../styles/globals.scss";
import Script from "next/script";

import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Script id="next"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-4CGFM9BWS4`}>
            </Script>
            <Script id="next">
                {
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-4CGFM9BWS4');console.log('hi');`
                }
            </Script>
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
