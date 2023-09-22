import React from "react";

interface Props {
  children: string;
  onPress: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Button = ({ children, onPress, color }: Props) => {
  return (
    <button onClick={onPress} type="button" className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
