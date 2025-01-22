import { Meta, StoryObj } from "@storybook/react";
import ImageSlideshow from "./ImageSlideshow";

const meta: Meta<typeof ImageSlideshow> = {
    title: "Components/Images/ImageSlideshow",
    component: ImageSlideshow,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ImageSlideshow>;

export const Default: Story = {
    args: {
        images: [
            "/images/film/IMG_1.JPG",
            "/images/film/IMG_2.jpeg",
            "/images/film/IMG_3.jpeg",
            "/images/film/IMG_4.JPG",
            "/images/film/IMG_5.jpeg",
            "/images/film/IMG_6.jpeg",
            "/images/film/IMG_7.jpeg",
            "/images/film/IMG_8.JPG",
            "/images/film/IMG_9.jpeg",
            "/images/film/IMG_10.jpeg",
        ],
    },
};
