import { useForm } from "react-hook-form";

const TextboxInput = ({
  textboxClassname,
  placeholder,
  ariaLabel,
  id,
  rows,
  cols,
  name,
}: {
  textboxClassname: string;
  placeholder: string;
  ariaLabel: string;
  id: string;
  rows: number;
  cols: number;
  name: string;
}) => {
  const { register } = useForm();

  return (
    <>
      <textarea
        className={textboxClassname}
        placeholder={placeholder}
        id={id}
        aria-label={ariaLabel}
        rows={rows}
        cols={cols}
        {...register(name)}
      />
    </>
  );
};

export default TextboxInput;
