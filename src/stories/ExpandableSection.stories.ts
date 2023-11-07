import type { Meta, StoryObj } from "@storybook/react";
import { ExpandableSection } from "../components/ExpandableSection/ExpandableSection";
const meta: Meta<typeof ExpandableSection> = {
  component: ExpandableSection,
};
export default meta;

type Story = StoryObj<typeof meta>;

// export const Base: Story = {
//   args: {},
// };

export const Primary: Story = {
  args: {},
};
