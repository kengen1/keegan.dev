import React from "react";
import { Dock } from "primereact/dock";
import portfolio from "../../../../content/portfolio";
import styles from "./MacOsDock.module.scss";

const MacOsDock: React.FC = () => {
  const dockItems = portfolio.profile.socials.map((social) => ({
    label: social.label,
    icon: () =>
      typeof social.icon === "string" ? (
        <img src={social.icon} alt={social.label} className={styles.icon} />
      ) : (
        <span className={styles.icon}>{social.icon}</span>
      ),
    command: () => {
      if (social.label === "Resume") {
        window.open(social.url, "_blank", "noopener,noreferrer");
      } else {
        window.open(social.url, "_blank");
      }
    },
  }));

  return (
    <div className={styles["dock-window"]}>
      <Dock model={dockItems} className="dock-advanced" />
    </div>
  );
};

export default MacOsDock;
