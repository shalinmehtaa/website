import { ReactNode } from "react";
import { clsx } from "clsx";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

export default function Prose({ children, className }: ProseProps) {
  return (
    <div className={clsx("prose", className)}>
      {children}
    </div>
  );
}


