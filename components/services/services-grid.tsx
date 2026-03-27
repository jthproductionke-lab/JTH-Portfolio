'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FileImage, Image, Palette, Sparkles, Share2, CreditCard, BookOpen, Printer, Globe, Flag, Calendar, Building2 } from 'lucide-react'
import services from '@/data/services.json'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileImage,
  Image,
  Palette,
  Sparkles,
  Share2,
  CreditCard,
  BookOpen,
  Printer,
  Globe,
  Flag,
  Calendar,
  Building2,
}

const categoryColors: Record<string, string> = {
  'Print': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'Digital': 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  'Branding': 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
}

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
            All Services
          </span>
          {['Print', 'Digital', 'Branding'].map((category) => (
            <span
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors[category]} cursor-pointer hover:opacity-80 transition-opacity`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || FileImage
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    {/* Gold accent line */}
                    <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    {/* Category Badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[service.category]}`}>
                      {service.category}
                    </span>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Features Preview */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Arrow */}
                    <div className="flex items-center text-primary text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
