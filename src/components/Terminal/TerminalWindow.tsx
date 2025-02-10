import React from "react";
import TypingText from "./TypingText"; // Import the TypingText component
import styles from "./TerminalWindow.module.scss"; // Add styles for terminal window

const TerminalWindow: React.FC = () => {
  return (
    <div className={styles.terminal}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.dots}>
          <div className={styles.dot} style={{ backgroundColor: "#ff5f57" }} />
          <div className={styles.dot} style={{ backgroundColor: "#ffbd2e" }} />
          <div className={styles.dot} style={{ backgroundColor: "#27c93f" }} />
        </div>
        <span>
          <img
            src="/icons/mac/folder.webp"
            alt="Folder Icon"
            className={styles["header-icon"]}
          />
          keegan@dev — - zsh
        </span>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* First command input */}
        <div className={styles.commandLine}>
          <span className={styles.prompt}>keegan@dev:~$</span>{" "}
          <span className={styles.command}>ls</span>
        </div>

        {/* Output of 'ls' */}
        <div className={styles.commandOutput}>
          portfolio README.md scripts
        </div>

        {/* Second command input */}
        <div className={styles.commandLine}>
          <span className={styles.prompt}>keegan@dev:~$</span>{" "}
          <span className={styles.command}>./start-app.sh</span>
        </div>

        {/* Script logging */}
        <div className={styles.scriptLog}>Launching kengen.dev 🏄‍♂️ ...</div>

        {/* Typing effect after executing the command */}
        <div className={styles.commandLine}>
          <span className={styles.prompt}>keegan@dev:~$</span> <TypingText />
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
