const Button = ({
  buttonClassname,
  type,
  ariaLabel,
  isValid,
  buttonText,
  onClick,
}: {
  buttonClassname: string;
  type: "button" | "submit" | "reset" | undefined;
  ariaLabel: string;
  isValid: boolean;
  buttonText: string;
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}) => {
  return (
    <>
      <button
        className={buttonClassname}
        type={type}
        aria-label={ariaLabel}
        disabled={!isValid}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
