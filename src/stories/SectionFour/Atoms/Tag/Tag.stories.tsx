import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "SectionFour/Atoms/Tag",
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "hi",
    urlString: "https://homestaychat.com/",
    // onClick: action("button-clicked")(),
  },
};

export const LongText: Story = {
  args: {
    children:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    urlString: "https://homestaychat.com/",
    // onClick: action("button-clicked")(),
  },
};

export const noText: Story = {
  args: {
    children: "",
    urlString: "https://homestaychat.com/",
    // onClick: action("button-clicked")(),
  },
};
