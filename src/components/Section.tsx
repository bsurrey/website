import React, { ReactNode } from 'react'
import { cn } from '@/utils/helper'

export function Section({
  children,
  className,
  description,
  title,
  subtitle,
  underline,
}: {
  children?: ReactNode
  className?: string
  description?: string
  title: string
  subtitle?: string
  underline?: boolean
}) {
  return (
    <section className={cn('flex flex-col gap-2 md:gap-4', className)}>
      <div className={'w-fit text-black dark:text-white'}>
        {title && subtitle ? (
          <>
            <h2 className="text-sm uppercase text-primary-400">{title}</h2>
            <h3 className={'text-3xl font-bold'}>{subtitle}</h3>
          </>
        ) : (
          <h2 className="text-3xl font-bold">{title}</h2>
        )}

        {title && underline && <hr className={'mt-0 rounded-2xl border-2 border-primary-500'} />}
      </div>

      {description && <p className="-mt-1 mb-4">{description}</p>}
      {children}
    </section>
  )
}
