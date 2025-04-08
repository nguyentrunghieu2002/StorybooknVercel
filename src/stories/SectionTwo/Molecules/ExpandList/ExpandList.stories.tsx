import type { Meta, StoryObj } from "@storybook/react";
import ExpandList from "./ExpandList";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof ExpandList> = {
  title: "Section2/Molecules/ExpandList",
  component: ExpandList,
};

export default meta;
type Story = StoryObj<typeof ExpandList>;

export const Default: Story = {
  args: {
    imgUrl: "hi",
    tag: "sfsđsfsđfsdfsdfsdfs",
    current: 0,
    index: 2,
    handleCurrent: (indexItem: number) => {
      action("item-selected")(indexItem);
      console.log("Current item index:", indexItem);
    },
  },
};
