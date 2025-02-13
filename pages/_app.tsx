import portfolio from "../content/portfolio";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { useTransitionFix } from "@/hooks/router";
import { Navbar } from "@/components/Navbar";
import { ParticleWallpaper } from "@/components/Wallpaper";
import "styles/_global.scss";
import { TitleCard } from "@/components/TitleCard/TitleCard";

const App = ({ Component, pageProps }: AppProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    useTransitionFix();

    return (
        <>
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
            <ParticleWallpaper/>
            <TitleCard />
            <Navbar />
            <Component {...pageProps} />
        </>
    );
};

export default App;
