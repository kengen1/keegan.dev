import React from "react";
import styles from "./Navbar.module.scss";
import { NavbarButton } from "../Button";

import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaCode,
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaFileAlt,
} from "react-icons/fa";

const Navbar: React.FC = () => {
    const horizontalButtons = [
        { icon: <FaHome />, label: "Home" },
        { icon: <FaUser />, label: "About" },
        { icon: <FaBriefcase />, label: "Work" },
        { icon: <FaCode />, label: "Projects" },
    ];

    const verticalButtons = [
        { icon: <FaGithub />, label: "GitHub" },
        { icon: <FaLinkedin />, label: "LinkedIn" },
        { icon: <FaEnvelope />, label: "Email" },
        { icon: <FaFileAlt />, label: "Resume" },
    ];

    return (
        <>
            <nav className={`${styles.navbar} ${styles["navbar--horizontal"]}`}>
                {horizontalButtons.map(({ icon, label }) => (
                    <NavbarButton key={label} icon={icon} ariaLabel={label} orientation="horizontal" />
                ))}
            </nav>
            <nav className={`${styles.navbar} ${styles["navbar--vertical"]}`}>
                {verticalButtons.map(({ icon, label }) => (
                    <NavbarButton key={label} icon={icon} ariaLabel={label} orientation="vertical" />
                ))}
            </nav>
        </>
    );
};

export default Navbar;
