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
    description: {
      document: [
        {
          type: "paragraph",
          children: [
            {
              text: "In this Research Spotlight episode, Dr. Katie Rykaczewski (Schindler group, University of Michigan) joins us to share her work on the synthesis of nitrogen-rich energetic materials.\n\nKey reference:\nJ. Am. Chem. Soc. 2022, 144, 19089–19096.\nhttps://doi.org/10.1021/jacs.2c08191\n\nAdditional references (in order of appearance):\nNat. Chem. 2020, 12, 898-905.\nNat. Comm. 2019, 10, 5095.\nOrg. Lett. 2020, 22, 6516-6519.\nJ. Am. Chem. Soc. 2021, 143, 16235-16242.\nFor work on cyclobutane-based materials, see J. Am. Chem. Soc. 2019, 141, 12531–12535.\nFor work on changing stereochemistry in energetics, see J. Am. Chem. Soc. 2019, 141, 12531–12535.\nFirst report on this aza Paternò-Büchi see Nat. Chem. 2020, 12, 898–905.",
            },
          ],
        },
      ],
    },
    episodeNumber: 25,
    category: EpisodeCategory.NAMED_REACTION,
    runtime: "15:12",
  },
};
