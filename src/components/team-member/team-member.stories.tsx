import type { Meta, StoryObj } from "@storybook/react";

import { TeamMember } from "./team-member";
import { ImageExtension } from "../../__generated__/graphql";

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
    image: {
      url: "https://via.placeholder.com/80x108",
      extension: ImageExtension.Png,
      filesize: 81387,
      height: 275,
      id: "fbb9d7c6-0371-4fae-a66b-87e6dcd51d62",
      width: 203,
    },
  },
};
