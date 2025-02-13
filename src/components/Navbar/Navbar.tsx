import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Button } from "../Button";
import { FaHome, FaUser, FaBriefcase, FaCode, FaBars, FaTimes, FaFileAlt, FaGithub, FaLinkedin, FaEnvelope, FaLink } from "react-icons/fa";
import portfolio from "../../../content/portfolio";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenuOnResize = () => {
        if (window.innerWidth > 768) {
            setIsOpen(false); // Close menu if resizing above mobile width
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", closeMenuOnResize);
        closeMenuOnResize();
        return () => window.removeEventListener("resize", closeMenuOnResize);
    }, []);

    const menuItems = [
        { icon: <FaHome size={24} />, label: "Home", link: "/" },
        { icon: <FaUser size={24} />, label: "About", link: "./about" },
        { icon: <FaBriefcase size={24} />, label: "Career", link: "./work" },
        { icon: <FaCode size={24} />, label: "Projects", link: "./projects" },
    ];

    const socialItems = portfolio.profile.socials.map((social) => ({
        icon: social.label === "GitHub" ? <FaGithub size={24} /> :
              social.label === "LinkedIn" ? <FaLinkedin size={24} /> :
              social.label === "Mail" ? <FaEnvelope size={24} /> :
              <FaFileAlt size={24} />,
        label: social.label,
        link: social.url,
    }));

    return (
        <>
            {/* Hamburger Button (Hidden on Desktop) */}
            <button className={`${styles.hamburger} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
                {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>

            {/* Desktop Navbar (Top Center, With Padding) */}
            <nav className={`${styles.navbar} ${styles["navbar--horizontal"]}`}>
                {menuItems.map(({ icon, label, link }) => (
                    <Link key={label} href={link} legacyBehavior>
                        <a>
                            <Button icon={icon} text={label} iconPosition="left" />
                        </a>
                    </Link>
                ))}
            </nav>

            {/* Desktop Social Navbar (Vertical Left Side) */}
            {!isMobile && (
                <div className={styles.socialNavbar}>
                    {socialItems.map(({ icon, label, link }) => (
                        <Link key={label} href={link} legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer">
                                <Button icon={icon} text={label} iconPosition="left" />
                            </a>
                        </Link>
                    ))}
                </div>
            )}

            {/* Mobile Hamburger Menu */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles["mobileMenu--open"] : ""}`}>
                <nav className={styles.mobileNav}>
                    {[...menuItems, ...socialItems].map(({ icon, label, link }) => (
                        <Link key={label} href={link} legacyBehavior>
                            <a onClick={() => setIsOpen(false)}>
                                <Button icon={icon} text={label} iconPosition="left" />
                            </a>
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Navbar;
