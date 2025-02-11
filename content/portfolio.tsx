import { FiGithub as GitHubIcon } from "react-icons/fi";
import { AiOutlineMail as MailIcon } from "react-icons/ai";
import { RiLinkedinLine as LinkedInIcon } from "react-icons/ri";
import { Technology } from "@/components/ChipGroup/technologies";
import { SocialLinkData } from "@/components/Socials/Socials";
import CochlearGraduateEngineer from "./work-experience/cochlear_graduate_engineer";
import CochlearSoftwareEngineerContract from "./work-experience/cochlear_software_engineer_contract";
import CochlearSoftwareEngineerIntern from "./work-experience/cochlear_software_engineer_intern";
import WSSTVolunteerSoftwareEngineer from "./work-experience/wsst_volunteer_software_engineer";
import WSUJuniorDataEngineer from "./work-experience/wsu_junior_data_engineer";
import AmazonItSupportEngineer from "./work-experience/amazon-it-support-engineer";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import AchievementItem from "@/components/Achievement/AchievementItem";
import OgImage from "public/og-image.avif";

interface PortfolioData {
    meta: {
        // The contents of <title> for the root page / and all child pages unless
        // overridden.
        mainTitle: string;
        // The contents of <meta name="description"> for the root and all children
        // unless overridden.
        mainDescription: string;
        // Open graph protocol title.
        ogTitle: string;
        // Open graph protocol description.
        ogDescription: string;
    };
    profile: {
        // Social icons and links.
        socials: SocialLinkData[];
    };
    projects: {
        content: Project[];
    };
    work: WorkExperience[];
    education: EducationContent;
    academicAchievements: Achievement[];
    competitions: Achievement[];

}

interface Achievement {
    title: string;
    date: string;
    description: string;
}

export interface WorkExperience {
    jobTitle: string;
    company: string;
    employmentType: "Full-Time" | "Contract" | "Casual" | "Internship" | "Volunteer";
    team?: string;
    from: string;
    to: string;
    Description: React.ComponentType;
    technologies: Technology[];
}

export interface Project {
    title: string;
    headline?: string;
    // This must be the same as the name (without extension) as the .mdx file
    // you want the project to be associated with.
    description: string;
    technologies: Technology[];
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    videoUrl?: string;
    playUrl?: string;
}

export interface EducationContent {
    degree: string;
    university: string;
    from: string;
    to: string;
}

const portfolio: PortfolioData = {
    meta: {
        mainTitle: "Keegan Hidson - Developer Portfolio",
        mainDescription:
            "Welcome to my developer portfolio, where I try to explore and demystify the intracacies of software engineering.",
        ogTitle: "Keegan Hidsons's Developer Portfolio",
        ogDescription:
            "A curious developer's portfolio and blog on all things software engineering.",
    },
    profile: {
        socials: [
            {
                icon: <img src="/icons/socials/github.png" alt="GitHub" width={30} height={30} />,
                url: "https://github.com/kengen1",
                label: "GitHub",
            },
            {
                icon: <img src="/icons/socials/linkedin.png" alt="LinkedIn" width={30} height={30} />,
                url: "https://www.linkedin.com/in/keegan-hidson/",
                label: "LinkedIn",
            },
            {
                icon: <img src="/icons/socials/mail.png" alt="Mail" width={30} height={30} />,
                url: "mailto:keeganhidson00@gmail.com",
                label: "Mail",
            },
            {
                icon: <img src="/icons/socials/resume.png" alt="Resume" width={30} height={30} />,
                url: "/keegan_hidson_resume_2025.pdf",
                label: "Resume",
            },
        ],
    },
    projects: {
        content: [
            {
                "title": "Digital Garden",
                "imageUrl": "/images/projects/digital garden.png",
                "description": "A graph-powered visualization of my thoughts and ideas, evolving like a garden—cultivated, expanded, and refined over time.",
                "demoUrl": "https://digital-garden.kengen.dev/",
                "githubUrl": "https://github.com/kengen1/Digital-Garden",
                "technologies": ["Markdown", "JavaScript", "SCSS", "HTML"]
            },
            {
                title: "EV Charging Network",
                imageUrl: "/images/projects/ev charging network.png",
                description: "A terminal based application that simulates travel routes of electric vehicles (EVs) in the Sydney metropolitan area.",
                demoUrl: "",
                githubUrl: "https://github.com/kengen1/EV-Charging-Network",
                technologies: ["C++"],
            },
            {
                title: "Vivid-Sync",
                imageUrl: "/images/projects/vivid sync.png",
                description: "A MERN web application for interfacing with a custom built LED strip board across networks.",
                demoUrl: "",
                githubUrl: "https://github.com/kengen1/Vivid-Sync",
                technologies: ["React", "Node", "Express", "Mongodb", "Tailwind", "AWS", "Nginx"
                ],
            },
            {
                title: "Vivid-Sync PI",
                imageUrl: "/images/projects/vivid sync pi.png",
                description: "A Python-based IoT application that receives data from the Vivid-Sync web app and controls an LED strip display.",
                demoUrl: "",
                githubUrl: "https://github.com/kengen1/Vivid-Sync",
                technologies: ["Python", "Raspberry Pi", "Flask"],
            },
            {
                title: "Leetcode Study Bot",
                imageUrl: "/images/projects/leetcode study bot.png",
                description: "A Discord bot for integrating Leetcode challenges into Discord servers. Provides daily question threads, hints, topic-based and random questions, as well as roadmap-guided problems.",
                demoUrl: "",
                githubUrl: "https://github.com/kengen1/Leetcode-Study-Bot",
                technologies: ["TypeScript", "Node", "GraphQL"]
            },            
            {
                title: "Developer Portfolio",
                imageUrl: "/images/projects/developer portfolio.png",
                description: "A website to showcase my projects, and experience as a software engineer. Features interactive 3D elements powered by Three.js.",
                demoUrl: "https://kengen.dev",
                githubUrl: "https://github.com/kengen1/kengen.dev",
                technologies: ["Next", "TypeScript", "React", "Tailwind", "Three", "SCSS"]
            },
            {
                title: "Passer-Blocker Board Game",
                imageUrl: "/images/projects/passer blocker.png",
                description: "A terminal-based 2-player board game where the Passer must form a path from top to bottom while the Blocker tries to prevent it. Includes AI players using Minimax and Monte Carlo algorithms.",
                githubUrl: "https://github.com/kengen1/Passer-Eater",
                technologies: ["C++"]
            },
            {
                title: "Generalized Tower of Hanoi",
                imageUrl: "/images/projects/generalized tower of hanoi.png",
                description: "An terminal-based application for solving the Tower of Hanoi problem with n towers. Implements multiple solvers, including an A* solver for optimal moves.",
                githubUrl: "https://github.com/kengen1/Mini-Shrdlu",
                technologies: ["C++"]
            },            
        ],
    },
    work: [
        {
            jobTitle: "Graduate Engineer",
            company: "Cochlear",
            employmentType: "Full-Time",
            from: "Feburary 2025",
            to: "Present",
            technologies: ["Swift", "Bluetooth"],
            Description: CochlearGraduateEngineer,
        },
        {
            jobTitle: "Software Engineer",
            company: "Cochlear",
            employmentType: "Contract",
            from: "Feburary 2024",
            to: "February 2025",
            technologies: ["C#", "Microsoft.NET", "SQL Server", "TypeScript", "Python", "AWS", "Sentry", "Mixpanel", "Jest"],
            Description: CochlearSoftwareEngineerContract,
        },
        {
            jobTitle: "Software Engineer Intern",
            company: "Cochlear",
            employmentType: "Internship",
            from: "November 2023",
            to: "Feburary 2024",
            technologies: ["TypeScript", "Node", "AWS", "Docker", "Terraform"],
            Description: CochlearSoftwareEngineerIntern,
        },
        {
            jobTitle: "Junior Data Engineer",
            company: "Western Sydney University",
            employmentType: "Casual",
            from: "October 2022",
            to: "November 2023",
            technologies: ["Python", "SQL", "Oracle"],
            Description: WSUJuniorDataEngineer,
        },
        {
            jobTitle: "Software Engineer",
            company: "Western Sydney Solar Team",
            employmentType: "Volunteer",
            from: "August 2022",
            to: "July 2023",
            technologies: ["Python", "Flask", "MATLAB", "Three", "JavaScript"],
            Description: WSSTVolunteerSoftwareEngineer,
        },
        {
            jobTitle: "IT Support Engineer",
            company: "Amazon",
            employmentType: "Full-Time",
            from: "Feburary 2022",
            to: "August 2022",
            technologies: [],
            Description: AmazonItSupportEngineer,
        },
    ],
    education: {
        degree: "Bachelor of Information and Communications Technology",
        university: "Western Sydney University",
        from: "March 2020",
        to: "Nov 2023",
    },
    academicAchievements: [
        {
            title: "WSU Optimize Award Finalist",
            date: "2023",
            description: "Finalist in WSU's Optimize competition for developing an innovative software solution.",
        },
        {
            title: "Dean's Merit List",
            date: "2022",
            description: "Awarded for exceptional academic performance in the School of Computer, Data and Mathematical Sciences.",
        },
    ],
    competitions: [
        {
            title: "Adelaide University Competitive Programming League",
            date: "RSP x CPC Contest - 2025",
            description: "Competed in the regional-level programming competition, securing a top 5 placement.",
        },
        {
            title: "Cochlear Hackathon - 2nd Place",
            date: "2024",
            description: "Second place in Cochlear's annual hackathon for an innovative cloud-based solution.",
        },
        {
            title: "Cochlear Hackathon - 1st Place",
            date: "2023",
            description: "Won the Cochlear internal hackathon for creating a prototype to optimize clinic operations.",
        },
    ],
};

export default portfolio;