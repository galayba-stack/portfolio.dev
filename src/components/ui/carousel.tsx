// button.tsx

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils"; // assuming your cn function

const buttonVariants = cva("...", {
  variants: {
    variant: {
      default: "bg-blue-500 text-white",
      outline: "border",
    },
    size: {
      default: "px-4 py-2",
      icon: "p-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
  asChild?: boolean; // for <Slot />
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";
      return (
          <Comp
              className={cn(buttonVariants({ variant, size }), className)}
              ref={ref}
              {...props}
          />
      );
    },
);

Button.displayName = "Button";

export { Button, buttonVariants };
