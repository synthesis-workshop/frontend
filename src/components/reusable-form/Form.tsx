interface Props {
  formClassname: string;
  children: JSX.Element;
}

export const Form: React.FC<Props> = ({ formClassname, children }) => {
  return <form className={formClassname}>{children}</form>;
};
