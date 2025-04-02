import type { Meta, StoryObj } from "@storybook/react";

import TestimonialAuthor from "./TestimonialAuthor";

const meta: Meta<typeof TestimonialAuthor> = {
  component: TestimonialAuthor,
};

export default meta;
type Story = StoryObj<typeof TestimonialAuthor>;

export const Default: Story = {
  args: {},
};
