import React from "react";
import styles from "./MacMenuBar.module.scss";

interface MenuBarItem {
  label: string;
  command?: () => void;
}

const MacMenuBar: React.FC = () => {
  const menubarItems: MenuBarItem[] = [
    { label: "Terminal" },
    { label: "File" },
    { label: "Edit" },
    { label: "View" },
    { label: "Go" },
    { label: "Window" },
    { label: "Help" },
  ];

  return (
    <div className={styles.menubar}>
      <img
        src="/icons/mac/apple.png"
        alt="Apple Logo"
        className={styles["menubar-logo"]}
      />
      
      {menubarItems.map((item, index) => (
        <span
          key={index}
          className={`${styles["menubar-item"]} ${
            item.label === "Terminal" ? styles["menubar-item--bold"] : ""
          }`}
          onClick={item.command}
        >
          {item.label}
        </span>
      ))}

      <span className={styles["menubar-clock"]}>
        {new Date().toLocaleTimeString()}
      </span>
    </div>
  );
};

export default MacMenuBar;
