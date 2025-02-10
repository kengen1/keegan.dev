import Education from "../../../content/portfolio";
import Image from "next/image";
import React from "react";
import styles from "./EducationItem.module.scss";

interface Props {
    education: typeof Education["education"];
}

const EducationItem: React.FC<Props> = ({ education }) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.institutionLogo}>
                    <Image
                        src="/icons/companies/wsu.png"
                        layout="fill"
                        objectFit="contain"
                        alt="Institution logo"
                    />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.title}>
                        <strong className={styles.degree}>
                            {education.degree}
                        </strong>{" "}
                        @{" "}
                        <em className={styles.institution}>
                            {education.university}
                        </em>
                    </h2>
                    <p className={styles.enrolmentPeriod}>
                        {education.from} - {education.to}
                    </p>
                </div>
            </div>
        </>
    );
};

export default EducationItem;
