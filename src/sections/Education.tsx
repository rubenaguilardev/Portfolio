import { FaGraduationCap } from "react-icons/fa"
import { SiBookstack } from "react-icons/si"
import { MdOutlineDateRange } from "react-icons/md"

const degrees = [
  {
    title: 'Master of Science',
    date: 'Expected 2026',
    university: 'Western Governors University',
    degree: 'Computer Science',
    specialization: 'Specialization in Computer Systems',
    keyCourses: ['Software Architecture', 'Applied Algorithms', 'Network Architecture', 'Cloud Computing'],
    icon: SiBookstack
  },
  {
    title: 'Bachelor of Science',
    date: '2024',
    university: 'Western Governors University',
    degree: 'Software Engineering',
    keyCourses: ['Web Development', 'UI / UX Design', 'Databases', 'Operating Systems', 'Software Testing', 'Agile Methodologies', 'Data structures & Algorithms', 'Application Development'],
    icon: FaGraduationCap
  }
]

const Education = () => {
  return (
    <section id='education' className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">Academic Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">Always Learning</h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Pursuing my M.S. in Computer Science at WGU, building on a B.S. in Software Engineering, grounded in both theory and practical application.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-24">
          {degrees.map((degree, index) => {
            const Icon = degree.icon
            return (
              <div key={index} className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <Icon className="text-primary text-xl" />
                  <h2 className="text-primary">{degree.title}</h2>
                </div>
                <p className="text-xl font-semibold mt-2">{degree.degree}</p>
                <p className="text-muted-foreground">{degree.university}</p>
                <div className="flex flex-wrap gap-2 mt-4 items-center text-sm text-muted-foreground">
                  <MdOutlineDateRange />
                  <span>{degree.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {degree.keyCourses.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-4 py-1.5 rounded-full bg-surface/15 text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education