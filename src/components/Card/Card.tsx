import type { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-between items-center bg-primary gap-5 w-[387px] rounded-xl relative lg:w-[300px] md:w-[358px] sm:w-[343px]">
      {children}
    </div>
  );
};
