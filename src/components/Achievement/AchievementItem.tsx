import React from "react";
import styles from "./AchievementItem.module.scss";

interface Props {
    achievement: {
        title: string;
        date: string;
        description: string;
    };
    Icon: React.ComponentType<{ size?: number; className?: string }>;
}

const AchievementItem: React.FC<Props> = ({ achievement, Icon }) => {
    return (
        <li className={styles.achievementItem}>
            <Icon size={32} className={styles.achievementIcon} />
            <div className={styles.details}>
                <h4 className={styles.title}>{achievement.title}</h4>
                <small className={styles.date}>{achievement.date}</small>
                <p className={styles.description}>{achievement.description}</p>
            </div>
        </li>
    );
};

export default AchievementItem;
