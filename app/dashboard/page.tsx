import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  BriefcaseIcon,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  AlertCircle,
  Clock,
  Users,
  UserCheck,
  Layers,
} from "lucide-react"

import { RecruitmentFunnel } from "@/components/dashboard/recruitment-funnel"
import { TeamActivity } from "@/components/dashboard/team-activity"
import { JobMetrics } from "@/components/dashboard/job-metrics"
import { CandidateTable } from "@/components/dashboard/candidate-table"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Recruiter Dashboard</h2>
          <p className="text-muted-foreground">Welcome back, Sarah! Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar Clock className="mr-2 h-4 w-4" />
            May 24, 2023
          </Button>
          <Button asChild>
            <Link href="/dashboard/jobs/create">
              <BriefcaseIcon className="mr-2 h-4 w-4" />
              Post New Job
            </Link>
          </Button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
            <div className="mt-3 flex items-center gap-1 text-xs">
              <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                18 Active
              </Badge>
              <Badge variant="outline">6 Draft</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Applications</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38</div>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
            <Progress value={65} className="h-2 mt-3" />
            <p className="text-xs text-muted-foreground mt-1">+12% from previous week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time to Hire</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.2 days</div>
            <p className="text-xs text-muted-foreground">Avg. across all positions</p>
            <div className="mt-3 flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
              <CheckCircle2 className="h-3 w-3" />
              <span>Down 2.4 days from last quarter</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Qualified Candidates</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72</div>
            <p className="text-xs text-muted-foreground">Ready for interview</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Engineering</span>
                <span className="text-sm font-medium">34</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Design</span>
                <span className="text-sm font-medium">18</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Recruitment Pipeline</CardTitle>
            <CardDescription>Current status of all active positions</CardDescription>
          </CardHeader>
          <CardContent>
            <RecruitmentFunnel />
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Team Activity</CardTitle>
            <CardDescription>Recent actions by team members</CardDescription>
          </CardHeader>
          <CardContent>
            <TeamActivity />
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/dashboard/team">
                View All Activity
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Jobs by Department</CardTitle>
            <CardDescription>Distribution of open positions</CardDescription>
          </CardHeader>
          <CardContent>
            <JobMetrics />
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/dashboard/jobs">
                View All Jobs
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="md:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Tasks & Reminders</CardTitle>
              <CardDescription>Your pending actions</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                  <div className={`rounded-full p-2 ${getTaskIconBackground(task.priority)}`}>
                    {getTaskIcon(task.type)}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{task.title}</div>
                    <div className="text-sm text-muted-foreground">{task.description}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline">{task.dueDate}</Badge>
                      <Badge
                        variant={
                          task.priority === "high"
                            ? "destructive"
                            : task.priority === "medium"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Complete
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Recent Candidates</TabsTrigger>
          <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
          <TabsTrigger value="interviews">Upcoming Interviews</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recently Applied Candidates</CardTitle>
              <CardDescription>Candidates who applied in the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <CandidateTable filter="recent" />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/applications">View All Applications</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="shortlisted">
          <Card>
            <CardHeader>
              <CardTitle>Shortlisted Candidates</CardTitle>
              <CardDescription>Candidates selected for further evaluation</CardDescription>
            </CardHeader>
            <CardContent>
              <CandidateTable filter="shortlisted" />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/candidates?filter=shortlisted">View All Shortlisted Candidates</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="interviews">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Interviews</CardTitle>
              <CardDescription>Scheduled interviews for the next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {interviews.map((interview) => (
                  <div
                    key={interview.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={interview.candidate.avatar} alt={interview.candidate.name} />
                        <AvatarFallback>{interview.candidate.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{interview.candidate.name}</div>
                        <div className="text-sm text-muted-foreground">{interview.position}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-medium">{interview.date}</div>
                        <div className="text-sm text-muted-foreground">{interview.time}</div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/dashboard/interviews/${interview.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/interviews">View All Interviews</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function getTaskIcon(type: string) {
  switch (type) {
    case "review":
      return <ClipboardList className="h-4 w-4 text-primary-foreground" />
    case "interview":
      return <Users className="h-4 w-4 text-primary-foreground" />
    case "feedback":
      return <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
    default:
      return <AlertCircle className="h-4 w-4 text-primary-foreground" />
  }
}

function getTaskIconBackground(priority: string) {
  switch (priority) {
    case "high":
      return "bg-red-500"
    case "medium":
      return "bg-yellow-500"
    case "low":
      return "bg-green-500"
    default:
      return "bg-primary"
  }
}

const tasks = [
  {
    id: "1",
    title: "Review Frontend Developer applications",
    description: "5 new applications require your review",
    type: "review",
    priority: "high",
    dueDate: "Today",
  },
  {
    id: "2",
    title: "Prepare for UX Designer interview",
    description: "Interview with Jessica Williams at 2:00 PM",
    type: "interview",
    priority: "medium",
    dueDate: "Tomorrow",
  },
  {
    id: "3",
    title: "Provide feedback for Product Manager candidates",
    description: "Team is waiting for your assessment",
    type: "feedback",
    priority: "low",
    dueDate: "In 3 days",
  },
]

const interviews = [
  {
    id: "1",
    candidate: {
      name: "Jessica Williams",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "UX Designer",
    date: "Tomorrow",
    time: "2:00 PM - 3:00 PM",
  },
  {
    id: "2",
    candidate: {
      name: "Robert Davis",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "Senior Frontend Developer",
    date: "May 26, 2023",
    time: "10:30 AM - 11:30 AM",
  },
  {
    id: "3",
    candidate: {
      name: "Emily Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "Product Manager",
    date: "May 27, 2023",
    time: "3:15 PM - 4:15 PM",
  },
]

