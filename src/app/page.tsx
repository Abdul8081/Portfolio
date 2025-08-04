import ContactSection from '@/components/Contact/ContactSection'
import Experience from '@/components/Experience/experience'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import Skills from '@/components/Skills/SkillsSection'
import  getAllProjects  from '@/sevices'

export default async function Home() {
  const projects = await getAllProjects()


  return (
    <main>
      <Hero />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ProjectSection projects={projects} />
        <Skills />
        <Experience/>
        <ContactSection />
      </div>
    </main>
  )
}
