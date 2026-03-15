"use client"

import { useRef, useState, useEffect } from "react"
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
import { Play, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    title: "Eureka AI — Natural Language Interface for Proprietary Software",
    client: "B2B DeepTech SaaS",
    description: "Built a domain-expert AI agent that acts as a universal translator for complex, undocumented software APIs. Users describe what they want in natural language (or diagrams), and the system generates logically correct, production-ready simulation code in seconds by grounding LLMs in reverse-engineered API knowledge using RAG—eliminating the need to learn proprietary tools.",
    tags: ["GPT-4 / OpenAI API", "RAG", "Vector Search", "JavaScript", "Reverse-Engineering"],
    demoUrl: "https://www.youtube.com/embed/2ojJIMkpo5w",
    videoId: "2ojJIMkpo5w",
  },
  {
    title: "Gloommy — AI Visual Generation",
    client: "AI Creative Tools / B2C SaaS",
    description: "Built a \"Pinterest for AI\" that makes generating unique, high-quality images effortless. Instead of struggling with complex text prompts, users can simply select reference images from their personal inspiration boards. The AI then seamlessly blends the style, objects, and composition they like to create exactly what they imagined—making advanced image creation accessible to anyone.",
    tags: ["Google Gemini 2.5", "AI Image Generation", "React", "FastAPI"],
    demoUrl: "https://www.youtube.com/embed/CYQfKWqc_8E",
    videoId: "CYQfKWqc_8E",
  },
  {
    title: "SecOps Ally – AI SecOps Assistant",
    client: "Security Operations",
    description: "Built an AI-driven SecOps assistant that processes user inputs, recognizes intent, and automates the Direct Internet Access (DIA) issue workflow, interacting via a Webex Bot and integrating with ServiceNow to provide real-time insights and faster incident resolution.",
    tags: ["Cisco", "AI Automation", "Python", "AWS Bedrock", "ServiceNow"],
  },
  {
    title: "Automation Workflow System (n8n)",
    client: "Product Automation / Workflow Optimization",
    description: "Built an end-to-end automation system using n8n to streamline lead generation, data enrichment, and CRM operations for a client. The workflows automated Apollo-based prospecting, CRM updates, and outreach tracking with defined success metrics, reducing manual effort by up to 80% and enabling scalable, repeatable operations.",
    tags: ["n8n", "Workflow Automation", "CRM Integration", "Lead Generation", "Process Optimization"],
    demoUrl: "https://www.youtube.com/embed/Hoqc2p2X72I",
    videoId: "Hoqc2p2X72I",
  },
  {
    title: "Template Builder",
    client: "Enterprise Automation / FinServ",
    description: "Built an intelligent document processing system on the LayIE-LLM framework. It drastically reduces complex template setup from hours to minutes using AI for context-aware classification and layout-aware extraction, fully preserving enterprise formatting.",
    tags: ["Python", "Flask", "Gemini / GPT-4", "Databricks", "LLM Extraction"],
    demoUrl: "https://www.youtube.com/embed/gVARgdjLE8A",
    videoId: "gVARgdjLE8A",
    projectUrl: "https://templatebuilder-oifmd02ct-dhruvs-projects-9d7a0b82.vercel.app/",
  },
  {
    title: "AI Interviewer Platform",
    client: "HR Tech / Recruitment Automation",
    description: "Built a cloud-native, voice-capable AI interviewer using the Gemini Live API. The platform conducts adaptive technical interviews, evaluates real-time coding challenges, and produces structured, rubric-based performance assessments to seamlessly scale recruitment pipelines.",
    tags: ["Gemini Live", "Voice Agents", "LangGraph", "Python", "LLM Evaluation"],
  },
  {
    title: "AI Voice Sales Agent",
    client: "Outbound / Inbound Sales",
    description: "Built an intelligent voice agent that fully automates outbound and inbound sales calls. Integrated with a dashboard to initiate targeted campaigns, the agent deeply personalizes conversations based on customer persona, past interactions, and preferences to drive higher conversion rates.",
    tags: ["ElevenLabs", "Exotel", "FastAPI", "Python", "Gemini AI"],
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const startXRef = useRef(0)
  const xPosRef = useRef(0)
  const dragStartPos = useRef(0)
  
  useEffect(() => {
    let animationId: number
    
    const animate = () => {
      if (!isDragging && !isHovered) {
        xPosRef.current -= 0.5 
      }
      
      if (innerRef.current) {
        // We know we rendered exactly two identical blocks.
        // The scrollWidth of the entire container is double the width of one block.
        const halfWidth = innerRef.current.scrollWidth / 2
        
        // When we have scrolled left by exactly one block's width, reset to 0.
        // It's a continuous moving track, so resetting right as the second block 
        // reaches the exact position of the first block makes it perfectly seamless.
        if (xPosRef.current <= -halfWidth) {
           xPosRef.current += halfWidth
        } else if (xPosRef.current > 0) {
           xPosRef.current -= halfWidth
        }
        
        innerRef.current.style.transform = `translateX(${xPosRef.current}px)`
      }
      
      animationId = requestAnimationFrame(animate)
    }
    
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isDragging, isHovered])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    startXRef.current = e.pageX - xPosRef.current
    dragStartPos.current = e.pageX
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX
    xPosRef.current = x - startXRef.current
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    startXRef.current = e.touches[0].pageX - xPosRef.current
    dragStartPos.current = e.touches[0].pageX
  }
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX
    xPosRef.current = x - startXRef.current
  }

  const handleDragClickCapture = (e: React.MouseEvent) => {
    const diff = Math.abs(e.pageX - dragStartPos.current)
    if (diff > 5) {
      e.stopPropagation()
      e.preventDefault()
    }
  }

  return (
    <section ref={ref as any} id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-pretty text-muted-foreground">
            Real AI systems we have built for real startups. Names anonymized to protect the innocent.
          </p>
        </div>

        <div 
          ref={containerRef}
          className={`relative mt-16 w-full overflow-hidden py-10 transition-all duration-700 delay-200 ease-out ${isDragging ? "cursor-grabbing" : "cursor-grab"} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={() => {
            handleMouseUpOrLeave()
            setIsHovered(false)
          }}
          onMouseEnter={() => setIsHovered(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUpOrLeave}
          onClickCapture={handleDragClickCapture}
        >
          <div 
            ref={innerRef}
            className="flex w-max will-change-transform"
          >
            {/* First set of projects */}
            <div className="flex gap-6 pr-6 pl-4">
              {projects.map((project, index) => (
                <Card
                  key={`${project.title}-1`}
                  className={`service-card group relative flex shrink-0 flex-col border border-border/70 bg-secondary/40 transition-all duration-300 ease-out hover:border-primary/30 ${project.demoUrl ? 'w-[85vw] sm:w-[600px]' : 'w-[85vw] sm:w-[450px]'}`}
                  style={{
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="text-sm font-medium text-primary">{project.client}</div>
                        <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{project.title}</CardTitle>
                      </div>
                      {(project as any).projectUrl && (
                        <a 
                          href={(project as any).projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex shrink-0 items-center justify-center rounded-full bg-secondary p-2 text-muted-foreground transition-all duration-300 hover:bg-primary/20 hover:text-primary z-10"
                          title="Visit Live Project"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <CardDescription className="text-[0.9375rem] text-pretty leading-relaxed text-muted-foreground/90">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="bg-secondary text-secondary-foreground transition-all duration-300 hover:scale-105 hover:bg-secondary/80"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {(project.demoUrl || (project as any).projectUrl) && (
                    <div className="mt-auto flex flex-col gap-3 p-6 pt-0">
                      {project.demoUrl && (
                        <Dialog>
                        <DialogTrigger asChild>
                          <button className="group/btn relative w-full overflow-hidden rounded-lg border border-border/50 bg-muted/50 transition-all duration-300 hover:border-primary/50 text-left">
                            <div className="relative aspect-video w-full overflow-hidden">
                              {project.videoId ? (
                                <Image 
                                  src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                                  alt={`${project.title} Video Thumbnail`}
                                  fill
                                  className="object-cover transition-transform duration-500 ease-out group-hover/btn:scale-105 pointer-events-none"
                                  sizes="(max-width: 768px) 100vw, 600px"
                                  draggable={false}
                                />
                              ) : (
                                <div className="absolute inset-0 bg-secondary/50 pointer-events-none" />
                              )}
                              <div className="absolute inset-0 flex items-center justify-center bg-background/20 transition-colors duration-300 group-hover/btn:bg-background/10 pointer-events-none">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-sm backdrop-blur-sm transition-transform duration-300 ease-out group-hover/btn:scale-110">
                                  <Play className="h-5 w-5 text-foreground transition-colors duration-300 group-hover/btn:text-primary ml-1" />
                                </div>
                              </div>
                            </div>
                            <div className="flex w-full items-center justify-between border-t border-border/50 bg-background/50 p-4 backdrop-blur-sm">
                              <span className="text-sm font-medium text-foreground">Watch Demo</span>
                              <span className="text-xs text-muted-foreground">YouTube Video</span>
                            </div>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[800px]">
                          <DialogHeader>
                            <DialogTitle>{project.title} Demo</DialogTitle>
                          </DialogHeader>
                          <div className="aspect-video w-full overflow-hidden rounded-lg mt-4">
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
                      )}
                      {(project as any).projectUrl && (
                        <a 
                          href={(project as any).projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary text-primary-foreground px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-primary/90 shadow-sm"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4" /> Try Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </Card>
              ))}
            </div>
            
            {/* Duplicated set for seamless loop */}
            <div className="flex gap-6 pr-6 pl-4">
              {projects.map((project, index) => (
                <Card
                  key={`${project.title}-2`}
                  className={`service-card group relative flex shrink-0 flex-col border border-border/70 bg-secondary/40 transition-all duration-300 ease-out hover:border-primary/30 ${project.demoUrl ? 'w-[85vw] sm:w-[600px]' : 'w-[85vw] sm:w-[450px]'}`}
                  style={{
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="text-sm font-medium text-primary">{project.client}</div>
                        <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{project.title}</CardTitle>
                      </div>
                      {(project as any).projectUrl && (
                        <a 
                          href={(project as any).projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex shrink-0 items-center justify-center rounded-full bg-secondary p-2 text-muted-foreground transition-all duration-300 hover:bg-primary/20 hover:text-primary z-10"
                          title="Visit Live Project"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <CardDescription className="text-[0.9375rem] text-pretty leading-relaxed text-muted-foreground/90">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="bg-secondary text-secondary-foreground transition-all duration-300 hover:scale-105 hover:bg-secondary/80"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {(project.demoUrl || (project as any).projectUrl) && (
                    <div className="mt-auto flex flex-col gap-3 p-6 pt-0">
                      {project.demoUrl && (
                        <Dialog>
                        <DialogTrigger asChild>
                          <button className="group/btn relative w-full overflow-hidden rounded-lg border border-border/50 bg-muted/50 transition-all duration-300 hover:border-primary/50 text-left">
                            <div className="relative aspect-video w-full overflow-hidden">
                              {project.videoId ? (
                                <Image 
                                  src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                                  alt={`${project.title} Video Thumbnail`}
                                  fill
                                  className="object-cover transition-transform duration-500 ease-out group-hover/btn:scale-105 pointer-events-none"
                                  sizes="(max-width: 768px) 100vw, 600px"
                                  draggable={false}
                                />
                              ) : (
                                <div className="absolute inset-0 bg-secondary/50 pointer-events-none" />
                              )}
                              <div className="absolute inset-0 flex items-center justify-center bg-background/20 transition-colors duration-300 group-hover/btn:bg-background/10 pointer-events-none">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-sm backdrop-blur-sm transition-transform duration-300 ease-out group-hover/btn:scale-110">
                                  <Play className="h-5 w-5 text-foreground transition-colors duration-300 group-hover/btn:text-primary ml-1" />
                                </div>
                              </div>
                            </div>
                            <div className="flex w-full items-center justify-between border-t border-border/50 bg-background/50 p-4 backdrop-blur-sm">
                              <span className="text-sm font-medium text-foreground">Watch Demo</span>
                              <span className="text-xs text-muted-foreground">YouTube Video</span>
                            </div>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[800px]">
                          <DialogHeader>
                            <DialogTitle>{project.title} Demo</DialogTitle>
                          </DialogHeader>
                          <div className="aspect-video w-full overflow-hidden rounded-lg mt-4">
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
                      )}
                      {(project as any).projectUrl && (
                        <a 
                          href={(project as any).projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary text-primary-foreground px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-primary/90 shadow-sm"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4" /> Try Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
