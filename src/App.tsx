import Bokeh from "@/components/ui/bokeh"
import Header from "@/layout/Header"
import Hero from "@/sections/hero/Hero"
import About from "@/sections/About"
import Skills from "@/sections/Skills"
import Education from "@/sections/Education"
import Experience from "@/sections/Experience"
import Contact from "@/sections/Contact"
import Projects from "@/sections/Projects"
import Footer from "@/layout/Footer"

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Bokeh />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App