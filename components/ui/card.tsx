import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}

