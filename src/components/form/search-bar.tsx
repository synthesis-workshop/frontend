import cx from "classnames";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { Form } from "./form";

type Props<TFormValues extends FieldValues> = {
  className?: string;
  placeholder?: string;
  inputId: string;
  ariaLabel?: string;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  rules: RegisterOptions;
};

export const SearchBar = <TFormValues extends FieldValues>({
  className,
  placeholder = "Search for any topic",
  inputId,
  ariaLabel = "Your search terms should be inputted here",
  name,
  register,
  rules,
}: Props<TFormValues>) => {
  const formClasses = {
    form: "flex flex-col w-80 md:flex-row md:w-[625px] md:h-14 xl:w-[794px]",
    input: `w-full py-4 px-5 mb-3 border-solid border-2px border-2 border-opacity-40 border-formBorder 
      rounded-lg text-primary font-text 
      md:w-4/5 md:mr-5 md:mb-0`,
  };

  return (
    <Form.SingleLineTextInput
      className={cx(formClasses.input, className)}
      placeholder={placeholder}
      inputId={inputId}
      ariaLabel={ariaLabel}
      type="text"
      name={name}
      register={register}
      rules={rules}
    />
  );
};
