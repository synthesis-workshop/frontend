import type { PropsWithChildren } from "react";
import { Label } from "./label";
import { SingleLineTextInput } from "./single-line-text-input";
import { TextboxInput } from "./textbox-input";

interface Props {
  className: string;
  action: string;
  method: string;
}

export const Form = ({
  className,
  children,
  action,
  method,
}: PropsWithChildren<Props>) => {
  return (
    <form className={className} action={action} method={method}>
      {children}
    </form>
  );
};

Form.Label = Label;
Form.SingleLineTextInput = SingleLineTextInput;
Form.TextboxInput = TextboxInput;
