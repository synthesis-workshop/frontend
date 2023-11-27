import type { Meta, StoryObj } from "@storybook/react";
import { PosterCard } from "./poster-card";

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
    image:
      "https://as2.ftcdn.net/v2/jpg/03/37/04/21/1000_F_337042170_PTa7RajaHvzlqn3jEGAteTyEi6Xx0mLF.jpg",
    file: "https://as2.ftcdn.net/v2/jpg/03/37/04/21/1000_F_337042170_PTa7RajaHvzlqn3jEGAteTyEi6Xx0mLF.jpg",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
