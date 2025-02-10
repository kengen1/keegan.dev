import portfolio from "../content/portfolio";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { ContentContainer } from "@/components/Container";
import { SectionDivider } from "@/components/Divider";
import { EducationItem } from "@/components/Education";
import { Window } from "@/components/Window";
import WorkExperienceTabs from "@/components/WorkExperience/WorkExperienceTabs";
import { useBreakpointTrigger } from "@/hooks/window";
import AchievementList from "@/components/Achievement/AchievementList";
import { FaCode as HackathonIcon } from "react-icons/fa";
import { FiAward as AwardIcon } from "react-icons/fi";

const Work: NextPage = () => {
    const isSmallScreen = useBreakpointTrigger(480);

    return (
        <>
            <motion.div>
                <div style={{ position: "relative" }}>
                    <Window>
                        <SectionDivider text="Work Experience" />
                        <ContentContainer maxWidth={1200}>
                            <WorkExperienceTabs workExperiences={portfolio.work} />
                        </ContentContainer>

                        <SectionDivider text="Education" />
                        <ContentContainer
                            padding={isSmallScreen ? "12px 18px 0px 0px" : undefined}
                        >
                            <EducationItem education={portfolio.education} />
                            <div style={{ marginLeft: "32px", marginTop: "32px" }}>
                                <AchievementList
                                    achievements={portfolio.academicAchievements}
                                    Icon={AwardIcon}
                                />
                            </div>

                        </ContentContainer>

                        <SectionDivider text="Hackathons & Competitions" />
                        <ContentContainer>
                            <div style={{ marginLeft: "32px" }}>
                                <AchievementList
                                    achievements={portfolio.competitions}
                                    Icon={HackathonIcon}
                                />
                            </div>
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Work;
