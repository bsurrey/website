import { Card } from '@/components/cards/Card'
import { cn } from '@/utils/helper'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import Pill from '@/components/Pill'
import LinkButton from '@/components/LinkButton'

export default function ImageTextCard({
  className,
  children,
  image,
  url,
  title,
  description,
  imageAlt,
  tags,
}: {
  className?: string
  children?: ReactNode
  image?: StaticImageData
  imageAlt?: string
  title?: string
  description?: string
  url?: string
  tags?: string[]
}) {
  return (
    <Card className={cn('w-full', className)}>
      <div
        className={cn('grid w-full flex-row gap-4', image ? 'md:grid-cols-2' : 'md:grid-cols-1')}
      >
        {image && (
          <Image
            alt={imageAlt ? imageAlt : `Image for: ${title}`}
            className="rounded-xl"
            height={image.height}
            src={image.src}
            width={image.width}
          />
        )}

        <div className="flex flex-col gap-6">
          {title && <h3 className={'-mb-2 text-2xl font-bold'}>{title}</h3>}
          {description && <p className="">{description}</p>}

          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Pill key={index} className="px-4" text={tag} />
              ))}
            </div>
          )}

          {children}

          {url && <LinkButton url={url} />}
        </div>
      </div>
    </Card>
  )
}
