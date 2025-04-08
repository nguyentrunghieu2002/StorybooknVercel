import type { Meta, StoryObj } from "@storybook/react";
import left from "../../../assets/Path.png";
import SectionButton from "./SectionButton";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof SectionButton> = {
  title: "Section2/Atoms/SectionButton",
  component: SectionButton,
};

export default meta;
type Story = StoryObj<typeof SectionButton>;

export const Default: Story = {
  args: {
    children: "hi",
    variant: "original",
    // onClick: action("button-clicked")(),
    onClick: (e) => {
      console.log("Button value:", e.detail);
      action("clicked")(e.type);
    },
  },
};

export const NoText: Story = {
  args: {
    // children: "",
    variant: "original",
    // onClick: action("button-clicked"),
    onClick: (e) => {
      console.log("Button value:", e.detail);
      action("clicked")(e.type);
    },
  },
};

export const CircleButton: Story = {
  args: {
    children: left,
    variant: "left-right",
    // onClick: action("button-clicked"),
    onClick: (e) => {
      console.log("Button value:", e.detail);
      action("clicked")(e.type);
    },
  },
};
