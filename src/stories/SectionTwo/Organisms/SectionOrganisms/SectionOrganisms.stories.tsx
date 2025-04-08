import type { Meta, StoryObj } from "@storybook/react";
import SectionOrganisms from "./SectionOrganisms";

const meta: Meta<typeof SectionOrganisms> = {
  title: "Section2/Organisms/SectionOrganisms",
  component: SectionOrganisms,
};

export default meta;
type Story = StoryObj<typeof SectionOrganisms>;

export const Default: Story = {
  args: {},
};
