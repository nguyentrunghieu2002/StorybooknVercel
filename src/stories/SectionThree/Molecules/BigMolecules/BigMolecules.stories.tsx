import type { Meta, StoryObj } from "@storybook/react";
import BigMolecules from "./BigMolecules";

const meta: Meta<typeof BigMolecules> = {
  title: "SectionThree/Molecules/BigMolecules",
  component: BigMolecules,
};

export default meta;
type Story = StoryObj<typeof BigMolecules>;

export const Default: Story = {
  args: {
    title: "LOCAL BUDDY",
    imgSrc: "https://www.tubudd.com/static/images/local-buddy.webp",

    // onClick: action("button-clicked")(),
  },
};
