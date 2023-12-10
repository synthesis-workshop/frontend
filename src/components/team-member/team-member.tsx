import cx from "classnames";
import React from "react";

export interface TeamMemberProps {
  className?: string;
  name: string;
  title: string;
  image?: { url };
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  className,
  name,
  title,
  image,
}) => {
  console.log(image?.url);
  return (
    <div
      className={cx(
        "flex items-center gap-5 box-border p-2 max-h-24",
        className
      )}
    >
      <img
        className="w-20 h-20 rounded-full object-cover"
        src={image?.url || "https://via.placeholder.com/80x108"}
        alt={name}
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
