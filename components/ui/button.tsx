// components/ui/button.tsx
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const base = "rounded-md px-4 py-2 text-sm font-medium transition-all";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      ghost: "bg-transparent text-white hover:bg-white hover:text-black",
      outline: "border border-white text-white hover:bg-white hover:text-black",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
