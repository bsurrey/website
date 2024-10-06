import SkillsAndWorkExperience from '@/components/sections/SkillsAndWorkExperience'
import Projects from '@/components/sections/Projects'
import Gists from '@/components/sections/Gists'
import BlogPosts from '@/components/sections/BlogPosts'
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'

export default function Page() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-4xl space-y-16 px-8 pt-16 md:space-y-28">
        <div className="space-y-24 lg:space-y-44">
          <div className="flex flex-col gap-24 p-0">
            <SkillsAndWorkExperience />
          </div>
          <Projects />
          <Gists />
          <BlogPosts />
          <Contact />
        </div>
      </div>
    </>
  )
}
