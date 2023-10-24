import { useForm } from "react-hook-form";

const SingleLineTextInput = ({
  inputClassname,
  placeholder,
  inputId,
  ariaLabel,
  type,
  name,
}: {
  inputClassname: string;
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
        className={inputClassname}
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
