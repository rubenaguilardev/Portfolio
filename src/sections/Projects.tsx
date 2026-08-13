import AnimatedBorderButton from "@/components/ui/AnimatedBorderButton"
import { FiArrowUpRight, FiGithub } from "react-icons/fi"
import { FaFigma } from "react-icons/fa6";
import debug from '../assets/debug.avif'
import chingu from '../assets/chingu.avif'
import social from '../assets/sb.avif'
import cisco from '../assets/cisco.avif'
import stemly from '../assets/stemly.avif'


const projects = [
  {
    title: "Social Buffington",
    description: 'A portfolio site for a digital marketing consultant, built around full-bleed photography. Converted 100+ high-resolution images to AVIF with Sharp and lazy-loaded the gallery through an Embla Carousel, cutting image payload over 90% with no visible quality loss.',
    image: social,
    tags: ["React", 'JavaScript', 'Embla', "Figma", "Canva",],
    link: 'https://socialbuffington.com',
    github: 'https://github.com/rubenaguilardev/Social-Buffington'
  },
  {
    title: "CiscoPatch - Work in progress",
    description: 'A website for a drywall contractor with a photo-based estimate request system that lets customers submit project photos directly, so quotes get generated remotely instead of through a site visit. Interface designed in Figma, Supabase REST endpoints wired into a React and TypeScript front end.',
    image: cisco,
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Supabase', 'PostgreSQL', "Figma", 'Canva'],
    link: 'https://www.ciscopatch.com/',
    github: 'https://github.com/rubenaguilardev/cp',
    figma: 'https://www.figma.com/design/hSWBAlV63msPpCTTiDXn6d/CiscoPatch?node-id=0-1&p=f'
  },
  {
    title: "Chingu Demographics",
    description: 'A full-stack interactive world map for the Chingu community that lets developers, designers, and product managers find teammates by role, tier, timezone, and country. Designed and componentized the map and filter interface in Next.js and Tailwind CSS.',
    image: chingu,
    tags: ['Nex', 'TypeScript', 'TailwindCSS', "Figma", "Canva", 'Spring'],
    link: 'https://v58-tier3-team-39.onrender.com/',
    github: 'https://github.com/chingu-voyages/V58-tier3-team-39',
    figma: 'https://www.figma.com/design/UEGHVlucUZSJjj9HCnFEF6/Chingu-Demographics?node-id=0-1&t=xlxnKhzlPv6Iw1ZL-1'
  },
  {
    title: "Stemly",
    description: 'A job application tracker with a dashboard for managing applications, monitoring status changes, and surfacing conversion analytics like interview rate, offer rate, and average response time. Built the analytics dashboard end to end on a Chingu Voyage team.',
    image: stemly,
    tags: ["React", 'TypeScript', 'TailwindCSS', "FastAPI", "PostgreSQL", "Figma", "Canva",],
    link: 'https://v60-tier3-team-39.netlify.app/',
    github: 'https://github.com/chingu-voyages/V60-tier3-team-39',
    figma: 'https://www.figma.com/design/R57ocInGi4U0TA72AmSRWV/Stemly?node-id=0-1&t=xlxnKhzlPv6Iw1ZL-1'
  },
  {
    title: "Debug Your Interview",
    description: 'A role-focused interview practice app with an interactive Q&A demo and a curated simulator carrying model answers for five tech roles. Built the landing page on a Chingu Voyage team.',
    image: debug,
    tags: ["React", 'TypeScript', 'TailwindCSS', 'Django', 'Neon'],
    link: 'https://v59-tier3-team-39.netlify.app/',
    github: 'https://github.com/chingu-voyages/V59-tier3-team-39'
  },
]

const Projects = () => {
  return (
    <section id='projects' className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">Things I <span className="text-primary glow-text">built and shipped</span> that make an impact.</h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects built with clean code, thoughtful design, and real-world impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-trasnform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FiArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FiGithub className="w-5 h-5" />
                  </a>
                  {project.figma && (
                    <a href={project.figma} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <FaFigma className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <FiArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-4 py-1.5 rounded-full bg-surface/15 text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/rubenaguilardev" target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              View all projects
              <FiArrowUpRight />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects