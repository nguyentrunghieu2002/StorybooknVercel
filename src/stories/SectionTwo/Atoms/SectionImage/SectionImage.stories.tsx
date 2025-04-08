import type { Meta, StoryObj } from "@storybook/react";
import SectionImage from "./SectionImage";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof SectionImage> = {
  title: "Section2/Atoms/SectionImage",
  component: SectionImage,
};

export default meta;
type Story = StoryObj<typeof SectionImage>;

export const Default: Story = {
  args: {
    // imgSrc: "hi",
    tag: "sfsđsfsđfsdfsdfsdfs",
    variant: "expand",
  },
};

export const NoExpand: Story = {
  args: {
    // imgSrc: "hi",
    tag: "sfsđsfsđfsdfsdfsdfs",
    variant: "no-ex",
    current: 0,
    index: 3,
    // handleCurrent: (indexItem: number) => {
    //   action("item-selected")(indexItem);
    //   console.log("Current item index:", indexItem);
    // },
    handleCurrent: (e) => {
      console.log("Button value:", e);
      action("clicked")(e);
    },
  },
};
