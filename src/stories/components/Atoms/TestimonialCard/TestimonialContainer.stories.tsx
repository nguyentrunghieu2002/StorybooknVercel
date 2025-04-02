import type { Meta, StoryObj } from "@storybook/react";

import TestimonialContainer from "./TestimonialContainer";

const meta: Meta<typeof TestimonialContainer> = {
  component: TestimonialContainer,
};

export default meta;
type Story = StoryObj<typeof TestimonialContainer>;

export const Default: Story = {
  args: {},
};
