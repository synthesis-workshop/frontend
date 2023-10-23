import type { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-between items-center p-5 bg-primary h-348px w-387px rounded-xl relative">
      {children}
    </div>
  );
};
