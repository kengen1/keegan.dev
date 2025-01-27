import React from "react";
import styles from "./NavbarButton.module.scss";

interface ButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  orientation?: "vertical" | "horizontal";
}

const NavbarButton: React.FC<ButtonProps> = ({
  icon,
  ariaLabel,
  onClick,
  orientation = "vertical",
}) => {
  const buttonClass =
    orientation === "horizontal" ? `${styles.button} ${styles.horizontal}` : styles.button;

  return (
    <button className={buttonClass} aria-label={ariaLabel} onClick={onClick}>
      {icon}
    </button>
  );
};

export default NavbarButton;
