import type { Meta, StoryObj } from "@storybook/react";
import DataMolecules from "./DataMolecules";

const meta: Meta<typeof DataMolecules> = {
  title: "SectionThree/Molecules/DataMolecules",
  component: DataMolecules,
};

export default meta;
type Story = StoryObj<typeof DataMolecules>;

export const Default: Story = {
  args: {
    title: "LOCAL BUDDY",
    // onClick: action("button-clicked")(),
  },
};
