import React, { Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Window from "./Window";
import { ContentContainer } from "../Container";

// Meta information for the `Window` component
const meta: Meta<typeof Window> = {
  title: "Portfolio/Window",
  component: Window,
  tags: ["autodocs"], // Enables documentation
};

export default meta;

// Default Story type
type Story = StoryObj<typeof Window>;

// Default story
export const Basic: Story = {
  args: {
    children: (
      <ContentContainer>
        <h1>Hello World</h1>
        <p>
          Cupidatat nulla ex deserunt velit do velit incididunt amet qui. Tempor
          officia culpa sit amet consectetur. Sunt veniam anim eu nisi sint
          ipsum. Amet laboris pariatur nulla mollit sint officia.
        </p>
      </ContentContainer>
    ),
  },
};

// Story with scrollable content
export const Scrolling: Story = {
  args: {
    children: (
      <ContentContainer>
        <h1>Scrollable Content</h1>
        {[...Array(10)].map((_, i) => (
          <Fragment key={i}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
            <p>
              Etiam varius neque ac sapien aliquet, vel euismod velit ultricies.
              Curabitur a ligula auctor, luctus tortor eget, tincidunt ipsum.
            </p>
          </Fragment>
        ))}
      </ContentContainer>
    ),
  },
};
