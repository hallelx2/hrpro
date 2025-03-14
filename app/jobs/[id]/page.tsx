import { ArrowLeft, Share2, MapPin, Briefcase, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { JobApplicationForm } from "@/components/job-application-form"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const jobId = params.id

  // Mock job data (replace with actual data fetching)
  const job = {
    id: jobId,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150,000 - $180,000",
    postedDate: "2023-01-01",
    closingDate: "2023-02-01",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Redux"],
    summary:
      "We are looking for an experienced Frontend Developer to join our engineering team and help us build amazing user experiences. The ideal candidate is passionate about creating intuitive interfaces, has a strong understanding of modern frontend technologies, and thrives in a collaborative environment.",
    description:
      "As a Senior Frontend Developer, you will be responsible for implementing visual elements that users see and interact with in our web applications. You'll work closely with our design and backend teams to build seamless user experiences.",
    responsibilities: [
      "Develop and maintain responsive web applications using React and TypeScript",
      "Collaborate with designers to implement UI/UX improvements",
      "Write clean, efficient, and reusable code",
      "Optimize applications for maximum speed and scalability",
      "Implement state management using Redux or similar libraries",
      "Ensure cross-browser compatibility and responsive design",
      "Participate in code reviews and mentor junior developers",
      "Stay up-to-date with emerging trends and technologies",
    ],
    requirements: [
      "5+ years of experience with modern JavaScript frameworks, particularly React",
      "Strong proficiency in TypeScript, HTML5, and CSS3",
      "Experience with state management libraries (Redux, MobX, etc.)",
      "Understanding of RESTful APIs and asynchronous request handling",
      "Knowledge of responsive design principles and cross-browser compatibility",
      "Familiarity with testing frameworks (Jest, React Testing Library)",
      "Experience with version control systems (Git)",
      "Bachelor's degree in Computer Science or related field (or equivalent experience)",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work hours and remote work options",
      "Professional development budget",
      "Home office stipend",
      "401(k) matching",
      "Generous paid time off",
      "Regular team events and retreats",
    ],
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="icon" asChild>
          <Link href="/jobs">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Job Details</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{job.title}</CardTitle>
                  <CardDescription className="text-lg">{job.department}</CardDescription>
                </div>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Posted: {job.postedDate}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Job Summary</h3>
                <p>{job.summary}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Job Description</h3>
                <p>{job.description}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside space-y-1">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Requirements</h3>
                <ul className="list-disc list-inside space-y-1">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Benefits</h3>
                <ul className="list-disc list-inside space-y-1">
                  {job.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full md:w-auto">
                <a href="#apply">Apply Now</a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Department:</div>
                <div>{job.department}</div>
                <div className="font-medium">Location:</div>
                <div>{job.location}</div>
                <div className="font-medium">Job Type:</div>
                <div>{job.type}</div>
                <div className="font-medium">Salary Range:</div>
                <div>{job.salary}</div>
                <div className="font-medium">Posted Date:</div>
                <div>{job.postedDate}</div>
                <div className="font-medium">Closing Date:</div>
                <div>{job.closingDate}</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="#apply">Apply Now</a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                We are a leading technology company focused on creating innovative solutions that transform how
                businesses operate. Our team is passionate about building products that make a difference.
              </p>
              <div className="flex justify-center">
                <img src="/placeholder.svg?height=100&width=200" alt="Company Logo" className="h-20 object-contain" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More About Us
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div id="apply" className="mt-12 pt-6 border-t">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Apply for this Position</h2>
        <JobApplicationForm jobId={job.id} jobTitle={job.title} />
      </div>
    </div>
  )
}

