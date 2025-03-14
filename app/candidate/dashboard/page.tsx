import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, BriefcaseIcon, ChevronRight, FileUp, Search, Zap } from "lucide-react"

export default function CandidateDashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Candidate Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href="/candidate/jobs">Browse Jobs</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
            <FileUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <Progress value={75} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Complete your profile to improve job matches</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/candidate/profile">Complete Profile</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
            <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-2">4 applications in review, 8 pending</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/candidate/applications">View Applications</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Matches</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground mt-2">New jobs matching your profile</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/candidate/jobs">View Matches</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="matches" className="space-y-4">
        <TabsList>
          <TabsTrigger value="matches">Recommended Jobs</TabsTrigger>
          <TabsTrigger value="applications">Recent Applications</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="matches" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {recommendedJobs.map((job) => (
              <Card key={job.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                    <Badge>{job.matchPercentage}% Match</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="line-clamp-2 text-sm text-muted-foreground">{job.description}</p>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 pb-2">
                  <Button variant="default" className="w-full" asChild>
                    <Link href={`/candidate/jobs/${job.id}`}>
                      View Job <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/candidate/jobs">View all recommended jobs</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Track the status of your job applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div
                    key={application.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium">{application.position}</div>
                      <div className="text-sm text-muted-foreground">{application.company}</div>
                      <div className="text-xs text-muted-foreground">Applied on {application.appliedDate}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          application.status === "In Review"
                            ? "default"
                            : application.status === "Pending"
                              ? "outline"
                              : application.status === "Interviewed"
                                ? "secondary"
                                : "destructive"
                        }
                      >
                        {application.status}
                      </Badge>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/candidate/applications/${application.id}`}>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/candidate/applications">View all applications</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent actions and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                    <div className={`rounded-full p-2 ${getActivityIconBackground(activity.type)}`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div>
                      <div dangerouslySetInnerHTML={{ __html: activity.message }} />
                      <div className="text-xs text-muted-foreground mt-1">{activity.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resume Performance</CardTitle>
            <CardDescription>How recruiters are viewing your resume</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Resume views</div>
                <div className="text-sm">28</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Profile clicks</div>
                <div className="text-sm">42</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Search appearances</div>
                <div className="text-sm">125</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Download count</div>
                <div className="text-sm">5</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/candidate/resume">Update Resume</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills Analysis</CardTitle>
            <CardDescription>Top skills in demand for your field</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {inDemandSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">{skill.name}</div>
                      {skill.hasSkill && (
                        <Badge variant="outline" className="text-green-500 border-green-500">
                          You have this skill
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{skill.demand}% in demand</div>
                  </div>
                  <Progress value={skill.demand} className={`h-2 ${skill.hasSkill ? "bg-green-100" : "bg-muted"}`} />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/candidate/skills">Update Skills</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function getActivityIcon(type: string) {
  switch (type) {
    case "application":
      return <BriefcaseIcon className="h-4 w-4 text-primary-foreground" />
    case "view":
      return <Search className="h-4 w-4 text-primary-foreground" />
    case "match":
      return <Zap className="h-4 w-4 text-primary-foreground" />
    default:
      return <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
  }
}

function getActivityIconBackground(type: string) {
  switch (type) {
    case "application":
      return "bg-blue-500"
    case "view":
      return "bg-green-500"
    case "match":
      return "bg-yellow-500"
    default:
      return "bg-primary"
  }
}

const recommendedJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechGlobe Inc.",
    location: "Remote",
    type: "Full-time",
    salary: "$120K - $150K",
    description:
      "We're looking for a Senior Frontend Developer with expertise in React, TypeScript, and modern frontend frameworks to join our growing team.",
    matchPercentage: 92,
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "Creative Solutions",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90K - $110K",
    description:
      "Join our design team to create beautiful, intuitive user interfaces for our digital products. Must have a strong portfolio and experience with design systems.",
    matchPercentage: 87,
  },
  {
    id: "3",
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130K - $160K",
    description:
      "Lead product development cycles from concept to launch. Work with cross-functional teams to deliver user-centered products that drive business growth.",
    matchPercentage: 85,
  },
  {
    id: "4",
    title: "Full Stack Developer",
    company: "Tech Startups Ltd.",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$100K - $130K",
    description:
      "Build scalable web applications using modern technologies. Contribute to both frontend and backend development with a focus on performance and user experience.",
    matchPercentage: 82,
  },
]

const recentApplications = [
  {
    id: "1",
    position: "Senior Frontend Developer",
    company: "TechGlobe Inc.",
    appliedDate: "May 25, 2023",
    status: "In Review",
  },
  {
    id: "2",
    position: "UI/UX Designer",
    company: "Creative Solutions",
    appliedDate: "May 22, 2023",
    status: "Pending",
  },
  {
    id: "3",
    position: "Product Manager",
    company: "Innovate Inc.",
    appliedDate: "May 18, 2023",
    status: "Interviewed",
  },
  {
    id: "4",
    position: "Full Stack Developer",
    company: "Tech Startups Ltd.",
    appliedDate: "May 15, 2023",
    status: "Rejected",
  },
]

const activities = [
  {
    type: "application",
    message: "You applied for <strong>Senior Frontend Developer</strong> at <strong>TechGlobe Inc.</strong>",
    timestamp: "2 days ago",
  },
  {
    type: "view",
    message: "Your profile was viewed by <strong>Creative Solutions</strong>",
    timestamp: "3 days ago",
  },
  {
    type: "match",
    message: "New job match: <strong>UI/UX Designer</strong> at <strong>Creative Solutions</strong>",
    timestamp: "4 days ago",
  },
  {
    type: "view",
    message: "Your resume was downloaded by <strong>Innovate Inc.</strong>",
    timestamp: "1 week ago",
  },
]

const inDemandSkills = [
  {
    name: "React",
    demand: 92,
    hasSkill: true,
  },
  {
    name: "TypeScript",
    demand: 88,
    hasSkill: true,
  },
  {
    name: "UI/UX Design",
    demand: 85,
    hasSkill: false,
  },
  {
    name: "Node.js",
    demand: 78,
    hasSkill: true,
  },
  {
    name: "AWS",
    demand: 75,
    hasSkill: false,
  },
]

