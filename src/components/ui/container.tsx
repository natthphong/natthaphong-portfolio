import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}
