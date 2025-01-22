import { Meta, StoryObj } from "@storybook/react";
import ImageGallery from "./ImageGallery";

const meta: Meta<typeof ImageGallery> = {
    title: "Components/Images/ImageGallery",
    component: ImageGallery,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ImageGallery>;

export const Default: Story = {
    args: {
        images: [
            { src: "/images/film/IMG_1.JPG", alt: "Image 1" },
            { src: "/images/film/IMG_2.jpeg", alt: "Image 2" },
            { src: "/images/film/IMG_3.jpeg", alt: "Image 3" },
            { src: "/images/film/IMG_4.JPG", alt: "Image 4" },
            { src: "/images/film/IMG_5.jpeg", alt: "Image 5" },
        ],
        width: "200px",
        height: "150px",
    },
};

export const LargeImages: Story = {
    args: {
        images: [
            { src: "/images/film/IMG_6.jpeg", alt: "Image 6" },
            { src: "/images/film/IMG_7.jpeg", alt: "Image 7" },
            { src: "/images/film/IMG_8.JPG", alt: "Image 8" },
        ],
        width: "400px",
        height: "300px",
    },
};

export const SmallImages: Story = {
    args: {
        images: [
            { src: "/images/film/IMG_9.jpeg", alt: "Image 9" },
            { src: "/images/film/IMG_10.jpeg", alt: "Image 10" },
        ],
        width: "100px",
        height: "75px",
    },
};
