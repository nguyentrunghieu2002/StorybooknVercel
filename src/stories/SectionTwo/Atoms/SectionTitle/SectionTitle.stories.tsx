import type { Meta, StoryObj } from "@storybook/react";
import SectionTitle from "./SectionTitle";

const meta: Meta<typeof SectionTitle> = {
  title: "Section2/Atoms/SectionTitle",
  component: SectionTitle,
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    children: "Enhance Customer Experience and Increase Revenue",
  },
};

export const LongText: Story = {
  args: {
    children:
      "Enhance Customer Experience and Increase RevenueEnhance Customer Experience and Increase RevenueEnhance Customer Experience and Increase RevenueEnhance Customer Experience and Increase Revenue",
  },
};

export const NoText: Story = {
  args: {
    children: "",
  },
};
