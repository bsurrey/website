import React, { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/16/solid'

export default function LinkButton({
  url,
  children,
  target = '_blank',
}: {
  url: string
  children?: ReactNode
  target?: string
}) {
  return (
    <Link
      className="flex w-full justify-center rounded-xl bg-black p-4 text-center text-white hover:bg-black/80 md:w-fit dark:hover:bg-neutral-800"
      href={url}
      target={target}
    >
      {children ? (
        children
      ) : (
        <>
          <span className="text-md">Take a look</span>
          <ArrowUpRightIcon className={'my-auto ml-2 size-4'} />
        </>
      )}
    </Link>
  )
}
