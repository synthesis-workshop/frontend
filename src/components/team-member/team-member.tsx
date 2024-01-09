import cx from "classnames";
import React from "react";
import type { TeamMember as _TeamMember } from "../../__generated__/graphql";

type TeamMemberProps = _TeamMember & {
  className?: string;
  onClick?: () => void;
};

export const TeamMember: React.FC<TeamMemberProps> = ({
  className,
  name,
  title,
  image,
  onClick,
}) => {
  return (
    <div
      className={cx(
        "flex items-center gap-5 box-border p-2 max-h-24 cursor-pointer hover:bg-white",
        className,
      )}
      onClick={onClick}
    >
      <img
        className="w-20 h-20 rounded-full object-cover"
        src={image?.url || "https://via.placeholder.com/80x108"}
        alt={name ?? "Team Member"}
      />
      <div className="grow flex flex-col gap-1">
        <div className="text-primary text-2xl font-medium font-text">
          {name}
        </div>
        <div className="text-primary/80 font-normal font-text">{title}</div>
      </div>
    </div>
  );
};
