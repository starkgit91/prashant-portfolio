import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </button>
  );
}
