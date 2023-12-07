import { PropagateLoader } from "react-spinners";

interface Props {
  variant?: "light" | "dark";
  size?: number | string;
}
export const Loading = ({ variant = "dark", ...rest }: Props) => {
  return (
    <PropagateLoader
      color={variant === "light" ? "#fff" : "#3A3C46"}
      {...rest}
    />
  );
};
