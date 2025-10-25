import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" +
    " hover-elevate active-elevate-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary-border",
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive-border",
        outline:
          // Shows the background color of whatever card / sidebar / accent background it is inside of.
          // Inherits the current text color.
          " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
        secondary:
          "border bg-secondary text-secondary-foreground border border-secondary-border ",
        // Add a transparent border so that when someone toggles a border on later, it doesn't shift layout/size.
        ghost: "border border-transparent",
      },
      // Heights are set as "min" heights, because sometimes Ai will place large amount of content
      // inside buttons. With a min-height they will look appropriate with small amounts of content,
      // but will expand to fit large amounts of content.
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /**
   * Optional fill color used by the liquid overlay when hovering.
   * If not provided, the button styling (variant) will remain unchanged.
   */
  fillColor?: string;
  /**
   * Animation duration in milliseconds for the liquid overlay transitions.
   */
  animationDuration?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      fillColor = "#646cff",
      animationDuration = 700,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    // Inline transition style used for dynamic durations
    const transitionStyle: React.CSSProperties = {
      transitionProperty: "transform, opacity",
      transitionDuration: `${animationDuration}ms`,
      transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
    };

    // If using `asChild`, we don't render internal overlays because the child owns markup.
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...(props as any)}
        />
      );
    }

    // When rendering a native button, include the liquid overlays scoped to this button.
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "relative overflow-hidden group rounded-md",
        )}
        ref={ref}
        {...(props as any)}
      >
        {/* Liquid fill - slides up on hover */}
        <span
          aria-hidden
          className="liquid-fill absolute inset-0 transform translate-y-[110%] group-hover:translate-y-0 pointer-events-none"
          style={{
            backgroundColor: fillColor,
            ...transitionStyle,
            willChange: "transform, opacity",
            zIndex: 0,
          }}
        />

        {/* Gloss overlay - subtle radial highlight */}
        <span
          aria-hidden
          className="liquid-gloss absolute inset-0 transform translate-y-[120%] group-hover:translate-y-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.22), transparent 60%)",
            mixBlendMode: "overlay",
            ...transitionStyle,
            willChange: "transform, opacity",
            zIndex: 1,
          }}
        />

        {/* Content (children) kept on top */}
        <span className="relative z-10">{props.children}</span>

        {/* Performance & accessibility: prefers-reduced-motion + reduced transitions */}
        <style>{`
          .liquid-fill, .liquid-gloss {
            will-change: transform, opacity;
            transition-property: transform, opacity;
          }
          @media (prefers-reduced-motion: reduce) {
            .liquid-fill,
            .liquid-gloss {
              transition: none !important;
              transform: none !important;
              opacity: 1 !important;
            }
          }
        `}</style>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
