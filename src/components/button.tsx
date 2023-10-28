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
      'tracking-wide',
      'transition',
      'rounded-full',
      'outline-none',
      'focus:scale-[0.98]',
    ],
    {
      variants: {
        variant: {
          primary: [
            'font-semibold',
            'bg-indigo-500',
            'hover:bg-indigo-600',
            'text-white',
            'shadow',
            'hover:shadow-md',
            'disabled:bg-indigo-500/50',
            'disabled:shadow',
            'ring-offset-2',
            'focus-visible:ring-2',
            'ring-indigo-500/70',
          ],
          secondary: [
            'font-normal',
            'bg-gray-50',
            'hover:bg-gray-100',
            'disabled:bg-gray-50',
            'text-gray-950',
            'shadow',
            'border',
            'border-neutral-200/50',
            'ring-offset-2',
            'focus-visible:ring-2',
            'ring-gray-200',
          ],
          destructive: [
            'font-semibold',
            'bg-red-500',
            'hover:bg-red-600',
            'text-white',
            'rounded-full',
            'shadow',
            'hover:shadow-md',
            'disabled:bg-red-500/50',
            'disabled:shadow',
            'ring-offset-2',
            'focus-visible:ring-2',
            'ring-red-500',
          ],
        
        },
        size: {
          small: ['text-sm', 'py-1', 'px-4'],
          default: ['text-base', 'py-2', 'px-8'],
          large: ['text-lg', 'py-3', 'px-12'],
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
    
      >show all episode
        {children}
      </span>
      </button>
    )
  )
  
  Button.displayName = 'Button'
  
  export { Button }
  export type { ButtonProps }

