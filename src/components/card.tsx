import cx from "classnames";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  variant?: "dark" | "light";
  className?: string;
  onClick?: () => void;
}

export const Card = ({
  variant = "dark",
  className,
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <article
      onClick={onClick}
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
