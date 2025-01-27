import React from "react";
import styles from "./NavbarVertical.module.scss";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import NavbarButton from "../Button/NavbarButton";

const NavbarVertical: React.FC = () => {
    return (
        <div className={styles.navbarVertical}>
            <NavbarButton icon={<FaGithub />} ariaLabel="GitHub" />
            <NavbarButton icon={<FaLinkedin />} ariaLabel="LinkedIn" />
            <NavbarButton icon={<FaEnvelope />} ariaLabel="Email" />
            <NavbarButton icon={<FaFileAlt />} ariaLabel="Resume" />
        </div>
    );
};

export default NavbarVertical;