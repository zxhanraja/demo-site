import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-none px-6 py-3 text-sm font-medium transition-all duration-300 uppercase tracking-[0.1em]",
          {
            "bg-[var(--color-brand-gold)] text-black hover:bg-[var(--color-brand-gold-light)] hover:scale-[1.02]": variant === "solid",
            "border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] bg-transparent hover:bg-[var(--color-brand-gold)] hover:text-black": variant === "outline",
            "bg-transparent text-[var(--color-brand-text-primary)] hover:text-[var(--color-brand-gold)]": variant === "ghost",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
