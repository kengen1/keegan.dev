import React from "react";
import UnorderedList from "@/components/UnorderedList";

interface Props {}

const CochlearSoftwareEngineerIntern: React.FC<Props> = () => {
    return (
        <>
            <p>
                Interned in Cochlear's <strong>Clinical Cloud</strong> team, responsible for managing and facilitating recipient data across all Cochlear applications.
            </p>
            <UnorderedList>
                <li>
                    Developed a test framework used by developers in the cloud team to standardize and automate API testing, increasing overall test coverage by 30%.
                </li>
                <li>
                    Built a real-time monitoring application that executed API tests in live environments to detect critical service outages.
                </li>
                <li>
                    Designed dashboards and Slack bots to provide real-time alerts to management about microservice failures.
                </li>
                <li>
                    Utilized AWS services, including ECS, ECR, CloudWatch, S3, Secrets Manager, and KMS, to deploy and manage cloud infrastructure.
                </li>
                <li>
                    Led the development of the monitoring tool from a proof of concept to a fully operational production system.
                </li>
            </UnorderedList>
        </>
    );
};

export default CochlearSoftwareEngineerIntern;
