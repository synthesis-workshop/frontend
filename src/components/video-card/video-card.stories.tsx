import type { Meta, StoryObj } from "@storybook/react";
import { EpisodeCategory } from "../../types";
import { VideoCard } from ".";



const meta: Meta<typeof VideoCard> = {
  component: VideoCard,
  title: "Components/VideoCard",
  argTypes: {
    title: {
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
    episodeNumber: 25,
    category: EpisodeCategory.NAMED_REACTION,
    runtime: "15:12",
  },
};
