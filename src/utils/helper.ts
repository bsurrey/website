import { twMerge } from 'tailwind-merge'
import clsx, { ClassValue } from 'clsx'

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}

export function getImageUrl(filename: string, prefix: string = '/') {
  const remoteAssetsUrl = process.env.REMOTE_ASSETS_URL

  if (remoteAssetsUrl) {
    return `${remoteAssetsUrl}${prefix}${filename}`
  }

  return `${prefix}${filename}`
}
