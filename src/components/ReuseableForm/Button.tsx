interface Props {
  buttonClassname: string;
  type: "button" | "submit" | "reset" | undefined;
  ariaLabel: string;
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({
  buttonClassname,
  type,
  ariaLabel,
  onClick,
  children,
}) => {
  return (
    <>
      <button
        className={buttonClassname}
        type={type}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
