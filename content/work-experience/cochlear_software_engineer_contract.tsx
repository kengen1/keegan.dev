import React from "react";
import UnorderedList from "@/components/UnorderedList";

interface Props {}

const CochlearSoftwareEngineerContract: React.FC<Props> = () => {
    return (
        <>
            <p>
                Spent the year following my internship working full-time on Cochlear's fitting software, <strong>Custom Sound Pro</strong>, enhancing tools used by audiologists to program implants and personalize hearing outcomes.
            </p>
            <UnorderedList>
                <li>
                    Developed and maintained a C# desktop application for scalable data management in multi-site clinics and clinician outreach programs.
                </li>
                <li>
                    Built a Mixpanel analytics service to aggregate insights from 1M+ fitting sessions, providing data-driven guidance for development decisions.
                </li>
                <li>
                    Implemented a Sentry crash reporting service that processes 100+ crashes daily, improving bug resolution through automated issue grouping.
                </li>
            </UnorderedList>
        </>
    );
};

export default CochlearSoftwareEngineerContract;
