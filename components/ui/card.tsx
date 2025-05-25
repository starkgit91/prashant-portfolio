import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="bg-white shadow-lg rounded-2xl p-4">{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="text-gray-800">{children}</div>;
}
