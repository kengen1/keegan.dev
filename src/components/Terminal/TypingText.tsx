import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./TypingText.module.scss"; // Add styles for the text

const TypingText: React.FC = () => {
    const [currentText, setCurrentText] = useState<string>("");

    return (
        <div>
            <TypeAnimation
                sequence={[
                    "Hello! I'm Keegan",
                    2000,
                    "Welcome to my dev portfolio~",
                    2000,
                    "Find my socials/resume below",
                    2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={30}
                repeat={Infinity}
                className={styles.typingText}
            />
        </div>
    );
};

export default TypingText;
