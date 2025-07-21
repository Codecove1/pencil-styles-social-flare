import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/40",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        fashion: "bg-gradient-fashion text-primary-foreground hover:shadow-glow transform hover:scale-105",
        gold: "bg-gradient-gold text-primary hover:shadow-glow transform hover:scale-105 font-medium",
        rose: "bg-gradient-rose text-accent-foreground hover:shadow-elegant transform hover:scale-105",
        glass: "bg-background/10 backdrop-blur-md border border-foreground/10 text-foreground hover:bg-background/20",
      },
      size: {
        default: "h-8 px-3 py-1.5 text-xs sm:h-10 sm:px-4 sm:py-2 sm:text-sm",
        sm: "h-7 px-2 py-1 text-xs sm:h-9 sm:px-3 sm:rounded-md",
        lg: "h-10 px-6 py-2 text-sm sm:h-11 sm:px-8 sm:text-base lg:px-12 lg:text-lg",
        icon: "h-8 w-8 sm:h-10 sm:w-10",
        responsive: "h-8 px-3 py-1.5 text-xs sm:h-10 sm:px-4 sm:py-2 sm:text-sm md:h-11 md:px-6 md:text-base lg:h-12 lg:px-8 lg:text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
