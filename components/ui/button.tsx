import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  theme?: "light" | "dark";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", theme = "light", ...props }, ref) => {
    const base = "rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out shadow-md";
    const themes = {
      light: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        ghost: "bg-transparent text-black hover:bg-gray-200",
        outline: "border border-black text-black hover:bg-black hover:text-white",
      },
      dark: {
        default: "bg-yellow-400 text-black hover:bg-yellow-300",
        ghost: "bg-transparent text-white hover:bg-white hover:text-black",
        outline: "border border-white text-white hover:bg-white hover:text-black",
      },
    };

    return (
      <button
        ref={ref}
        className={`${base} ${themes[theme][variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
