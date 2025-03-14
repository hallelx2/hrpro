import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Stats() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Transform Your Hiring Metrics</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Companies using JobHub see dramatic improvements in their recruitment process.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="overflow-hidden border-none bg-gradient-to-br from-primary/5 via-primary/5 to-transparent shadow-md"
            >
              <CardHeader className="pb-2">
                <CardDescription>{stat.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                <p className="text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  {
    title: "Time-to-hire Reduction",
    value: "40%",
    description: "Average reduction in hiring time",
  },
  {
    title: "Screening Efficiency",
    value: "85%",
    description: "Less time spent on resume screening",
  },
  {
    title: "Candidate Quality",
    value: "3.2×",
    description: "More qualified candidates per position",
  },
  {
    title: "Cost Savings",
    value: "32%",
    description: "Average reduction in cost-per-hire",
  },
]

