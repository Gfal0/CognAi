import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

export function Progress({
  value,
  className
}: {
  value: number;
  className?: string;
}) {
  return (
    <ProgressPrimitive.Root
      className={cn("relative h-2 overflow-hidden rounded-full bg-white/10", className)}
      value={value}
    >
      <ProgressPrimitive.Indicator
        className="h-full bg-gradient-to-r from-brand-500 via-accent-400 to-neon transition-all"
        style={{ width: `${value}%` }}
      />
    </ProgressPrimitive.Root>
  );
}

