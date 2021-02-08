import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Image from "./src/images/icon.png";

function Head() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Netflix</title>
                <meta property="og:title" content="Netflix" />
                <meta property="og:image" content={Image} />
                <meta
                    property="og:description"
                    content="A Netflix Interface created using React"
                />
                <meta property="og:url" content="" />
            </Helmet>
        </HelmetProvider>
    );
}

export default Head;