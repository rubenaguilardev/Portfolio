const experiences = [
  {
    period: 'Jul 2025 to Present',
    role: 'Frontend Developer & UI Designer',
    company: 'Chingu',
    description: 'Collaborated on cross-functional remote teams to design and ship full-stack web applications, contributing across frontend development and UX/UI design.',
    technologies: ['React', 'Next', 'Typescript', 'TailwindCSS', 'Figma', 'Canva'],
    current: true
  },
  {
    period: 'May 2025 to Present',
    role: 'Frontend Developer & UI Designer',
    company: 'Aguilar Web Studio',
    description: 'Delivered custom web solutions for small businesses and professionals, handling everything from design to deployment.',
    technologies: ['React', 'Typescript', 'TailwindCSS', 'Figma', 'Node', 'Express', 'PostgreSQL', 'Supabase'],
    current: true
  },
  {
    period: 'Sep 2024 to Mar 2025',
    role: 'Software Engineer',
    company: '100Devs',
    description: 'Collaborated on cross-functional remote teams to design and ship full-stack web applications, contributing across frontend development and UX/UI design.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Express'],
    current: false
  },
]

const Experience = () => {
  return (
    <section id='experience' className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">Relevant Professional Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 ">
            <span className="text-primary glow-text">Experience </span>
            that speaks volumes.
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            From freelance work to real-world teams, a look at the experiences that drive my work.
          </p>
        </div>
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-border z-10">
                  {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping"></span>}
                </div>
                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <p className="text-xl font-semibold">{exp.company}</p>
                    <h3 className="text-muted-foreground mt-2">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1.5 bg-surface/15 text-sm rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience