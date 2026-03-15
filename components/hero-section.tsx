import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32">

      <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(65%_45%_at_50%_30%,rgba(99,102,241,0.22),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_30%_at_70%_20%,rgba(168,85,247,0.18),transparent_75%)]" />
      </div>


      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div 
            className="mb-8 inline-flex cursor-default items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/20 animate-fade-in-up"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span>AI Engineering for Startups</span>
          </div>
          
          <h1 
            className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl animate-fade-in-up"
            style={{ animationDelay: '150ms' }}
          >
            We Build AI Agents That{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Actually Work
            </span>
          </h1>
          
          <p 
            className="mt-6 text-pretty text-lg leading-relaxed text-white/70 sm:text-xl animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            We build production-ready AI agents that eliminate friction from your workflows.
          </p>
          
          <div 
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up"
            style={{ animationDelay: '450ms' }}
          >
            <Button size="lg" className="group rounded-full" asChild>
              <a href="#contact" className="inline-flex items-center gap-2">
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm" asChild>
              <a href="#projects">See Our Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
