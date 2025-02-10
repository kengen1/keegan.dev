import React from "react";
import UnorderedList from "@/components/UnorderedList";

interface Props {}

const WSUJuniorDataEngineer: React.FC<Props> = () => {
    return (
        <>
            <p>
                Worked within the <strong>Strategic Insights & Analytics (SIA)</strong> team.
            </p>
            <UnorderedList>
                <li>
                    Designed and optimised ETL pipelines to capture prospective student data, contributing to increased applications and enrollment rates.
                </li>
                <li>
                    Automated the extraction and transformation of 20,000+ student records daily, reducing processing time by 80%.
                </li>
                <li>
                    Collaborated with the admissions team to deploy data models that powered targeted recruitment and engagement campaigns.
                </li>
            </UnorderedList>
        </>
    );
};

export default WSUJuniorDataEngineer;
