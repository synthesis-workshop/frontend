import type { PropsWithChildren } from "react";

interface Props {
  className: string;
  labelText: string;
}

export const Label = ({
  className,
  labelText,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <label className={className}>
        {labelText}
        {children}
      </label>
    </>
  );
};
