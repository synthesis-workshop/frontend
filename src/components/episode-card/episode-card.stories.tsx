import type { Meta, StoryObj } from "@storybook/react";

import { EpisodeCard } from "./episode-card";

const meta: Meta<typeof EpisodeCard> = {
  component: EpisodeCard,
  title: "EpisodeCard",
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    title: "Revisiting the Imposter Phenomenon",
    description: `In this Culture of Chemistry episode, Dr. Marc Reid joins us once again to discuss the Imposter Phenomenon using insights gained from writing his recent book, entitled "You Are (Not) a Fraud: A Scientist's Guide to the Imposter Phenomenon In this Culture of Chemistry episode, Dr. Marc Reid joins us once again to discuss the Imposter Phenomenon using insights gained from writing his recent book, entitled "You Are (Not) a Fraud: A Scientist's Guide to the Imposter Phenomenon".`,
    episodeNumber: 25,
    episodeType: "Culture of Chemistry",
  },
};
