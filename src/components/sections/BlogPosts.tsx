import { Card } from '@/components/cards/Card'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/Section'

export default function BlogPosts() {
  return (
    <Section
      description={
        'Stay tuned for upcoming posts where I share insights, tips, and personal experiences on various topics.'
      }
      title={'Blog'}
    >
      <Card className="flex min-h-40 flex-col justify-center gap-4 border-dashed border-gray-400 bg-transparent text-center text-gray-400 shadow-none dark:border-gray-100/10">
        <XCircleIcon className="mx-auto size-12" />
        <p className="text-lg">New content coming soon!</p>
      </Card>
    </Section>
  )
}
