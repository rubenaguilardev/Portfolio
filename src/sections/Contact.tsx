import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6"
import gmail from "@/assets/gmail.svg"
import Button from "@/components/ui/Button"

const contactlLinks = [
  { icon: gmail, href: 'mailto:benaguilardev@outlook.com', color: ' ' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rubenaguilar-/', color: '#0a66c2' },
  { icon: FaGithub, href: 'https://github.com/rubenaguilardev', color: '' },
  { icon: FaBluesky, href: 'https://bsky.app/profile/benaguilar.bsky.social', color: '#0085ff' }
]

const Contact = () => {
  return (
    <section id='contact' className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary glow-text">
            Contact Me
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Let's talk. Whether it's a project, opportunity, or just a hello.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row max-w-5xl mx-auto">
          <div className="flex-1 glass p-8 rounded animate-fade-in animation-delay-300">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id='name'
                  type='text'
                  required
                  placeholder="Your name..."
                  className="w-full px-4 py-3 rounded-xl border border-border/70 bg-black/40 focus:border-primary focus:ring-0.5 focus:ring-primary-foreground focus:bg-primary/10 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-border/70 bg-black/40 focus:border-primary focus:ring-0.5 focus:ring-primary-foreground focus:bg-primary/10 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl border border-border/70 bg-black/40 focus:border-primary focus:ring-0.5 focus:ring-primary-foreground focus:bg-primary/10 outline-none transition-all resize-none"
                />
              </div>
              <Button className='w-full' size='lg' type='submit'>Send Message</Button>
            </form>
          </div>
          <div className="flex md:flex-col justify-center items-center glass gap-6 py-4 md:py-0 px-5 rounded">
            {contactlLinks.map(({ href, icon: Icon, color }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {Icon === gmail ? <img src={Icon} className="w-8 h-8" /> :
                  <Icon className={`h-8 w-8 cursor-pointer`} style={{ color }} />}
              </a>

            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

