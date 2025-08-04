// components/Experience/ExperienceSection.tsx
'use client'

import Image from 'next/image'
import exp1 from '@/assets/experience/iith.png'
import exp2 from '@/assets/experience/nvm_research.png'
import exp3 from '@/assets/experience/nitmz.png'
import exp4 from '@/assets/experience/iitm.png'

import TiltCardExperience from '../TiltCardExperience'

const experiences = [
    {
    title: 'IIT Madras – Cuckoo Filter-based GMMU Bypass',
    duration: '2 Month Research Internship',
    description:
      'Worked under Dr. Madhu Mutyam, Learned Computer Architecture basics and Go language. Explored MGPU-Sim focusing on TLB operations. Implemented Bloom and Cuckoo Filters in MGPU-Sim to handle TLB requests—returning hits directly or bypassing GMMU walk to access IOMMU. Used CACTI for area, power, and latency analysis.',
    image: exp4,
  },
  {
    title: 'IIT Hyderabad – Cache Replacement Policies',
    duration: '2 Month Research Internship',
    description:
      'Worked under Dr. Shirshendu Das on evaluating various cache replacement policies using the ChampSim simulator. Focused on performance benchmarking and analyzing hit/miss rates.',
    image: exp1,
  },
  {
    title: 'Full-Stack Development - NIT Mizoram',
    duration: '6 Months Internship',
    description:
      'Built a complete full-stack authentication app with Redux Toolkit and JWT. Focused on responsive UI/UX design and secure backend integration.',
    image: exp3,
  },
  {
    title: 'IIT Hyderabad – Research Paper',
    duration: '7-8 Months Research Paper project',
    description:
      'Continued research with Dr. Shirshendu Das focusing on read-write queue partitioning in Last-Level Caches using Non-Volatile Memory (NVM), enhanced the IPC after bypassing the write request. ',
    image: exp2,
  },

]

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="my-16 flex flex-col gap-16 rounded-4xl bg-secondary px-4 py-10 md:px-12 lg:px-16">
      <h2 className="text-center text-4xl font-bold text-neutral">Experience</h2>

    {experiences.map((exp, index) => (
      <TiltCardExperience key={index}>
        <div
          className={`flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-12 lg:gap-20 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-accent md:text-3xl">{exp.title}</h3>
            <p className="text-neutral mt-2 text-sm italic">{exp.duration}</p>
            <p className="text-neutral mt-4 text-lg font-light leading-relaxed">{exp.description}</p>
          </div>

          <div className="md:w-1/2">
            <Image
              src={exp.image}
              alt={exp.title}
              className="rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </TiltCardExperience>
    ))}

    </section>
  )
}

export default ExperienceSection
