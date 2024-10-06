import { Skill } from '@/lib/types'

export const skills: Skill[] = [
  {
    name: 'Typescript',
    category: 'programming',
    weight: 0.9,
  },
  {
    name: 'PHP',
    category: 'programming',
    weight: 0.8,
    hidden: true,
  },
  {
    name: 'HTML',
  },
  { name: 'CSS' },
  { name: 'MySQL', category: 'programming', weight: 0.8 },
  { name: 'git' },
  { name: 'React', category: 'framework', weight: 0.7 },
  { name: 'Next', category: 'framework', weight: 0.7 },
  { name: 'Node', category: 'technology', weight: 0.7 },
  { name: 'Laravel', category: 'framework', weight: 0.7, hidden: true },
  { name: 'scrum', category: 'method', weight: 0.7 },
  { name: 'Laravel', category: 'framework', weight: 0.7 },
]
