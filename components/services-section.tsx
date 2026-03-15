"use client"

import { Rocket, Wrench, GraduationCap, LifeBuoy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  {
    icon: Rocket,
    title: "Full Build",
    description: "We design, build, and deploy your AI system end-to-end. You get a production-ready product with documentation and training.",
    features: ["Architecture design", "Development", "Deployment", "Documentation"],
  },
  {
    icon: Wrench,
    title: "Integration Sprint",
    description: "Already have a codebase? We integrate AI capabilities into your existing product in a focused 2-4 week sprint.",
    features: ["API integration", "Prompt engineering", "Testing", "Handoff"],
  },
  {
    icon: GraduationCap,
    title: "Technical Advisory",
    description: "Get expert guidance on AI strategy, architecture decisions, and best practices. Perfect for teams building in-house.",
    features: ["Architecture review", "Technical roadmap", "Vendor selection", "Team training"],
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description: "We maintain and improve your AI systems over time. Monitoring, optimization, and feature updates on retainer.",
    features: ["24/7 monitoring", "Performance tuning", "Feature updates", "Priority support"],
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref as any} id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Expertise Can Help
          </h2>
          <p className="mt-4 text-lg text-pretty text-muted-foreground">
            We deliver production-ready AI systems that solve real business challenges without the prototyping pitfalls.
          </p>
        </div>
        
        <div className={`mx-auto mt-16 max-w-5xl transition-all duration-700 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="service-card group relative border border-border/70 bg-secondary/40 transition-all duration-200 ease-out"
              style={{
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              <CardHeader className="space-y-5">
                <div className="relative">
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-200 ease-out group-hover:bg-primary/15"
                    style={{
                      boxShadow: 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <service.icon 
                      className="diagram-extrusion h-6 w-6 text-primary transition-all duration-200 ease-out group-hover:scale-[1.05] group-hover:opacity-100" 
                    />
                  </div>
                  {/* Subtle highlight on top edge for depth */}
                  <div 
                    className="absolute -top-0.5 left-0.5 right-0.5 h-0.5 rounded-t-lg opacity-25 transition-opacity duration-200 group-hover:opacity-30"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)',
                    }}
                  />
                </div>
                <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[0.9375rem] leading-relaxed text-muted-foreground/90">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
