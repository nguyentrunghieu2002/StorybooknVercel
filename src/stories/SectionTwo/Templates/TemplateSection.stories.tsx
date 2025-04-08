import type { Meta, StoryObj } from "@storybook/react";
import TemplateSection from "./TemplateSection";

const meta: Meta<typeof TemplateSection> = {
  title: "Section2/Templates/TemplateSection",
  component: TemplateSection,
};

export default meta;
type Story = StoryObj<typeof TemplateSection>;

export const Default: Story = {
  args: {
    imgSrc: "hi",
    tag: "sfsđsfsđfsdfsdfsdfs",
    variant: "expand",
  },
};
