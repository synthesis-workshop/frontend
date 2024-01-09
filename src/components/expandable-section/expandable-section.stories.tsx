import type { Meta, StoryObj } from "@storybook/react";
import { uniqueId } from "lodash";
import { ExpandableSection } from "./expandable-section";
import { ProblemSetCard } from "../problem-set-card";

const meta: Meta<typeof ExpandableSection> = {
  component: ExpandableSection,
  title: "Components/ExpandableSection",
};

export default meta;

type Story = StoryObj<typeof meta>;

const problemSet = {
  title: "Tishchenko Reaction",
  problemSetLink:
    "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg",
  solutionLink:
    "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg",
  episodeLink:
    "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg",
  downloadCount: 150,
};

export const Default: Story = {
  args: {
    className: "grid grid-cols-2 gap-4",
    children: [3, 4, 5, 6].map(() => {
      return <ProblemSetCard key={uniqueId()} problemSet={problemSet} />;
    }),
    preview: [1, 2].map(() => {
      return <ProblemSetCard key={uniqueId()} problemSet={problemSet} />;
    }),
    collapseText: "Fewer Problem Sets",
    expandText: "More Problem Sets",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
