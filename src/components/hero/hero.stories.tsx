import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from "./hero";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    videoCount: "140+",
    viewsCount: "275.9K+",
    guestsCount: "97+",
    subCount: "9.20K+",
  },
};
