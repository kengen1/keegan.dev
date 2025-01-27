import { Meta, StoryObj } from "@storybook/react";
import NavbarButton from "./NavbarButton";
import { FaHome } from "react-icons/fa";

const meta: Meta<typeof NavbarButton> = {
  title: "Components/Buttons/NavbarButton",
  component: NavbarButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavbarButton>;

export const Vertical: Story = {
  args: {
    icon: <FaHome />,
    ariaLabel: "Vertical Button",
    orientation: "vertical",
    onClick: () => alert("Vertical button clicked!"),
  },
};

export const Horizontal: Story = {
  args: {
    icon: <FaHome />,
    ariaLabel: "Horizontal Button",
    orientation: "horizontal",
    onClick: () => alert("Horizontal button clicked!"),
  },
};
