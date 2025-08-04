import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Talk</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">I'd love to help</h4>
          <p className="text-neutral mt-8">
            Crafting innovative solutions to solve real-world problems
          </p>
        </div>

        {/* View Resume link */}
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
            className="inline-block w-fit rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-[#00071E] shadow-md transition-all duration-300 hover:scale-105 hover:bg-opacity-90 hover:shadow-lg">
          View My Resume
        </a>


        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:amuid677@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> amuid677@gmail.com
          </a>
          <a
            href="tel:+91 1234512345"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +91 1234512345
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
