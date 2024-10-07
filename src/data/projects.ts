import RoxanaHigginsCom from '../assets/projects/roxanahigginscom.png'
import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    name: 'Portfolio: Roxana Higgins',
    description:
      'This personal website showcases Roxana Higgins. The sleek design, provided by Roxana herself, reflects modern web development practices and her unique style.',
    tags: ['Next.js', 'React', 'zod', 'SSR', 'TailwindCSS', 'Cloudflare Pages'],
    url: 'https://roxanahiggins.com/',
    wip: false,
    image: RoxanaHigginsCom,
  },
  {
    name: 'SaaS: Subscription Manager',
    description:
      'A platform to help you keep track of your subscriptions and manage payments easily.',
    tags: ['Laravel', 'React', 'inertiajs', 'Postgres', 'Docker'],
    url: 'https://m.benjaminsurrey.com',
    wip: true,
  },
  {
    name: 'iOS App: Subscription Manager',
    description:
      'An iOS application designed to help you monitor and manage all your subscriptions effectively.',
    tags: ['Swift', 'SwiftUI', 'SwiftData', 'iOS'],
    githubUrl: 'https://github.com/bsurrey/SubCamb',
    wip: true,
  },
  {
    name: 'iOS App: Counteroo',
    description:
      'Track multiple counters simultaneously. Whether its tracking streaks like how many days you read a book in a row or keeping score while playing games with friends.',
    tags: ['Swift', 'SwiftUI', 'CoreData', 'iOS'],
    githubUrl: 'https://github.com/bsurrey/Countero',
    wip: true,
  },
  {
    name: 'iOS App: Chat GPT',
    description:
      'Chat with ChatGPT and create multiple assistants tailored to different needs. Developed at a time when no official ChatGPT app was available.',
    tags: ['Swift', 'SwiftUI', 'OpenAI APIs', 'CoreData', 'iOS'],
    githubUrl: 'https://github.com/bsurrey/replyAi',
    wip: true,
  },
]
