import type { Meta, StoryObj } from "@storybook/react";
import { PosterCard } from "./PosterCard";
const meta: Meta<typeof PosterCard> = {
  component: PosterCard,
  title: "Poster Card",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title:
      "NaTMP Catalyzed Perdeuteration of Unactivated Arenes via Hydrogen Isotope Exchange",
    author: "Andreu Tortajada and Eva Hevia, University of Bern",
    img: "https://as2.ftcdn.net/v2/jpg/03/37/04/21/1000_F_337042170_PTa7RajaHvzlqn3jEGAteTyEi6Xx0mLF.jpg",
  },
};
export const Secondary: Story = {
  args: {
    title: "",
    author: "",
    img: "",
  },
};
