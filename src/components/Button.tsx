import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/TailwindClass";

const buttonVariants = cva(
  " inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2  disabled:opacity-50  disabled:pointer-events-none  data-[state=open]:bg-green-100 ",
  {
    variants: {
      variant: {
        default: "bg-green-900 text-white hover:bg-green-800 ",
        destructive: "bg-red-500 text-white hover:bg-red-600 ",
        outline: "bg-transparent border border-green-200 hover:bg-green-100 ",
        subtle: "bg-green-100 text-green-900 hover:bg-green-200 ",
        ghost:
          "bg-transparent  hover:bg-green-100  data-[state=open]:bg-transparent ",
        link: "bg-transparent  underline-offset-4 hover:underline text-green-900  hover:bg-transparent ",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </button>
    );
  }
);

export default Button;
