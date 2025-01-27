import React from "react";
import styles from "./NavbarHorizontal.module.scss";
import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import NavbarButton from "../Button/NavbarButton";

const NavbarHorizontal: React.FC = () => {
    return (
        <nav className={styles.navbarHorizontal}>
            <NavbarButton icon={<FaHome />} ariaLabel="Home" orientation="horizontal" />
            <NavbarButton icon={<FaUser />} ariaLabel="About" orientation="horizontal" />
            <NavbarButton icon={<FaBriefcase />} ariaLabel="Work" orientation="horizontal" />
            <NavbarButton icon={<FaCode />} ariaLabel="Projects" orientation="horizontal" />
        </nav>
    );
};

export default NavbarHorizontal;
