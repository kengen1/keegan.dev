import { Meta, StoryObj } from "@storybook/react";
import SpotifyEmbed from "./SpotifyEmbed";

const meta: Meta<typeof SpotifyEmbed> = {
  title: "Components/SpotifyEmbed",
  component: SpotifyEmbed,
  tags: ["autodocs"],
  argTypes: {
    playlistUrl: {
      control: "text",
      description: "URL of the Spotify playlist to embed",
    },
    width: {
      control: "text",
      description: "Width of the Spotify embed iframe",
    },
    height: {
      control: "number",
      description: "Height of the Spotify embed iframe",
    },
    theme: {
      control: { type: "radio" },
      options: ["0", "1"],
      description: "Theme of the Spotify embed (0 = light, 1 = dark)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SpotifyEmbed>;

export const Default: Story = {
  args: {
    playlistUrl: "https://open.spotify.com/embed/playlist/4NyALg5gw8ZjtW1LgsMEYf",
    width: "100%",
    height: 352,
    theme: "0", // Default light theme
  },
};

export const DarkTheme: Story = {
  args: {
    playlistUrl: "https://open.spotify.com/embed/playlist/4NyALg5gw8ZjtW1LgsMEYf",
    width: "100%",
    height: 400,
    theme: "1", // Dark theme
  },
};

export const CustomSize: Story = {
  args: {
    playlistUrl: "https://open.spotify.com/embed/playlist/4NyALg5gw8ZjtW1LgsMEYf",
    width: "50%",
    height: 500,
    theme: "0",
  },
};
