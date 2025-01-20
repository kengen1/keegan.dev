import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
    title: "Components/Navbar",
    component: Navbar,
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    render: () => <Navbar />,
};
