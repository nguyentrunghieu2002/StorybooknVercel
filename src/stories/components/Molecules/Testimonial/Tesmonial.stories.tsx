import type { Meta, StoryObj } from "@storybook/react";

import Testimonial from "./Testimonial";

const meta: Meta<typeof Testimonial> = {
  component: Testimonial,
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {
  args: {},
};
