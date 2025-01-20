import React from "react";
import styles from "./NavbarVertical.module.scss";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const NavbarVertical: React.FC = () => {
    return (
        <div className={styles.navbarVertical}>
            <button className={styles.navbarButton} aria-label="GitHub">
                <FaGithub />
            </button>
            <button className={styles.navbarButton} aria-label="LinkedIn">
                <FaLinkedin />
            </button>
            <button className={styles.navbarButton} aria-label="Email">
                <FaEnvelope />
            </button>
            <button className={styles.navbarButton} aria-label="Resume">
                <FaFileAlt />
            </button>
        </div>
    );
};

export default NavbarVertical;
