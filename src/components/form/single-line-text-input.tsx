import { PropsWithChildren } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type Props<TFormValues extends FieldValues> = PropsWithChildren<{
  className: string;
  wrapperClassName: string;
  placeholder: string;
  inputId: string;
  ariaLabel: string;
  type: string;
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register: UseFormRegister<TFormValues>;
}>;

export const SingleLineTextInput = <TFormValues extends FieldValues>({
  className,
  wrapperClassName,
  placeholder,
  inputId,
  ariaLabel,
  type,
  name,
  register,
  rules,
  children,
}: Props<TFormValues>): JSX.Element => {
  return (
    <div className={wrapperClassName}>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        aria-label={ariaLabel}
        id={inputId}
        {...(register && register(name, rules))}
      />
      {children}
    </div>
  );
};
