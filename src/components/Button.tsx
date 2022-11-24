import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from "react";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    className?: string;

}

export function Button({children, className, asChild, ...props }:ButtonProps) {
    
    const Comp = asChild ? Slot: 'button';

    return(
        <Comp className={
            clsx(
                'py-3 px-4 bg-cyan-500 font-bold text-sm text-black font-sans rounded w-full transition-colors hover:bg-cyan-300 focus:ring-2  ring-white',
                className
            )
        }
         {...props}
        >
        {children}
        </Comp>
    )
}