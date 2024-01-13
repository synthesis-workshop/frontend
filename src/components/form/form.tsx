import type { PropsWithChildren } from "react";
import { Label } from "./label";
import { SingleLineTextInput } from "./single-line-text-input";
import { TextboxInput } from "./textbox-input";

interface Props {
  className: string;
}

export const Form = ({ className, children }: PropsWithChildren<Props>) => {
  return <form className={className}>{children}</form>;
};

Form.Label = Label;
Form.SingleLineTextInput = SingleLineTextInput;
Form.TextboxInput = TextboxInput;
