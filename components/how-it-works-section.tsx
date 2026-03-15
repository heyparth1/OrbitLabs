"use client"

import { Phone, FileText, Code, Rocket, ClipboardCheck, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description: "We analyze your workflows to identify high-value opportunities where AI can eliminate friction. We define clear success metrics.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Architecture & Proof of Concept",
    description: "We build a focused prototype to validate our approach with real data, proving feasibility before deep investment.",
    icon: Code,
  },
  {
    number: "03",
    title: "Production Engineering",
    description: "We harden the system. This means robust error handling, monitoring, fallback models, and seamless integration.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Handoff & Support",
    description: "We deploy the agent into your infrastructure, provide full documentation, and offer ongoing support to ensure it scales.",
    icon: Rocket,
  },
]

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref as any} id="process" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-pretty text-muted-foreground">
            A fast, structured process designed to get your AI features into production quickly and reliably.
          </p>
        </div>
        
        <div className={`mx-auto mt-16 max-w-4xl transition-all duration-700 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <Card 
                key={step.number}
                className="service-card group relative border border-border/70 bg-secondary/40 transition-all duration-200 ease-out"
                style={{
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
                }}
              >
                <CardHeader className="space-y-5">
                  <div className="relative flex items-center gap-4">
                    <div className="relative">
                      <div 
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-200 ease-out group-hover:bg-primary/15"
                        style={{
                          boxShadow: 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        <step.icon 
                          className="diagram-extrusion h-6 w-6 text-primary transition-all duration-200 ease-out group-hover:scale-[1.05] group-hover:opacity-100" 
                        />
                      </div>
                    </div>
                    <span className="font-mono text-2xl font-bold text-primary/30">
                      {step.number}
                    </span>
                  </div>
                  <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[0.9375rem] leading-relaxed text-muted-foreground/90">
                    {step.description}
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
