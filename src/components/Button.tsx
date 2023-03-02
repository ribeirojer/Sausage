import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  ...rest
}) => {
  const baseStyle =
    "px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50";

  const primaryStyle = "bg-blue-500 text-white hover:bg-blue-700";
  const secondaryStyle = "bg-gray-300 hover:bg-gray-400";

  let buttonStyle = "";
  if (variant === "primary") {
    buttonStyle = primaryStyle;
  } else if (variant === "secondary") {
    buttonStyle = secondaryStyle;
  }

  return (
    <button className={`${baseStyle} ${buttonStyle} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
