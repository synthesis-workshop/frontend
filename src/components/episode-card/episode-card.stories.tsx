import type { Meta, StoryObj } from "@storybook/react";
import { EpisodeCategory } from "../../types";
import { EpisodeCard } from "./episode-card";

const meta: Meta<typeof EpisodeCard> = {
  component: EpisodeCard,
  title: "Components/EpisodeCard",
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    episodeNumber: {
      control: { type: "number" },
    },
    category: {
      control: {
        type: "select",
        option: [
          "Research Spotlight",
          "Total Synthesis",
          "Named Reaction",
          "Culture of Chemistry",
        ],
      },
    },
    runtime: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Revisiting the Imposter Phenomenon",
    description: `In this Culture of Chemistry episode, Dr. Marc Reid joins us once again to discuss the Imposter Phenomenon using insights gained from writing his recent book, entitled "You Are (Not) a Fraud: A Scientist's Guide to the Imposter Phenomenon In this Culture of Chemistry episode, Dr. Marc Reid joins us once again to discuss the Imposter Phenomenon using insights gained from writing his recent book, entitled "You Are (Not) a Fraud: A Scientist's Guide to the Imposter Phenomenon".`,
    episodeNumber: 25,
    category: EpisodeCategory.NAMED_REACTION,
    runtime: "15:12",
  },
};
