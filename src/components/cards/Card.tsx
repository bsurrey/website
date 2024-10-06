import { cn } from '@/utils/helper'

type CardProps = {
  className?: string
} & React.ComponentPropsWithoutRef<'div'>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        //'relative rounded-xl border border-gray-500/30 bg-white p-5 md:rounded-2xl dark:bg-neutral-900 dark:text-white',
        'relative rounded-xl border border-gray-500/20 bg-neutral-100 p-5 md:rounded-2xl dark:bg-neutral-900 dark:text-white',
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}
