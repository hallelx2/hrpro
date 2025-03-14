import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  ArrowUpRight,
  BookmarkCheck,
  BriefcaseIcon,
  Building,
  Calendar,
  Check,
  Clock,
  Globe,
  MapPin,
  Share2,
} from "lucide-react"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the job data based on the ID
  const job = {
    id: params.id,
    title: "Senior Frontend Developer",
    company: "TechGlobe Inc.",
    companyLogo: "/placeholder.svg?height=50&width=50",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $150K",
    description:
      "We're looking for a Senior Frontend Developer with expertise in React, TypeScript, and modern frontend frameworks to join our growing team. You'll be responsible for building and maintaining high-quality web applications, collaborating with cross-functional teams, and mentoring junior developers.",
    responsibilities: [
      "Design, develop, and maintain responsive web applications using React and TypeScript",
      "Collaborate with UX designers to implement intuitive user interfaces",
      "Write clean, efficient, and maintainable code following best practices",
      "Optimize application performance and ensure cross-browser compatibility",
      "Participate in code reviews and provide constructive feedback",
      "Mentor junior developers and contribute to technical documentation",
      "Stay up-to-date with emerging trends and technologies in frontend development",
    ],
    requirements: [
      "5+ years of experience with JavaScript and modern frameworks",
      "Strong proficiency with React and TypeScript",
      "Experience with state management libraries (Redux, MobX, etc.)",
      "Knowledge of responsive design and cross-browser compatibility",
      "Familiarity with testing frameworks (Jest, React Testing Library)",
      "Understanding of CI/CD pipelines and version control systems",
      "Excellent problem-solving and communication skills",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work schedule and remote work options",
      "Professional development budget",
      "401(k) matching",
      "Generous paid time off",
      "Wellness programs and gym membership",
    ],
    postedDate: "May 20, 2023",
    matchPercentage: 92,
    isSaved: false,
    isRemote: true,
    experience: "5+ years",
    department: "Engineering",
    companySize: "501-1000 employees",
    industry: "Software Development",
    companyDescription:
      "TechGlobe Inc. is a leading technology company specializing in cloud-based solutions for enterprise clients. With offices in San Francisco, New York, and London, we serve clients worldwide with innovative software products that streamline business operations.",
    companyWebsite: "https://techglobe-example.com",
    companyFounded: "2010",
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/candidate/jobs">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Job Details</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-2xl">{job.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Building className="mr-1 h-4 w-4" />
                    {job.company}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" />
                      {job.location}
                    </Badge>
                    <Badge variant="outline" className="flex items-center">
                      <BriefcaseIcon className="mr-1 h-3 w-3" />
                      {job.type}
                    </Badge>
                    <Badge variant="outline" className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {job.experience}
                    </Badge>
                    <Badge variant="outline" className="flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      {job.salary}
                    </Badge>
                    {job.isRemote && (
                      <Badge variant="outline" className="flex items-center">
                        <Globe className="mr-1 h-3 w-3" />
                        Remote
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <BookmarkCheck className="h-4 w-4" />
                      <span className="sr-only">Save</span>
                    </Button>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {job.matchPercentage}% Match
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Job Description</h3>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Benefits</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {job.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <span>Posted on {job.postedDate}</span>
              </div>
              <Button asChild>
                <Link href={`/candidate/jobs/${job.id}/apply`}>Apply Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Jobs</CardTitle>
              <CardDescription>Other jobs you might be interested in</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="flex justify-between items-start border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-medium">
                        {id === 1 ? "Frontend Developer" : id === 2 ? "React Developer" : "UI Engineer"}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {id === 1 ? "Digital Solutions LLC" : id === 2 ? "Tech Startups Ltd." : "Innovate Inc."}
                      </p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {id === 1 ? "Seattle, WA" : id === 2 ? "Remote" : "San Francisco, CA"}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {id === 1 ? "$90K - $120K" : id === 2 ? "$100K - $130K" : "$110K - $140K"}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/candidate/jobs/${id + 10}`}>View</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Application</CardTitle>
              <CardDescription>Ready to apply?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Your profile matches this job</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Resume is up to date</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Skills match requirements</span>
              </div>
              <Separator />
              <div className="text-sm text-muted-foreground">
                <p>Applying takes just a few minutes</p>
                <p className="mt-1">You can review before submitting</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href={`/candidate/jobs/${job.id}/apply`}>Apply Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About {job.company}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center">
                  <img
                    src={job.companyLogo || "/placeholder.svg"}
                    alt={job.company}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{job.company}</h3>
                  <p className="text-sm text-muted-foreground">{job.industry}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Founded</span>
                  <span>{job.companyFounded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Company size</span>
                  <span>{job.companySize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Industry</span>
                  <span>{job.industry}</span>
                </div>
              </div>

              <Separator />

              <p className="text-sm">{job.companyDescription}</p>

              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={job.companyWebsite} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Visit Website
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Job Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Skills Match</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <p className="text-xs text-muted-foreground">Your skills match 85% of the job requirements</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Experience Match</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <span className="text-sm font-medium">90%</span>
                </div>
                <p className="text-xs text-muted-foreground">Your experience matches 90% of what they're looking for</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Competition</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <p className="text-xs text-muted-foreground">38 people have applied to this job</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

