import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
    title: "Components/Navbar",
    component: Navbar,
    tags: ["autodocs"],
    argTypes: {
        orientation: {
            control: { type: "radio" },
            options: ["horizontal", "vertical"],
            description: "Defines the layout orientation of the Navbar.",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Horizontal: Story = {
    args: {
        orientation: "horizontal",
    },
    render: (args) => <Navbar {...args} />,
};

export const Vertical: Story = {
    args: {
        orientation: "vertical",
    },
    render: (args) => <Navbar {...args} />,
};
