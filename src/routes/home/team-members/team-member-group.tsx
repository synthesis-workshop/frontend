import { TeamMember } from "../../../components";
import { TeamMember as _TeamMember } from "../../../__generated__/graphql";

interface Props {
  members: _TeamMember[];
}

export const TeamMemberGroup = ({ members }: Props) => {
  return (
    <div
      className={`grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 auto-cols-w-[387px] sm:auto-rows-h-24 gap-5 pd-1`}
    >
      {members.map((item) => (
        <TeamMember key={item.name} {...item} />
      ))}
    </div>
  );
};
