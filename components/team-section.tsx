"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const team = [
  {
    name: "Ansh Agrawal",
    role: "Founder",
    bio: "Helped a client scale operations by building automations for lead generation and CRM, reducing manual work by 80%.",
    strengths: ["Workflow Automation", "n8n", "CRM Automation", "Lead Generation", "Process Optimization"],
  },
  {
    name: "Faizan",
    role: "Co-Founder | AI Engineer",
    bio: "Worked on full-stack AI products, combining LLMs with scalable backends to ship fast, user-focused solutions across multiple domains.",
    strengths: ["LLMs", "Full-Stack", "AI Product Engineering", "APIs", "Scalable Systems"],
  },
  {
    name: "Dhruv",
    role: "Co-Founder | AI Engineer",
    bio: "Built AI-driven agents and RAG-based systems for enterprise workflows, focusing on reliability, system design, and production-ready deployments.",
    strengths: ["AI Agents", "RAG", "System Design", "Backend Engineering", "Production AI"],
  },
]

export function TeamSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref as any} id="team" className="py-24 bg-muted/30 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three engineers. Deep AI expertise. Startup DNA.
          </p>
        </div>
        
        <div className={`mx-auto mt-16 max-w-5xl transition-all duration-700 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {team.map((member) => (
            <Card 
              key={member.name} 
              className="service-card group relative border border-border/70 bg-secondary/40 transition-all duration-200 ease-out"
              style={{
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              <CardHeader className="space-y-4">
                <div className="relative">
                  <div 
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-200 ease-out group-hover:bg-primary/15"
                    style={{
                      boxShadow: 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div 
                    className="absolute -top-0.5 left-0.5 right-0.5 h-0.5 rounded-t-full opacity-25 transition-opacity duration-200 group-hover:opacity-30"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)',
                    }}
                  />
                </div>
                <div>
                  <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{member.name}</CardTitle>
                  <CardDescription className="mt-1 text-primary">{member.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground/90">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.strengths.map((strength) => (
                    <span 
                      key={strength}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
