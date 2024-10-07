import React, { ReactNode } from 'react'
import { cn } from '@/utils/helper'

export function Section({
  children,
  className,
  description,
  title,
}: {
  children?: ReactNode
  className?: string
  description?: string
  title: string
}) {
  return (
    <section className={cn('flex flex-col gap-2 md:gap-4', className)}>
      <div className={'w-fit text-black dark:text-white'}>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>

      {description && <p className="-mt-1 mb-4">{description}</p>}
      {children}
    </section>
  )
}
