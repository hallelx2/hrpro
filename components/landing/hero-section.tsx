import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background via-primary/5 opacity-50" />

      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge className="mb-4" variant="outline">
            AI-Powered Recruitment Solution
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Transform Your</span>
            <span className="block text-primary">Hiring Process</span>
          </h1>

          <p className="mt-6 max-w-lg text-xl text-muted-foreground sm:text-2xl">
            Streamline recruitment, analyze resumes with AI, and find the perfect candidates faster than ever before.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/dashboard">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#features">Learn More</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <p className="text-sm font-medium text-muted-foreground">Trusted by industry leaders:</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {["Acme Inc", "Globex", "Stark Industries", "Umbrella Corp"].map((company) => (
                <p key={company} className="text-lg font-semibold tracking-tight">
                  {company}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

