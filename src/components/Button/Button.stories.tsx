import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { FiGithub as GitHubIcon } from "react-icons/fi";
import { MdOutlineArrowRightAlt as RightArrowIcon } from "react-icons/md";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    type: "button", // Updated to match the allowed prop values
    text: "Start",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    type: "button", // Updated to match the allowed prop values
    text: "GitHub",
    icon: <GitHubIcon />,
    iconPosition: "left",
  },
};

export const ReadMore: Story = {
  args: {
    type: "button", // Updated to match the allowed prop values
    callToAction: true,
    shape: "pill",
    text: "Read more",
    icon: <RightArrowIcon />,
    iconPosition: "right",
    iconInset: true,
  },
};
