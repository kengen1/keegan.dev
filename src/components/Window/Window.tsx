import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";
import styles from "./Window.module.scss";
import { OutsideClickHandler, useClickOutside } from "../../hooks/window";

interface Props {
    children?: React.ReactNode;
    onClickOutside?: OutsideClickHandler;
}

const Window: React.FC<Props> = ({
    children,
    onClickOutside = () => {},
}) => {
    const windowRef = useRef(null);
    useClickOutside(windowRef, onClickOutside);

    return (
        <motion.div
            data-testid={"portfolio-window"}
            ref={windowRef}
            className={styles.window}
            initial={{
                opacity: 0,
                position: "absolute",
                transform: "translateX(-50%)",
                top: "150px",
            }}
            animate={{
                opacity: 1,
                position: "absolute",
                top: "100px",
                left: "50%",
                transform: "translateX(-50%)",
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 0.75,
            }}
            style={{}}
        >
            <Link href="/" scroll={false}>
                <CloseIcon
                    aria-label="Close"
                    size={32}
                    className={styles.closeButton}
                />
            </Link>
            {children}
        </motion.div>
    );
};

export default Window;