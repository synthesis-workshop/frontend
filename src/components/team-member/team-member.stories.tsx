import type { Meta, StoryObj } from "@storybook/react";

import { TeamMember } from "./team-member";

const meta: Meta<typeof TeamMember> = {
  title: "Components/TeamMember",
  component: TeamMember,
};

export default meta;

type Story = StoryObj<typeof TeamMember>;

export const Default: Story = {
  args: {
    name: "Dr. Matthew Horwitz",
    title: "Founder and Editor-in-chief",
    imageUrl: "https://via.placeholder.com/80x108",
  },
};
