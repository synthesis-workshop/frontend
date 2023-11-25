import type { Meta, StoryObj } from "@storybook/react";
import { Searchbar } from "./search-bar";

const meta: Meta<typeof Searchbar> = {
  component: Searchbar,
  title: "Components/Searchbar",
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    placeholder: "A good placeholder",
  },
};
