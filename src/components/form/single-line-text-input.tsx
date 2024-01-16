import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";

type Props<TFormValues extends Record<string, unknown>> = {
  className: string;
  placeholder: string;
  inputId: string;
  ariaLabel: string;
  type: string;
  name: Path<TFormValues>;
  rules: RegisterOptions;
  register: UseFormRegister<TFormValues>;
};

export const SingleLineTextInput = <
  TFormValues extends Record<string, unknown>,
>({
  className,
  placeholder,
  inputId,
  ariaLabel,
  type,
  name,
  register,
  rules,
}: Props<TFormValues>): JSX.Element => {
  console.log(name.toString());

  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        aria-label={ariaLabel}
        id={inputId}
        {...(register && register(name, rules))}
      />
    </>
  );
};
