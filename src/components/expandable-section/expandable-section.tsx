import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import cx from "classnames";
import { ReactNode, type PropsWithChildren, useState } from "react";

interface Props {
  variant?: "light" | "dark";
  className?: string;
  expandText?: string;
  collapseText?: string;
  preview: ReactNode;
}

export const ExpandableSection = ({
  children,
  className,
  variant = "dark",
  expandText = "More Posters",
  collapseText = "Fewer Posters",
  preview,
}: PropsWithChildren<Props>) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        className={cx(
          `py-10 px-8 rounded-b-xl`,
          variant === "dark" && "bg-primary",
          variant === "light" && "bg-white",
          className,
        )}
      >
        {preview}
        {isExpanded && children}
      </div>
      <button
        className={cx(
          "rounded-b-lg py-5 px-12 ui-open:hidden",
          variant === "light" && "bg-white text-primary",
          variant === "dark" && "bg-primary text-white",
        )}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="flex gap-3">
          {isExpanded ? (
            <>
              {collapseText} <ChevronUpIcon className="w-[18px]" />
            </>
          ) : (
            <>
              {expandText} <ChevronDownIcon className="w-[18px]" />
            </>
          )}
        </div>
      </button>
    </div>
  );
};
