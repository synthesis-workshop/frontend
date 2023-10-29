'use client'

import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx'
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';


const variants = cva(
    [
      'inline-flex',
      'items-center',
      'justify-center',
      'relative',
      'cursor-pointer',
      'disabled:cursor-not-allowed',
       'border-2',
      

      'rounded-lg',
      'outline-none',
      'focus:scale-[0.98]',
    ],
    {
      variants: {
        variant: {
          primary: [
            'font-semibold',
            'bg-slate-50',
            'text-gray-950',
            'text-black',
            'shadow',
            'border-blue-950',
    
          ],
          secondary: [
            'font-semibold',
            'bg-slate-600',
            'text-gray-950',
            'text-white',
            'shadow',
            'border-blue-950',
           ' transition',
           'ease-out',
           'hover:bg-gradient-to-r from-slate-100 to-blue-500e',
            'duration-300',

           
          ],
          destructive: [
            'font-semibold',
            'bg-slate-50',
            'text-gray-950',
            'text-white',
            'shadow',
            'border-white',
          
           
          ],
          ghost: [
            'font-semibold',
            'bg-slate-50',
            'text-gray-950',
            'text-white',
            'shadow',
            'border-bg-gradient-to-r from-slate-100 to-blue-500e',
           ' transition',
           'ease-out',
            'hover:bg-gradient-to-r from-via-neutral-300 to via-neutral-600',
            'duration-300',
            'focus-visible:ring-2',
           
          ],
        },
        size: {
          
          default: ['text-base', 'py-2', 'px-8'],
          
        },
      },
      defaultVariants: {
        variant: 'primary',
        size: 'default',
      },
    }
  )


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>  &
VariantProps<typeof variants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant, size, ...rest }, ref) => (
      <button
        ref={ref}
        className={twMerge(clsx(variants({ variant, size, className })))}
        {...rest}
      >
    <span
    
      >
        {children}
      </span>
      </button>
    )
  )
  
  Button.displayName = 'Button'
  
  export { Button }
  export type { ButtonProps }

