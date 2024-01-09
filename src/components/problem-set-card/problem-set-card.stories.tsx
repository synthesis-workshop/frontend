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
      id: "2484a1e2-7d25-4254-b6ac-cf7a8a2b992b",
      title: "Tishchenko Reaction",
      problemSetFile: {
        filename: "Tishchenko Reaction",
        filesize: 100,
        url: "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg",
      },
      solutionFile: {
        filename: "Tishchenko Reaction",
        filesize: 100,
        url: "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg",
      },
      episode: {
        id: "2484a1e2-7d25-4254-b6ac-cf7a8a2b992b",
        youtubeVideoId: "Tishchenko Reaction",
      },
      downloadCount: 150,
    },
  },
};
