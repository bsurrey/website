import { cn } from '@/utils/helper'

interface PillProps {
  className?: string
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  outlined?: boolean
  size?: 'small' | 'medium' | 'large'
  text: string
}

export default function Pill({
  className,
  color = 'default',
  outlined = false,
  size = 'medium',
  text,
}: PillProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-semibold'
  const colorClasses = {
    danger: outlined ? 'text-red-600 border border-red-600' : 'bg-red-500 text-white',
    default: outlined ? 'text-gray-600 border border-gray-600' : 'bg-gray-200 text-gray-800',
    primary: outlined ? 'text-blue-600 border border-blue-600' : 'bg-blue-500 text-white',
    success: outlined ? 'text-green-600 border border-green-600' : 'bg-green-500 text-white',
    warning: outlined ? 'text-yellow-600 border border-yellow-600' : 'bg-yellow-500 text-white',
  }
  const sizeClasses = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-3 py-1',
    large: 'text-base px-4 py-2',
  }
  const finalClasses = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]}`

  return <span className={cn(finalClasses, className)}>{text}</span>
}
