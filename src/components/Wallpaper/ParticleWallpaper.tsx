import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { ParticleType, getParticleOptions } from ".";
import styles from "./ParticleWallpaper.module.scss";
import { motion } from "framer-motion";

interface Props {
    particleType?: ParticleType;
}

const ParticleWallpaper: React.FC<Props> = ({
    particleType = ParticleType.Networks,
}) => {
    const [targetOpacity] = useState<number>(0);

    return (
        <>
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 1 }}
                animate={{ opacity: targetOpacity }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.55,
                    delay: 0.5,
                }}
                aria-hidden="true"
            ></motion.div>
            <div
                id="header-container"
                className={styles.particleContainer}
                aria-hidden="true"
            >
                <Particles
                    id="tsparticles"
                    options={getParticleOptions(particleType)}
                />
            </div>
        </>
    );
};

export default ParticleWallpaper;
