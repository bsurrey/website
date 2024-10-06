export interface Skill {
  name: string
  weight?: number
  category?: 'programming' | 'framework' | 'technology' | 'method' | 'software' | 'soft' | 'hard'
  hidden?: boolean
}

export interface Project {
  name: string
  href: string
  description?: string
  tags?: string[]
}

export interface WorkExperience {
  name: string
  role: string
  time: string
  logo: string
  projects?: Project[] | null
  description?: string
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
