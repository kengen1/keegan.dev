import { motion } from "framer-motion";
import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Error from "next/error";
import styles from "./404.module.scss";
import { ErrorPage } from "../src/components/Error";

const NotFoundPage: NextPage = () => {
    const router = useRouter();
    const notFoundPath = router ? router.asPath : "";

    return (
        <ErrorPage
            errorMessage={"Couldn't find anything at that URL."}
            homeUrl="/"
            errorCode="404"
        />
    );
};

export default NotFoundPage;