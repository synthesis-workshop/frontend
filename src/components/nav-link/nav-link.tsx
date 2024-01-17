import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  linkTo: string;
  label: string;
  activeClassName: string;
  inactiveClassName: string;
};

export const NavLink = ({
  linkTo,
  label,
  activeClassName,
  inactiveClassName,
}: Props) => {
  const [isActive, setIsActive] = React.useState(false);

  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    setIsActive([linkTo].includes(pathname + hash));
  }, [linkTo, pathname, hash]);

  return (
    <Link
      to={linkTo}
      className={isActive ? activeClassName : inactiveClassName}
    >
      {label}
    </Link>
  );
};
