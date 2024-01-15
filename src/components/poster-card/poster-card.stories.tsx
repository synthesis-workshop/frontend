import type { Meta, StoryObj } from "@storybook/react";
import { PosterCard } from "./poster-card";
import { ImageExtension } from "../../__generated__/graphql";



const meta: Meta<typeof PosterCard> = {
  component: PosterCard,
  title: "Components/PosterCard",
};

export default meta;

type Story = StoryObj<typeof PosterCard>;

export const Default: Story = {
  args: {
    title:
      "NaTMP Catalyzed Perdeuteration of Unactivated Arenes via Hydrogen Isotope Exchange",
    attribution: "Andreu Tortajada and Eva Hevia, University of Bern",
    image: {
      extension: ImageExtension.Png,
      filesize: 81387,
      height: 275,
      id: "fbb9d7c6-0371-4fae-a66b-87e6dcd51d62",
      width: 203,
      url: "https://as2.ftcdn.net/v2/jpg/03/37/04/21/1000_F_337042170_PTa7RajaHvzlqn3jEGAteTyEi6Xx0mLF.jpg",
    },
    file: {
      filesize: 81387,
      filename: "Poster.pdf",
      url: "https://as2.ftcdn.net/v2/jpg/03/37/04/21/1000_F_337042170_PTa7RajaHvzlqn3jEGAteTyEi6Xx0mLF.jpg",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
