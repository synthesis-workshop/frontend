import cx from "classnames";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  variant?: "dark" | "light";
  className?: string;
}

export const Card = ({
  variant = "dark",
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <article
      className={twMerge(
        cx(
          variant === "dark" ? "bg-primary" : "bg-white",
          "flex flex-col p-5 rounded-xl relative",
          className,
        ),
      )}
    >
      {children}
    </article>
  );
};
