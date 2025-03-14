import { ArrowUpRight, BrainCircuit, BarChartIcon as ChartBar, Clock, FileSearch, UserCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  return (
    <section id="features" className="bg-muted/40 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powerful Features for Modern Recruiters</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every tool you need to streamline your hiring process and find the best talent.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="group-hover:text-primary">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start">
                      <ArrowUpRight className="mr-2 h-4 w-4 text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: FileSearch,
    title: "AI Resume Scanning",
    description: "Automatically extract and analyze candidate information",
    bullets: [
      "Extract skills, experience, and education",
      "Score resumes against job requirements",
      "Reduce manual data entry by 85%",
      "Parse resumes in any format",
    ],
  },
  {
    icon: ChartBar,
    title: "Advanced Analytics",
    description: "Gain valuable insights into your hiring process",
    bullets: [
      "Track metrics like time-to-hire and cost-per-hire",
      "Analyze candidate sourcing effectiveness",
      "Monitor diversity and inclusion metrics",
      "Generate customizable reports",
    ],
  },
  {
    icon: UserCheck,
    title: "Candidate Ranking",
    description: "Identify the best candidates for each position",
    bullets: [
      "Score candidates based on job requirements",
      "Compare candidates side-by-side",
      "Highlight top matches for each position",
      "Eliminate unconscious bias in screening",
    ],
  },
  {
    icon: Clock,
    title: "Streamlined Workflow",
    description: "Optimize your end-to-end recruitment process",
    bullets: [
      "Create custom hiring pipelines",
      "Automate repetitive tasks and notifications",
      "Schedule interviews with calendar integration",
      "Collaborate with hiring managers",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Insights",
    description: "Make data-driven hiring decisions",
    bullets: [
      "Predict candidate success rates",
      "Identify skills gaps in applications",
      "Recommend interview questions",
      "Optimize job descriptions for better matches",
    ],
  },
  {
    icon: ChartBar,
    title: "Comprehensive Reporting",
    description: "Track and optimize your recruiting performance",
    bullets: [
      "Custom dashboards and reporting",
      "Export data for presentations",
      "Monitor team performance metrics",
      "Set and track recruitment goals",
    ],
  },
]

