'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-smooth',
        isScrolled
          ? 'bg-white/95 dark:bg-card/95 backdrop-blur-lg border-b border-border shadow-lg shadow-primary/5'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Premium */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 lg:w-11 lg:h-11 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="JTH Graphix Production"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-base lg:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                JTH Graphix
              </div>
              <div className="text-xs lg:text-sm text-muted-foreground font-medium">
                Production
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Premium Style */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-smooth relative group',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground'
                )}
              >
                {link.label}
                {pathname !== link.href && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button 
              asChild 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Start a Project
              </Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Premium */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 dark:bg-card/95 backdrop-blur-lg border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block px-4 py-3 text-base font-medium rounded-lg transition-colors',
                    pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-border">
                <Button asChild className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-medium shadow-lg shadow-primary/20">
                  <Link href="/contact">
                    Start a Project
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
