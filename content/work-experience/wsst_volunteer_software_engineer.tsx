import React from "react";
import UnorderedList from "@/components/UnorderedList";

interface Props {}

const WSSTVolunteerSoftwareEngineer: React.FC<Props> = () => {
    return (
        <>
            A student-led engineering project aimed at building a solar-powered vehicle to compete in the 2023 World Solar Challenge.
            <UnorderedList>
                <li>
                    Developed a Python application to calculate and visualise optimal solar charging angles based on geographical location.                
                </li>
                <li>
                    Improved charging efficiency during control stops, supporting peak energy intake throughout the 3000km journey.
                </li>
                <li>
                    Worked on a client-facing dashboard to view real-time race statistics.
                </li>
                <li>
                    Integrated Three.js for a 3D graphical interface in the race statistics dashboard.
                </li>
            </UnorderedList>
        </>
    );
};

export default WSSTVolunteerSoftwareEngineer;
