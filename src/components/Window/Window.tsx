import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";
import { OutsideClickHandler, useClickOutside } from "@/hooks/window";
import styles from "./Window.module.scss";

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
                y: "100vh",
                x: "-50%",
                left: "50%",
            }}
            animate={{
                y: 0,
                x: "-50%",
                left: "50%",
            }}
            exit={{
                y: "100vh",
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            style={{
                position: "absolute",
                transform: "translateX(-50%)",
            }}
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