import { useForm } from "react-hook-form";

const SingleLineTextInput = ({
  inputClassnames,
  placeholder,
  inputId,
  ariaLabel,
  type,
  name,
}: {
  inputClassnames: {
    label: string;
    input: string;
    error: string;
  };
  placeholder: string;
  inputId: string;
  ariaLabel: string;
  type: string;
  name: string;
}) => {
  const { register } = useForm();

  return (
    <>
      <input
        className={inputClassnames.input}
        placeholder={placeholder}
        type={type}
        aria-label={ariaLabel}
        id={inputId}
        {...register(name)}
      />
    </>
  );
};

export default SingleLineTextInput;
