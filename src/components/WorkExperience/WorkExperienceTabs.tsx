import { TabList, TabPanel, TabPanels } from "@reach/tabs";
import { WorkExperience } from "../../../content/portfolio";
import React from "react";
import TechnologyChipGroup from "../ChipGroup/TechnologyChipGroup";
import SubtleDivider from "../Divider/SubtleDivider";
import AnimatedTab from "./AnimatedTab";
import AnimatedTabGroup from "./AnimatedTabGroup";
import styles from "./AnimatedTabs.module.scss";

interface Props {
    workExperiences: WorkExperience[];
}

const WorkExperienceTabs: React.FC<Props> = ({ workExperiences }) => {
    return (
        <>
            <AnimatedTabGroup defaultIndex={0}>
                <TabList className={styles.tabList}>
                    {workExperiences &&
                        workExperiences.map((work, i) => (
                            <AnimatedTab
                                index={i}
                                key={work.company + work.jobTitle}
                                popupImage={{
                                    src: `/icons/companies/${work.company.toLowerCase()}.png`,
                                    alt: `${work.company} logo`,
                                }}
                            >
                                {work.company} ({work.employmentType})
                            </AnimatedTab>
                        ))}
                </TabList>

                <TabPanels className={styles.tabPanels}>
                    {workExperiences &&
                        workExperiences.map((work) => (
                            <TabPanel key={work.company + work.jobTitle}>
                                <h2 className={styles.jobTitle}>
                                    {work.jobTitle}
                                </h2>
                                <p className={styles.team}>{work.team}</p>
                                <p className={styles.employmentPeriod}>
                                    {work.from} &ndash; {work.to}
                                </p>
                                <work.Description />
                                <SubtleDivider />
                                <TechnologyChipGroup
                                    technologies={work.technologies}
                                />
                            </TabPanel>
                        ))}
                </TabPanels>
            </AnimatedTabGroup>
        </>
    );
};

export default WorkExperienceTabs;