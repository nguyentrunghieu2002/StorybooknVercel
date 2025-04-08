import type { Meta, StoryObj } from "@storybook/react";
import ExpandMenu from "./ExpandMenu";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof ExpandMenu> = {
  title: "Section2/Molecules/ExpandMenu",
  component: ExpandMenu,
};

export default meta;
type Story = StoryObj<typeof ExpandMenu>;

export const Default: Story = {
  args: {
    // onButtonClick: action("menu-button-clicked"),
    onButtonClick: (e) => {
      action("clicked")(e);
    },
  },
};
