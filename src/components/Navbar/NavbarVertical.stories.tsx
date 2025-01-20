import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import NavbarVertical from "./NavbarVertical";

const meta: Meta<typeof NavbarVertical> = {
    title: "Components/NavbarVertical",
    component: NavbarVertical,
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NavbarVertical>;

export const Default: Story = {};
