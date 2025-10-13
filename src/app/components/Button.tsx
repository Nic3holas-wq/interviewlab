import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = "primary", 
  size = "medium", 
  className = "", 
  ...props 
}) => {
  const baseStyles =
    "transition font-semibold rounded-4xl focus:outline-none";

  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary:
      "border border-gray-400 hover:bg-orange-600 hover:text-white hover:border-transparent",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-4 sm:px-10 py-2 sm:py-3 text-base",
    large: "px-6 sm:px-12 py-3 sm:py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
