import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, Pressable } from 'react-native';

const buttonVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-2 rounded-full shadow-none',
    Platform.select({
      web: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-error/20 dark:aria-invalid:ring-error/40 aria-invalid:border-error whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    })
  ),
  {
    variants: {
      variant: {
        // Filled — primary-fixed / on-primary-fixed
        default: cn(
          'bg-primary-fixed active:bg-primary-fixed/90',
          Platform.select({ web: 'hover:bg-primary-fixed/90' })
        ),
        // Filled tonal — secondary-fixed / on-secondary-fixed
        secondary: cn(
          'bg-secondary-fixed active:bg-secondary-fixed/90',
          Platform.select({ web: 'hover:bg-secondary-fixed/90' })
        ),
        // Outlined — outline border, primary label
        outline: cn(
          'border-outline bg-transparent active:bg-primary/10 border',
          Platform.select({ web: 'hover:bg-primary/10' })
        ),
        // Text — primary label, state layer on press
        ghost: cn(
          'bg-transparent active:bg-primary/10',
          Platform.select({ web: 'hover:bg-primary/10' })
        ),
        // Error filled — error / on-error
        destructive: cn(
          'bg-error active:bg-error/90',
          Platform.select({
            web: 'hover:bg-error/90 focus-visible:ring-error/20',
          })
        ),
        // Text / link — primary label
        link: 'bg-transparent',
      },
      size: {
        default: cn('h-10 px-4 py-2 sm:h-9', Platform.select({ web: 'has-[>svg]:px-3' })),
        sm: cn('h-9 gap-1.5 rounded-full px-3 sm:h-8', Platform.select({ web: 'has-[>svg]:px-2.5' })),
        lg: cn('h-11 rounded-full px-6 sm:h-10', Platform.select({ web: 'has-[>svg]:px-4' })),
        icon: 'h-10 w-10 sm:h-9 sm:w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva(
  cn(
    'font-sans text-label-large',
    Platform.select({ web: 'pointer-events-none transition-colors' })
  ),
  {
    variants: {
      variant: {
        default: 'text-on-primary-fixed',
        secondary: 'text-on-secondary-fixed',
        outline: 'text-primary',
        ghost: 'text-primary',
        destructive: 'text-on-error',
        link: cn(
          'text-primary group-active:underline',
          Platform.select({ web: 'underline-offset-4 hover:underline group-hover:underline' })
        ),
      },
      size: {
        default: '',
        sm: '',
        lg: '',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentProps<typeof Pressable> &
  React.RefAttributes<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <TextClassContext.Provider value={buttonTextVariants({ variant, size })}>
      <Pressable
        className={cn(props.disabled && 'opacity-50', buttonVariants({ variant, size }), className)}
        role="button"
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
