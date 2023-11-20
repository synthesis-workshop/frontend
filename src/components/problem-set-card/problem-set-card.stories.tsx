import type { Meta, StoryObj } from "@storybook/react";

import { ProblemSetCard } from "./problem-set-card";

const meta: Meta<typeof ProblemSetCard> = {
  component: ProblemSetCard,
  title: "Components/ProblemSetCard",
  argTypes: {
    problemSet: {
      title: {
        control: { type: "text" },
      },
      problemSetLink: {
        control: { type: "text" },
      },
      solutionLink: {
        control: { type: "text" },
      },
      episodeLink: {
        control: { type: "text" },
      },
      downloadCount: {
        control: { type: "integer" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    problemSet: {
      title: "Tishchenko Reaction",
      problemSetLink:
        "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg",
      solutionLink:
        "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg",
      episodeLink:
        "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg",
      downloadCount: 150,
    },
  },
};
