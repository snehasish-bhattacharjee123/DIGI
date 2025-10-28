import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Default: Brand blue background, beige text, orange hover
        default:
          "bg-brand-blue-900 text-brand-beige-100 border border-brand-blue-800 hover:bg-brand-orange hover:border-brand-orange shadow-brand hover:shadow-brand-lg",

        // Destructive: Red background for destructive actions
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90 shadow-brand hover:shadow-brand-lg",

        // Outline: Transparent with border, inherits text color
        outline:
          "border-2 border-brand-gray bg-transparent hover:bg-brand-beige-100 hover:border-brand-blue-900 hover:text-brand-blue-900 shadow-brand-sm hover:shadow-brand",

        // Secondary: Neutral gray background
        secondary:
          "bg-brand-gray text-white border border-brand-gray-600 hover:bg-brand-gray-600 shadow-brand hover:shadow-brand-lg",

        // Ghost: No background, minimal styling
        ghost:
          "border border-transparent hover:bg-brand-beige-100 hover:text-brand-blue-900",

        // Success: Highlight green for positive actions
        success:
          "bg-brand-green text-brand-blue-900 border border-brand-green-400 hover:bg-brand-green-400 shadow-brand hover:shadow-brand-lg font-semibold",

        // Orange: Direct orange button for CTAs
        cta: "bg-brand-orange text-white border border-brand-orange-600 hover:bg-brand-orange-600 shadow-brand-lg hover:shadow-brand-xl hover:scale-105 font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
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
   * Defaults to brand orange (#ff751f) for interactive feedback.
   */
  fillColor?: string;
  /**
   * Animation duration in milliseconds for the liquid overlay transitions.
   */
  animationDuration?: number;
  /**
   * Whether to enable the liquid animation effect.
   * Set to false for simpler button interactions.
   */
  enableLiquidEffect?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      fillColor = "#ff751f", // Brand orange
      animationDuration = 700,
      enableLiquidEffect = true,
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

    // If using `asChild` or liquid effect is disabled, render simple button
    if (asChild || !enableLiquidEffect) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...(props as any)}
        />
      );
    }

    // When rendering with liquid effect, include overlays
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "relative overflow-hidden group",
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
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.25), transparent 60%)",
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
