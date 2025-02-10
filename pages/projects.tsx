/* eslint-disable @next/next/no-img-element */
import portfolio from "../content/portfolio";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { ContentContainer } from "@/components/Container";
import { SectionDivider } from "@/components/Divider";
import { ProjectCardDeck } from "@/components/Project";
import { Window } from "@/components/Window";
import { useBreakpointTrigger } from "@/hooks/window";
import styles from "./projects.module.scss";

const Projects: NextPage = () => {
    const isSmallScreen = useBreakpointTrigger(480);

    return (
        <>
            <motion.div>
                <div style={{ position: "relative" }}>
                    <Window>
                        <SectionDivider text="Projects" />
                        <p className={styles.description}>
                        Here are a few projects that I’ve worked on during university and in my free time.
                        Some were completed early in my career or studies, while others are a better reflection of my current abilities
                        —but each one taught me something valuable and helped me grow as an engineer.                        </p>
                        <ContentContainer
                            maxWidth={1200}
                            padding={
                                isSmallScreen ? "0px 14px" : "0 48px 48px 48px"
                            }
                        >
                            <ProjectCardDeck
                                projects={portfolio.projects.content}
                            />
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;