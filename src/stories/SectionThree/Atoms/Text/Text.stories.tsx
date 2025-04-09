import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "SectionThree/Atoms/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Local Buddy",
    // onClick: action("button-clicked")(),
  },
};

export const LongText: Story = {
  args: {
    children: "Long Text Long Text Long Text Long Text Long Text Long Text",
    // onClick: action("button-clicked")(),
  },
};

export const NoText: Story = {
  args: {
    children: "",
    // onClick: action("button-clicked")(),
  },
};
