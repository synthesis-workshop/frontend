import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";

interface Props<TFormValues extends Record<string, unknown>> {
  textboxClassname: string;
  placeholder: string;
  ariaLabel: string;
  id: string;
  rows: number;
  cols: number;
  name: Path<TFormValues>;
  rules: RegisterOptions;
  register: UseFormRegister<TFormValues>;
}

const TextboxInput = <TFormValues extends Record<string, unknown>>({
  textboxClassname,
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
        className={textboxClassname}
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

export default TextboxInput;
