import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search } from "lucide-react"

export default function JobsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Job Postings</h2>
        <Button asChild>
          <Link href="/dashboard/jobs/create">
            <Plus className="mr-2 h-4 w-4" /> Create Job
          </Link>
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search jobs..." className="pl-8" />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
          <TabsTrigger value="all">All Jobs</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((job) => job.status === "Active")
              .map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="draft" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((job) => job.status === "Draft")
              .map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="closed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((job) => job.status === "Closed")
              .map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function JobCard({ job }: { job: any }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle>{job.title}</CardTitle>
          <Badge variant={job.status === "Active" ? "default" : job.status === "Draft" ? "outline" : "secondary"}>
            {job.status}
          </Badge>
        </div>
        <CardDescription>
          {job.department} • {job.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Applications:</span>
            <span className="font-medium">{job.applications}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Posted:</span>
            <span>{job.postedDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Closing:</span>
            <span>{job.closingDate}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/dashboard/jobs/${job.id}`}>View Details</Link>
        </Button>
        <Button asChild>
          <Link href={`/dashboard/jobs/${job.id}/applications`}>Review Applications</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const jobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    applications: 48,
    postedDate: "May 4, 2023",
    closingDate: "Jun 4, 2023",
    status: "Active",
  },
  {
    id: "2",
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    applications: 36,
    postedDate: "May 10, 2023",
    closingDate: "Jun 10, 2023",
    status: "Active",
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    applications: 24,
    postedDate: "May 15, 2023",
    closingDate: "Jun 15, 2023",
    status: "Active",
  },
  {
    id: "4",
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    applications: 0,
    postedDate: "Not published",
    closingDate: "N/A",
    status: "Draft",
  },
  {
    id: "5",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Chicago, IL",
    applications: 18,
    postedDate: "Apr 20, 2023",
    closingDate: "May 20, 2023",
    status: "Closed",
  },
]

