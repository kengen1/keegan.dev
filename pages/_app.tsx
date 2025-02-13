import portfolio from "../content/portfolio";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { useTransitionFix } from "@/hooks/router";
import { Navbar } from "@/components/Navbar"; // ✅ Import Navbar
import { ParticleWallpaper } from "@/components/Wallpaper";
import "styles/_global.scss";

const App = ({ Component, pageProps }: AppProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    useTransitionFix();

    return (
        <>
        
            {/* Meta Head */}
            <Head>
                <title>{portfolio.meta.mainTitle}</title>
                <meta
                    name="description"
                    content={portfolio.meta.mainDescription}
                />
                <meta property="og:title" content={portfolio.meta.ogTitle} />
                <meta
                    property="og:description"
                    content={portfolio.meta.ogDescription}
                />
            </Head>

            {/* ✅ Add Particle Background */}
            <ParticleWallpaper/>

            {/* ✅ Render Navbar above Particle Background */}
            <Navbar />

            {/* ✅ Render Main Page Content */}
            <Component {...pageProps} />
        </>
    );
};

export default App;
