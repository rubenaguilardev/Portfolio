import AnimatedBorderButton from '@/components/ui/AnimatedBorderButton'
import Button from '@/components/ui/Button'
import { FaLongArrowAltRight, FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6";
import Card from './Card';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/rubenaguilardev' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rubenaguilar-/' },
  { icon: FaBluesky, href: 'https://bsky.app/profile/benaguilar.bsky.social' }
]


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-24 items-center">
          <div className="space-y-8">
            <div className="">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend Engineer
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                I design the interface <span className="text-primary">then I build it.</span>
              </h1>
              <p className="text-lg font-medium text-muted-foreground max-w-lg lg:max-w-xl animate-fade-in animation-delay-200">
                I am a 
                <span className="text-primary"> frontend developer </span>
                finishing an M.S. in Computer Science, with over 2 years of apprenticeship, internship, and freelance experience across EdTech and small business web. I have shipped 5+ React and TypeScript applications from Figma wireframe to deployed build, including a client photography site where converting 100+ images to AVIF cut image payload over 90% with no visible quality loss.
              </p>
              <div className='flex items-center gap-4'>
                <span></span>
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target='_blank'
                    rel='nonopener'
                    className='px-3 py-2.5 glass rounded-lg cursor-pointer hover:bg-surface/20 animate-fade-in animation-delay-300'>
                    {<Icon className='h-7 w-7 transition-transform duration-500 hover:scale-115' />}
                  </a>
                ))}
              </div>
            </div>
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-500'>
              <a href="#contact">
                <Button className='' size='lg'>Contact me <FaLongArrowAltRight className='w-5 h-5' /></Button>
              </a>
              <a href="#projects">
                <AnimatedBorderButton>View Projects</AnimatedBorderButton>
              </a>
            </div>

          </div>
          <Card />
        </div>
      </div>
      <div className='hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-10'>
        <a href="#about" className='flex flex-col items-center gap-2 text-muted-foreground'>
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <FaChevronDown className='w-6 h-6 animate-bounce' />
        </a>
      </div>
    </section>
  )
}

export default Hero