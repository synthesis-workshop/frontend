import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type Props<TFormValues extends FieldValues> = {
  className: string;
  placeholder: string;
  inputId: string;
  ariaLabel: string;
  type: string;
  name: Path<TFormValues>;
  rules: RegisterOptions;
  register: UseFormRegister<TFormValues>;
};

export const SingleLineTextInput = <TFormValues extends FieldValues>({
  className,
  placeholder,
  inputId,
  ariaLabel,
  type,
  name,
  register,
  rules,
}: Props<TFormValues>): JSX.Element => {
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
