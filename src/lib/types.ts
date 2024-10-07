import { StaticImageData } from 'next/dist/shared/lib/get-img-props'

export interface Skill {
  category?: 'programming' | 'framework' | 'technology' | 'method' | 'software' | 'soft' | 'hard'
  hidden?: boolean
  name: string
  weight?: number
}

export interface Project {
  description?: string
  githubUrl?: string
  image?: StaticImageData
  name: string
  tags?: string[]
  url?: string
  wip?: boolean
}

export interface WorkExperience {
  description?: string
  logo: string
  name: string
  projects?: Project[] | null
  role: string
  time: string
}

export interface navigationItem {
  name: string
  url: string
}

export interface ContactResponse {
  success: boolean
  errors?: {
    message?: string[]
    email?: string[]
    name?: string[]
  }
  message?: string
}
