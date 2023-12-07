import type { Meta, StoryObj } from "@storybook/react";
import { PublicationCard } from "./publication-card";

const meta: Meta<typeof PublicationCard> = {
  component: PublicationCard,
  title: "Components/PublicationCard",
};

export default meta;

type PubStory = StoryObj<typeof PublicationCard>;

export const Default: PubStory = {
  args: {
    link: "https://www.youtube.com",
    title: "A community that educates itself",
    description:
      "Matthew Horwitz, creator of the Synthesis Workshop video podcast, talks to Nature Chemistry about using podcasting as a driver of professional-level education in the chemistry community.",
    author: "Katherine Geogheghan",
    publishedDate: "14 November 2023",
    publisher: "Nature Chemistry",
    doi: "10.1038/s41557-023-01144-x",
  },

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
