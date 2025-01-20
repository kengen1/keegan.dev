import React from "react";
import NavbarVertical from "./NavbarVertical";
import NavbarHorizontal from "./NavbarHorizontal";

const Navbar: React.FC = () => {
    return (
        <>
            <NavbarVertical />
            <NavbarHorizontal />
        </>
    );
};

export default Navbar;
