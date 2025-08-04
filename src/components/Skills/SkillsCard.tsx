import Image from 'next/image'
import HoloCard from '../HoloCards'

interface SkillsCardTypes {
  icon: string
  title: string
  shortDescription: string
  color?: string
}

const SkillsCard: React.FC<SkillsCardTypes> = ({ title, shortDescription, icon, color }) => {
  return (
    <HoloCard color={color} className="p-5 bg-secondary">
      <div className="flex flex-col items-center rounded-[14px]">
        <Image src={icon} alt={title} className="my-1 size-14" />
        <h5 className="text-accent mt-2 mb-5 text-center text-base font-semibold">{title}</h5>
        <div className="bg-primary rounded-2xl p-4">
          <p className="text-primary-content text-center text-sm font-normal">{shortDescription}</p>
        </div>
      </div>
    </HoloCard>
  )
}

export default SkillsCard
