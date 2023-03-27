import React, { ReactNode } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning"; // ? makes prop optional. values shown are only actual values allowed (cannot be blue). Color names come from Bootstrap
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
