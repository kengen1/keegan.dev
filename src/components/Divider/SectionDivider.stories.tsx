import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SectionDivider from "./SectionDivider";

const meta: Meta<typeof SectionDivider> = {
    title: "Components/SectionDivider",
    component: SectionDivider,
    tags: ["autodocs"], // Enables automatic documentation generation
    argTypes: {
        text: {
            control: "text", // Enables control for the `text` prop
            description: "The text displayed in the center of the divider.",
        },
    },
};

export default meta;

// Define a default story
type Story = StoryObj<typeof SectionDivider>;

export const Default: Story = {
    args: {
        text: "Default Divider", // Default value for the `text` prop
    },
};

export const CustomText: Story = {
    args: {
        text: "Custom Section Title",
    },
};
