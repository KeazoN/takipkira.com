import { cn } from "@/utils/cn";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { TbLoader2 } from "react-icons/tb";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = ({
  children,
  className,
  variant = "primary",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-3xl font-medium transition hover:brightness-75 flex items-center justify-center gap-2 shadow-lg";

  const variants = {
    primary: "bg-primary text-white px-8 py-2",
    secondary: "bg-secondary text-white px-8 py-2",
    outline: "border border-gray-200 px-8 py-2",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    fullWidth && "w-full",
    (disabled || loading) && "opacity-50 cursor-not-allowed",
    className
  );

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading ? (
        <>
          <TbLoader2 className="animate-spin w-5 h-5" />
          <span>Yükleniyor...</span>
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;
