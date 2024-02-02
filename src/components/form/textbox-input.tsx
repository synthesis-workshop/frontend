import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface Props<TFormValues extends FieldValues> {
  className: string;
  placeholder: string;
  ariaLabel: string;
  id: string;
  rows: number;
  cols: number;
  name: Path<TFormValues>;
  rules: RegisterOptions;
  register: UseFormRegister<TFormValues>;
}

export const TextboxInput = <TFormValues extends FieldValues>({
  className,
  placeholder,
  ariaLabel,
  id,
  rows,
  cols,
  name,
  rules,
  register,
}: Props<TFormValues>) => {
  return (
    <>
      <textarea
        className={className}
        placeholder={placeholder}
        id={id}
        aria-label={ariaLabel}
        rows={rows}
        cols={cols}
        {...(register && register(name, rules))}
      />
    </>
  );
};
