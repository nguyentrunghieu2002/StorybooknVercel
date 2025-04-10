import type { Meta, StoryObj } from "@storybook/react";
import ImageAtom from "./ImageAtom";

const meta: Meta<typeof ImageAtom> = {
  title: "SectionFour/Atoms/ImageAtom",
  component: ImageAtom,
};

export default meta;
type Story = StoryObj<typeof ImageAtom>;

export const Default: Story = {
  args: {
    imgUrl: "https://www.tubudd.com/static/images/partners/chat.png",
    // onClick: action("button-clicked")(),
  },
};
