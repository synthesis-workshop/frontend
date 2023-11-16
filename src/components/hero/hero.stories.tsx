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
    videoCount: 140,
    viewsCount: 275000,
    guestsCount: 97,
    subscriberCount: 9210,
  },
};
