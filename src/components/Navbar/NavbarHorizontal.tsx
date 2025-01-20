import React from "react";
import styles from "./NavbarHorizontal.module.scss";
import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";

const NavbarHorizontal: React.FC = () => {
    return (
        <nav className={styles.navbarHorizontal}>
            <button className={styles.navbarButton} aria-label="Home">
                <FaHome />
            </button>
            <button className={styles.navbarButton} aria-label="About">
                <FaUser />
            </button>
            <button className={styles.navbarButton} aria-label="Work">
                <FaBriefcase />
            </button>
            <button className={styles.navbarButton} aria-label="Projects">
                <FaCode />
            </button>
        </nav>
    );
};

export default NavbarHorizontal;
