import type { Meta, StoryObj } from "@storybook/react";
import ImageAtoms from "./ImageAtoms";
import image3 from "../../../assets/Group(1).png";
import image2 from "../../../assets/Group(0).png";

const meta: Meta<typeof ImageAtoms> = {
  title: "SectionThree/Atoms/ImageAtoms",
  component: ImageAtoms,
};

export default meta;
type Story = StoryObj<typeof ImageAtoms>;

export const Default: Story = {
  args: {
    type: "horizontal",
    imgSrc: "https://www.tubudd.com/static/images/local-buddy.webp",

    // onClick: action("button-clicked")(),
  },
};

export const Horizontal: Story = {
  args: {
    type: "horizontal",
    imgSrc: image2,

    // onClick: action("button-clicked")(),
  },
};

export const Vertical: Story = {
  args: {
    type: "vertical",
    imgSrc: image3,
    // onClick: action("button-clicked")(),
  },
};
