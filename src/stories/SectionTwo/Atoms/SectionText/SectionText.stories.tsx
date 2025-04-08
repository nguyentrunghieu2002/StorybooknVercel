import type { Meta, StoryObj } from "@storybook/react";
import SectionText from "./SectionText";

const meta: Meta<typeof SectionText> = {
  title: "Section2/Atoms/SectionText",
  component: SectionText,
};

export default meta;
type Story = StoryObj<typeof SectionText>;

export const Default: Story = {
  args: {
    children:
      "Increase the value of your hotel's services by introducing guests to tours with Tubudd’s local buddies. Not only will you help customers enjoy a great experience, but you'll also earn a commission of up to 15% for each successful trip",
  },
};

export const LongText: Story = {
  args: {
    children:
      "Increase the value of your hotel's services by introducing guests to tours with Tubudd’s local buddies. Not only will you help customers enjoy a great experience, but you'll also earn a commission of up to 15% for each successful tripIncrease the value of your hotel's services by introducing guests to tours with Tubudd’s local buddies. Not only will you help customers enjoy a great experience, but you'll also earn a commission of up to 15% for each successful tripIncrease the value of your hotel's services by introducing guests to tours with Tubudd’s local buddies. Not only will you help customers enjoy a great experience, but you'll also earn a commission of up to 15% for each successful tripIncrease the value of your hotel's services by introducing guests to tours with Tubudd’s local buddies. Not only will you help customers enjoy a great experience, but you'll also earn a commission of up to 15% for each successful tripIncrease the value of your hotel's services by introducing guests to tours with Tubudd’s local buddies. Not only will you help customers enjoy a great experience, but you'll also earn a commission of up to 15% for each successful trip",
  },
};

export const NoText: Story = {
  args: {
    children: "",
  },
};
