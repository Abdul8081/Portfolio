import { skillData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import SkillsCard from './SkillsCard'

const SkillsSection = () => {
  return (
    <section id="skills" className="my-14 px-4 md:px-8">
      <SectionHeading
        title="Skills"
        subtitle="My Technical Proficiencies"
      />

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-[3.75rem] sm:grid-cols-2 lg:grid-cols-3">
        {skillData.map((skill, index) => (
          <SkillsCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            shortDescription={skill.shortDescription}
          />
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
