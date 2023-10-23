import type { Meta, StoryObj } from "@storybook/react";

import { ProblemSetCard } from "../components/ProblemSetCard/ProblemSetCard";

const meta: Meta<typeof ProblemSetCard> = {
  component: ProblemSetCard,
  title: "ProblemSetCard",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
export const ProblemSetCardOne: Story = {
  args: {},
};
