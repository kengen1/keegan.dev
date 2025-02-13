import { IOptions, RecursivePartial } from "tsparticles";

const networkOptions: RecursivePartial<IOptions> = {
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 140,
                links: {
                    opacity: 1,
                },
            },
            push: {
                particles_nb: 4,
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
            },
            repulse: {
                distance: 400,
                duration: 0.4,
            },
        },
    },
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 2000,
            },
        },
        color: {
            value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
        },
        shape: {
            type: ["circle"],
            stroke: {
                width: 0,
                color: "#fff",
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 1,
            random: false,
            animation: {
                enable: false,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            animation: {
                enable: false,
                speed: 10,
                minimumValue: 10,
                sync: false,
            },
        },
        links: {
            enable: true,
            distance: 250,
            color: "#808080",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outMode: "out",
            bounce: false,
        },
    },
    retina_detect: true,
};

export default networkOptions;
