import type { PropsWithChildren } from "react";
import { Label } from "./label";
import { SingleLineTextInput } from "./single-line-text-input";
import { TextboxInput } from "./textbox-input";

interface Props {
  className: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({
  className,
  children,
  onSubmit,
}: PropsWithChildren<Props>) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.Label = Label;
Form.SingleLineTextInput = SingleLineTextInput;
Form.TextboxInput = TextboxInput;
