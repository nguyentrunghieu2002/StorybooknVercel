import type { Meta, StoryObj } from "@storybook/react";
import index from "./index";

const meta: Meta<typeof index> = {
  title: "SectionFour/Molecules/index",
  component: index,
};

export default meta;
type Story = StoryObj<typeof index>;

export const Default: Story = {
  args: {
    imgUrl: "https://www.tubudd.com/static/images/partners/chat.png",
  },
};
