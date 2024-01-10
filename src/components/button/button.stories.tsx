import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: " select" },
      option: ["primary", "secondary"],
    },
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "My Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "My Button",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
export const Social: Story = {
  args: {
    variant: "social",
    children: "My Button",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
