import React from "react";

interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl?: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  imageUrl,
}) => {
  return (
    <div className="w-96 h-24 p-2 rounded-xl justify-start items-center gap-5 inline-flex">
      <div className="w-20 h-20 relative">
        <div className="w-20 h-20 left-0 top-0 absolute bg-zinc-300 rounded-full"></div>
        <img
          className="w-20 h-20 left-0 top-0 absolute rounded-full"
          src={imageUrl || "https://via.placeholder.com/80x108"}
          alt={name}
        />
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch text-zinc-700 text-2xl font-medium font-['Inter']">
          {name}
        </div>
        <div className="self-stretch text-zinc-700 text-opacity-80 text-base font-normal font-['Inter']">
          {position}
        </div>
      </div>
    </div>
  );
};

// Example usage:
// <TeamMember name="Dr. Matthew Horwitz" position="Founder and Editor-in-chief" imageUrl="https://via.placeholder.com/80x108" />
