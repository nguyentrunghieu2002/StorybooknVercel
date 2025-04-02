import type { Meta, StoryObj } from "@storybook/react";

import TestimonialText from "./TestimonialText";

const meta: Meta<typeof TestimonialText> = {
  component: TestimonialText,
};

export default meta;
type Story = StoryObj<typeof TestimonialText>;

export const Default: Story = {
  args: {},
};
