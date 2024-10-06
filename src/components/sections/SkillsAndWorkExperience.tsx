import { Section } from '@/components/Section'
import ImageTextCard from '@/components/cards/ImageTextCard'
import { skills } from '@/data/skills'
import { Card } from '@/components/cards/Card'
import workExperiences from '@/data/workExperiences'
import Image from 'next/image'

export default function SkillsAndWorkExperience() {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
      <div>
        <Section title={'Skills'}>
          <ImageTextCard
            className={'border-none bg-transparent p-0 shadow-none dark:bg-transparent'}
            tags={skills.map(function (skill) {
              return skill.name
            })}
          />
        </Section>
      </div>

      <div>
        <Section title={'Experience'}>
          <Card className={'border-none bg-transparent p-0 shadow-none dark:bg-transparent'}>
            {workExperiences.map((job, index) => (
              <div key={index} className="flex flex-row gap-4">
                <div className="flex aspect-square size-10 rounded-2xl bg-white p-2 ring-gray-200">
                  <Image
                    alt={`${job.name} logo`}
                    className="m-auto size-6 object-cover"
                    height={44}
                    src={job.logo}
                    width={44}
                  />
                </div>
                <div className="flex w-full flex-row justify-between">
                  <div>
                    <h3 className={'text-lg font-bold'}>{job.name}</h3>
                    <p className="text-sm">{job.role}</p>
                  </div>
                  <p className="my-auto text-xs font-semibold">{job.time}</p>
                </div>
              </div>
            ))}
          </Card>
        </Section>
      </div>
    </div>
  )
}
