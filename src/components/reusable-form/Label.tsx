interface Props {
  labelClassname: string;
  labelText: string;
  children: JSX.Element;
}

export const Label: React.FC<Props> = ({
  labelClassname,
  labelText,
  children,
}) => {
  return (
    <>
      <label className={labelClassname}>
        {labelText}
        {children}
      </label>
    </>
  );
};
