import React from "react";
import UnorderedList from "../UnorderedList";
import AchievementItem from "./AchievementItem";

interface Props {
    achievements: {
        title: string;
        date: string;
        description: string;
    }[];
    Icon: React.ComponentType<{ size?: number; className?: string }>;
}

const AchievementList: React.FC<Props> = ({ achievements, Icon }) => {
    return (
        <UnorderedList resetDefaultStyle>
            {achievements &&
                achievements.map((achievement) => (
                    <AchievementItem
                        key={achievement.title}
                        achievement={achievement}
                        Icon={Icon}
                    />
                ))}
        </UnorderedList>
    );
};

export default AchievementList;
