import { FaCode } from 'react-icons/fa'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import Button from '@/components/ui/Button'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
]

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'} border-none outline-none z-50`}>
      <nav className='container flex justify-between items-center mx-auto px-6'>
        <a href='#' className='flex items-center gap-1 text-xl font-bold tracking-tight hover:text-primary'>
          <FaCode className='text-primary' /> Ben
        </a>
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className='px-4 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-surface/15 transition-all duration-300'>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className='hidden md:block'>
          <a href="#contact">
            <Button size={'sm'}>Say Hello</Button>
          </a>
        </div>
        <button onClick={() => setIsMobileMenuOpen(prev => !prev)} className='md:hidden p-2 text-foreground cursor-pointer'>
          {isMobileMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className='md:hidden glass-strong animate-fade-in'>
          <div className='container mx-auto p-6 flex flex-col gap-4'>
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-lg text-muted-foreground hover:text-foreground py-2'
              >
                {label}
              </a>
            ))}
            <a href="#contact">
              <Button onClick={() => setIsMobileMenuOpen(false)} size='default'>Say Hello</Button>
            </a>
          </div>

        </div>
      )}
    </header>
  )
}

export default Header