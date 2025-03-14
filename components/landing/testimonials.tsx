import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Hiring Teams Everywhere</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear what our customers have to say about transforming their recruitment process.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader className="pb-2">
                <Quote className="h-6 w-6 text-primary" />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <CardDescription>
                      {testimonial.title}, {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "JobHub's AI resume scanning has cut our screening time by 70%. We're able to find qualified candidates much faster, and the analytics help us make better hiring decisions.",
    name: "Alexandra Chen",
    title: "Head of Talent Acquisition",
    company: "TechGlobe Inc.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "The candidate ranking feature is a game-changer. It helps us objectively evaluate applicants and ensures we're focusing on the most promising candidates first.",
    name: "Marcus Johnson",
    title: "HR Director",
    company: "Innovate Solutions",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "Since implementing JobHub, our cost-per-hire has decreased by 35% and our quality of hires has significantly improved. The ROI has been phenomenal.",
    name: "Sarah Williams",
    title: "Recruitment Manager",
    company: "Global Enterprises",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

