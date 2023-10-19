const Label = ({
  labelClassname,
  labelText,
  children,
}: {
  labelClassname: string;
  labelText: string;
  children: JSX.Element;
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

export default Label;
