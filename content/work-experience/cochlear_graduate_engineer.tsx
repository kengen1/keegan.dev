import React from "react";
import UnorderedList from "@/components/UnorderedList";

interface Props {}

const CochlearGraduateEngineer: React.FC<Props> = () => {
    return (
        <>
            <p>Rotating across different engineering streams at Cochlear, gaining experience in various technical domains.</p>
            <h3>Rotation 1: SmartNav</h3>
            <UnorderedList>
                <li>
                    Currently working on Cochlear’s surgical navigation software, which provides real-time guidance to surgeons during implant procedures.
                </li>
                <li>
                    Developing a new feature for the iOS iPad application, migrating Bluetooth permission and pairing to Apple's AccessorySetupKit.
                </li>
            </UnorderedList>
        </>
    );
};

export default CochlearGraduateEngineer;
