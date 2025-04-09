import type { Meta, StoryObj } from "@storybook/react";
import TextBox from "./TextBox";

const meta: Meta<typeof TextBox> = {
  title: "SectionThree/Molecules/TextBox",
  component: TextBox,
};

export default meta;
type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  args: {
    children: "LOCAL BUDDY",
    // onClick: action("button-clicked")(),
  },
};
