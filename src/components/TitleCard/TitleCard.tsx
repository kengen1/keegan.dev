import Image from "next/image";
import styles from "./TitleCard.module.scss";

export const TitleCard = () => {
    return (
        <div className={styles.titleCard}>
            <Image
                src="/images/profile.jpg"
                alt="Profile Picture"
                width={50}
                height={50}
                className={styles.profileImage}
            />
            <h1 className={styles.title}>kengen.dev</h1>
        </div>
    );
};
