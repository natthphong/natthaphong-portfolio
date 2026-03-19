import type { MouseEventHandler, ReactNode } from "react";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type ResumeDownloadLinkProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function ResumeDownloadLink({
  children,
  className,
  onClick,
}: ResumeDownloadLinkProps) {
  return (
    <a
      href={siteConfig.resumePath}
      download
      onClick={onClick}
      className={cn(className)}
    >
      {children}
    </a>
  );
}
