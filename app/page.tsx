import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProjectsSection } from "@/components/projects-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ProblemsSection />
      <HowItWorksSection />
      <UseCasesSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
