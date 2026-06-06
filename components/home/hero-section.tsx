'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const servicesHighlights = [
  'Logo Design',
  'Branding',
  'Print Design',
  'Social Media',
  'Web Design',
  'Marketing'
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-showcase.jpg"
            alt="JTH Graphix studio"
            fill
            className="object-cover opacity-8 dark:opacity-10"
            priority
          />
        </div>
        
        {/* Gradient Orbs - Refined */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 mb-8"
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-primary">Award-Winning Creative Studio</span>
          </motion.div>

          {/* Premium Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-foreground mb-6 text-balance leading-[1.1]">
              Design That<br />
              <span className="text-primary">Moves Business</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            Bold. Clean. Impactful. We craft premium visual solutions for brands and businesses that want to stand out in a crowded world.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 gap-2"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:border-primary hover:bg-primary/5 font-semibold gap-2"
            >
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Services Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {servicesHighlights.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:border-primary/40 transition-colors cursor-default"
              >
                {service}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => {
          window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' })
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hover:opacity-70 transition-opacity"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Scroll</span>
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.button>

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
