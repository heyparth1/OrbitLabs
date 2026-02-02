import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Play } from "lucide-react"

const projects = [
  {
    title: "Eureka AI — Natural Language Interface for Proprietary Software",
    client: "B2B DeepTech SaaS",
    description: "Built a domain-expert AI agent that acts as a universal translator for complex, undocumented software APIs. Users describe what they want in natural language (or diagrams), and the system generates logically correct, production-ready simulation code in seconds by grounding LLMs in reverse-engineered API knowledge using RAG—eliminating the need to learn proprietary tools.",
    tags: ["GPT-4 / OpenAI API", "RAG", "Vector Search", "JavaScript", "Reverse-Engineering"],
    demoUrl: "https://www.youtube.com/embed/2ojJIMkpo5w",
  },
  {
    title: "Gloommy — Cross-Modal RAG for Visual Generation",
    client: "AI Creative Tools / B2C SaaS",
    description: "Built a full-stack implementation of Cross-Modal RAG that acts like a “Pinterest for AI,” grounding image generation in a user’s personal inspiration library. The system decomposes complex prompts into sub-dimensions (style, object, composition) and retrieves a Pareto-optimal set of visual assets to guide generation—bridging the gap between retrieval and controllable multimodal generation.",
    tags: ["Google Gemini 2.5", "Cross-Modal RAG", "CLIP + Adapter", "Pareto Retrieval", "FastAPI", "React"],
    demoUrl: "https://www.youtube.com/embed/CYQfKWqc_8E",
  },
  {
    title: "Customer Support Agent",
    client: "E-commerce Platform",
    description: "Deployed an AI agent that handles 80% of support tickets autonomously, escalating complex issues to humans with full context.",
    tags: ["OpenAI", "Fine-tuning", "Redis", "Next.js"],
    demoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Code Review Bot",
    client: "Developer Tools Startup",
    description: "Built a GitHub-integrated agent that reviews PRs, suggests improvements, and catches bugs before they hit production.",
    tags: ["GPT-4", "GitHub API", "TypeScript", "Webhooks"],
    demoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real AI systems we have built for real startups. Names anonymized to protect the innocent.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="service-card group relative border border-border/70 bg-secondary/40 transition-all duration-200 ease-out"
              style={{
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              <CardHeader className="space-y-3">
                <div className="text-sm font-medium text-primary">{project.client}</div>
                <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[0.9375rem] leading-relaxed text-muted-foreground/90">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full gap-2">
                      <Play className="h-4 w-4" />
                      Watch Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px]">
                    <DialogHeader>
                      <DialogTitle>{project.title} Demo</DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <iframe
                        className="h-full w-full"
                        src={project.demoUrl}
                        title={`${project.title} Demo`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
