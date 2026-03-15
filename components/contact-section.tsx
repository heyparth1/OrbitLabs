import { ArrowRight, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Build Something Real?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No pitch decks. No endless discovery calls. Just a straightforward conversation about 
            what you are building and how we can help.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="mailto:reach.orbitallabs@gmail.com" className="gap-2">
                <Mail className="h-4 w-4" />
                reach.orbitallabs@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#" className="gap-2">
                <Calendar className="h-4 w-4" />
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div 
            className="service-card group relative mt-12 rounded-xl border border-border/70 bg-secondary/40 p-6 transition-all duration-200 ease-out"
            style={{
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
            }}
          >
            <p className="text-[0.9375rem] leading-relaxed text-muted-foreground/90">
              <span className="font-semibold text-foreground">What to expect:</span> A 30-minute call where we 
              listen to your problem, ask questions, and give you honest feedback—even if that means 
              telling you that you do not need us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
