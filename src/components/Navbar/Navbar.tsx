import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Button } from "../Button";

import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaCode
} from "react-icons/fa";

const Navbar: React.FC = () => {
    const horizontalButtons = [
        { icon: <FaHome />, label: "Home", link: "/" },
        { icon: <FaUser />, label: "About", link: "/about" },
        { icon: <FaBriefcase />, label: "Career", link: "/work" },
        { icon: <FaCode />, label: "Projects", link: "/projects" },
    ];

    return (
        <>
            <nav className={`${styles.navbar} ${styles["navbar--horizontal"]}`}>
                {horizontalButtons.map(({ icon, label, link }) => (
                    <Link key={label} href={link} legacyBehavior>
                        <a>
                            <Button icon={icon} text={label} iconPosition="left" />
                        </a>
                    </Link>
                ))}
            </nav>
        </>
    );
};

export default Navbar;