import { projects } from '@/data/projects'
import ImageTextCard from '@/components/cards/ImageTextCard'
import { Section } from '@/components/Section'
import LinkButton from '@/components/LinkButton'
import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import React from 'react'

export default function Projects() {
  return (
    <Section
      description={
        'Here are some of the projects I&apos;ve been working on in my free time. They cover a range of technologies and interests, showcasing my passion for software development.'
      }
      title={'Projects'}
    >
      <div className="flex flex-wrap gap-4">
        {projects.map((project, index) => (
          <ImageTextCard
            key={index}
            description={project.description}
            image={project.image}
            tags={project.tags}
            title={project.name}
            url={project.url}
          >
            {project.githubUrl && (
              <LinkButton url={project.githubUrl}>
                Look at the code <ArrowUpRightIcon className={'my-auto ml-2 size-4'} />
              </LinkButton>
            )}
          </ImageTextCard>
        ))}
      </div>
    </Section>
  )
}
