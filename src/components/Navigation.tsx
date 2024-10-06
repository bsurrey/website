'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationItem } from '@/lib/types'

export const navigation: navigationItem[] = [
  { name: 'About', url: '#about' },
  { name: 'Projects', url: '#projects' },
  { name: 'Gists', url: '#gists' },
  { name: 'Blog', url: '#blog' },
  { name: 'Contact', url: '#contact' },
]

export default function Navigation() {
  const currentPath = usePathname()

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 mx-auto mt-6 w-fit rounded-2xl bg-white p-1 text-center shadow dark:bg-neutral-950">
      <div className="flex justify-center gap-1">
        {navigation.map(({ name, url }, key) => (
          <Link
            key={key}
            className="rounded-xl p-1.5 text-sm font-semibold hover:bg-neutral-100 hover:text-primary-800 sm:text-base md:p-4 dark:hover:bg-neutral-900"
            href={currentPath === '/' ? url : '/' + url}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
