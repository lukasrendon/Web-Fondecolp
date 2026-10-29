import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

export function BrowserFrame({
  url = "fondecolp.com",
  children,
  className,
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/15 bg-navy-deep shadow-2xl shadow-black/40",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-black/25 px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="min-w-0 flex-1 rounded-full bg-white/10 px-3 py-1 text-center text-[11px] text-white/70">
          {url}
        </div>
      </div>
      <div className="bg-paper text-ink">{children}</div>
    </div>
  );
}
