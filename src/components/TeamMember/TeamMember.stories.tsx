import { Meta, Story } from "@storybook/react/types-6-0";

import { TeamMember, TeamMemberProps } from "../TeamMember/TeamMember";

export default {
  title: "Components/TeamMember",
  component: TeamMember,
} as Meta;

const Template: Story<TeamMemberProps> = (args) => <TeamMember {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Dr. Matthew Horwitz",
  position: "Founder and Editor-in-chief",
  imageUrl: "https://via.placeholder.com/80x108",
};
