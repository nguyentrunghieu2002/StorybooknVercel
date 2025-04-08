import type { Meta, StoryObj } from "@storybook/react";

import Atoms from "./index";

const meta: Meta<typeof Atoms> = {
  title: "Section2/Atoms/Atoms",
  component: Atoms,
};

export default meta;
type Story = StoryObj<typeof Atoms>;

export const Default: Story = {
  args: {},
};
