import type { Meta, StoryObj } from "@storybook/react";

import TestimonialsSection from "./TestimonialsSection";
import { testimonialsData } from "./testimonials.data";

const meta: Meta<typeof TestimonialsSection> = {
  component: TestimonialsSection,
};

export default meta;
type Story = StoryObj<typeof TestimonialsSection>;

export const Default: Story = {
  args: {
    testimonials: testimonialsData,
  },
};
