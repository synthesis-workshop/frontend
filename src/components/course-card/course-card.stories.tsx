import type { Meta, StoryObj } from "@storybook/react";
import { CourseCard } from "./course-card";

const meta: Meta<typeof CourseCard> = {
    component: CourseCard,
    title: "Components/CourseCard",
    argTypes: {
        title: {
            control: { type: "text" },
        },
        description: {
            control: { type: "text" },
        },
        problemSets: {
            control: { type: "text" },
        },
        episodes: {
            control: { type: "text" },
        },
    },
    };

export default meta;

type Story = StoryObj<typeof CourseCard>;

export const Default: Story = {
    args: {
        title: "Organic Chemistry",
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
        problemSets: [],
        episodes: [],
    },
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
};