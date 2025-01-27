import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import NavbarHorizontal from "./NavbarHorizontal";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const meta: Meta<typeof NavbarHorizontal> = {
    title: "Components/Navbar/NavbarHorizontal",
    component: NavbarHorizontal,
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NavbarHorizontal>;

export const Default: Story = {};