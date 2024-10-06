import { gists } from '@/data/gists'
import ImageTextCard from '@/components/cards/ImageTextCard'
import { Section } from '@/components/Section'

export default function Gists() {
  return (
    <Section
      description={
        "Here are some useful code snippets that I've created to solve common problems or automate tasks."
      }
      title="Gists"
    >
      <div className="flex flex-wrap gap-4">
        {gists.map((gist, index) => (
          <ImageTextCard
            key={index}
            description={gist.description}
            title={gist.name}
            url={gist.githubUrl}
          />
        ))}
      </div>
    </Section>
  )
}
