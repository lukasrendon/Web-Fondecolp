import * as React from "react";
import { cn } from "@/shared/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink shadow-sm outline-none transition placeholder:text-muted/70 focus:border-leaf focus:ring-2 focus:ring-leaf/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-xl border border-line bg-white px-3.5 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-muted/70 focus:border-leaf focus:ring-2 focus:ring-leaf/20",
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label className={cn("text-sm font-medium text-navy", className)} {...props} />
  );
}

export function Badge({
  className,
  tone = "navy",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "navy" | "leaf" | "gold" | "berry";
}) {
  const tones = {
    navy: "bg-navy-soft text-navy",
    leaf: "bg-leaf-soft text-leaf-deep",
    gold: "bg-[#f4ead0] text-[#7a5b18]",
    berry: "bg-red-50 text-berry",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
