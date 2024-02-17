import cx from "classnames";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { Form } from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { isEmpty } from "lodash";

type Props<TFormValues extends FieldValues> = {
  className?: string;
  placeholder?: string;
  inputId: string;
  ariaLabel?: string;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  watch: UseFormWatch<TFormValues>;
  rules?: RegisterOptions;
  onClear?: () => void;
};

export const SearchBar = <TFormValues extends FieldValues>({
  className,
  placeholder = "Search for any topic",
  inputId,
  ariaLabel = "Your search terms should be inputted here",
  name,
  watch,
  register,
  rules,
  onClear,
}: Props<TFormValues>) => {
  const formClasses = {
    form: "flex flex-col w-80 md:flex-row md:w-[625px] md:h-14 xl:w-[794px]",
    input: `w-full py-4 px-5 border-solid border-2px border-2 border-opacity-40 border-formBorder 
      rounded-lg text-primary font-text `,
    wrapper: `relative w-full mb-3
      md:w-4/5 md:mr-5 md:mb-0`,
  };
  const value = watch(name);

  return (
    <Form.SingleLineTextInput
      className={cx(formClasses.input)}
      wrapperClassName={cx(formClasses.wrapper, className)}
      placeholder={placeholder}
      inputId={inputId}
      ariaLabel={ariaLabel}
      type="text"
      name={name}
      register={register}
      rules={rules}
    >
      {!isEmpty(value) && onClear && (
        <button
          type="button"
          className="absolute right-2 p-4"
          onClick={onClear}
        >
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="text-primary/60 w-6 h-6"
          />
        </button>
      )}
    </Form.SingleLineTextInput>
  );
};
