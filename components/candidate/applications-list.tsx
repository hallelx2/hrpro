"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowUpRight,
  BriefcaseIcon,
  Building,
  Calendar,
  ChevronRight,
  Clock,
  Filter,
  MapPin,
  Search,
} from "lucide-react"

type Application = {
  id: string
  jobTitle: string
  company: string
  companyLogo: string
  location: string
  appliedDate: string
  status: "Submitted" | "In Review" | "Interview" | "Offer" | "Rejected" | "Withdrawn"
  type: string
  salary: string
  lastUpdated: string
  nextStep?: string
  nextStepDate?: string
  feedback?: string
}

// Move the getStatusColor function outside of the component
const getStatusColor = (status: Application["status"]) => {
  switch (status) {
    case "Submitted":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    case "In Review":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "Interview":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    case "Offer":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "Rejected":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    case "Withdrawn":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    default:
      return ""
  }
}

export function ApplicationsList() {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: "1",
      jobTitle: "Senior Frontend Developer",
      company: "TechGlobe Inc.",
      companyLogo: "/placeholder.svg?height=40&width=40",
      location: "San Francisco, CA",
      appliedDate: "May 15, 2023",
      status: "Interview",
      type: "Full-time",
      salary: "$120K - $150K",
      lastUpdated: "2 days ago",
      nextStep: "Technical Interview",
      nextStepDate: "May 28, 2023",
    },
    {
      id: "2",
      jobTitle: "UI/UX Designer",
      company: "Creative Solutions",
      companyLogo: "/placeholder.svg?height=40&width=40",
      location: "New York, NY",
      appliedDate: "May 10, 2023",
      status: "In Review",
      type: "Full-time",
      salary: "$90K - $110K",
      lastUpdated: "1 week ago",
    },
    {
      id: "3",
      jobTitle: "Product Manager",
      company: "Innovate Inc.",
      companyLogo: "/placeholder.svg?height=40&width=40",
      location: "Remote",
      appliedDate: "May 5, 2023",
      status: "Rejected",
      type: "Full-time",
      salary: "$130K - $160K",
      lastUpdated: "3 days ago",
      feedback: "We've decided to move forward with candidates who have more experience in the healthcare industry.",
    },
    {
      id: "4",
      jobTitle: "Full Stack Developer",
      company: "Tech Startups Ltd.",
      companyLogo: "/placeholder.svg?height=40&width=40",
      location: "Austin, TX",
      appliedDate: "May 1, 2023",
      status: "Submitted",
      type: "Contract",
      salary: "$100K - $130K",
      lastUpdated: "2 weeks ago",
    },
    {
      id: "5",
      jobTitle: "DevOps Engineer",
      company: "Cloud Systems Inc.",
      companyLogo: "/placeholder.svg?height=40&width=40",
      location: "Remote",
      appliedDate: "April 25, 2023",
      status: "Offer",
      type: "Full-time",
      salary: "$110K - $140K",
      lastUpdated: "Yesterday",
      nextStep: "Review Offer",
      nextStepDate: "May 30, 2023",
    },
    {
      id: "6",
      jobTitle: "Data Scientist",
      company: "Data Insights Co.",
      companyLogo: "/placeholder.svg?height=40&width=40",
      location: "Chicago, IL",
      appliedDate: "April 20, 2023",
      status: "Withdrawn",
      type: "Full-time",
      salary: "$115K - $145K",
      lastUpdated: "1 month ago",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredApplications = applications.filter((app) => {
    // Search filter
    if (
      searchTerm &&
      !app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !app.company.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Status filter
    if (statusFilter !== "all" && app.status.toLowerCase() !== statusFilter.toLowerCase()) {
      return false
    }

    return true
  })

  // Remove the getStatusColor function from here since it's now defined outside

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search applications by job title or company"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="in review">In Review</SelectItem>
              <SelectItem value="interview">Interview</SelectItem>
              <SelectItem value="offer">Offer</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="withdrawn">Withdrawn</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
          <TabsTrigger value="offers">Offers</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <div className="text-sm text-muted-foreground">Showing {filteredApplications.length} applications</div>

        <TabsContent value="all" className="space-y-4">
          {filteredApplications.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                <BriefcaseIcon className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No applications found</h3>
                <p className="text-sm text-muted-foreground max-w-md mt-2">
                  We couldn't find any applications matching your search criteria. Try adjusting your filters or search
                  terms.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setStatusFilter("all")
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredApplications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <div className="space-y-4">
            {filteredApplications
              .filter((app) => ["Submitted", "In Review", "Interview"].includes(app.status))
              .map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="interviews" className="space-y-4">
          <div className="space-y-4">
            {filteredApplications
              .filter((app) => app.status === "Interview")
              .map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="offers" className="space-y-4">
          <div className="space-y-4">
            {filteredApplications
              .filter((app) => app.status === "Offer")
              .map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="closed" className="space-y-4">
          <div className="space-y-4">
            {filteredApplications
              .filter((app) => ["Rejected", "Withdrawn"].includes(app.status))
              .map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ApplicationCard({ application }: { application: Application }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center">
              <img
                src={application.companyLogo || "/placeholder.svg"}
                alt={application.company}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <h3 className="font-medium">{application.jobTitle}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <Building className="mr-1 h-3 w-3" />
                <span>{application.company}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-1 text-xs">
                <Badge variant="outline" className="flex items-center">
                  <MapPin className="mr-1 h-2 w-2" />
                  {application.location}
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <BriefcaseIcon className="mr-1 h-2 w-2" />
                  {application.type}
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <ArrowUpRight className="mr-1 h-2 w-2" />
                  {application.salary}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex flex-col items-start">
              <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Calendar className="mr-1 h-3 w-3" />
                <span>Applied: {application.appliedDate}</span>
              </div>
            </div>
            <Button asChild>
              <Link href={`/candidate/applications/${application.id}`}>
                View Details <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        {application.nextStep && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center text-sm">
              <Clock className="mr-2 h-4 w-4 text-blue-500" />
              <div>
                <span className="font-medium">Next Step: {application.nextStep}</span>
                {application.nextStepDate && (
                  <span className="text-muted-foreground ml-2">({application.nextStepDate})</span>
                )}
              </div>
            </div>
          </div>
        )}
        {application.feedback && (
          <div className="mt-4 pt-4 border-t">
            <div className="text-sm">
              <span className="font-medium">Feedback:</span>
              <p className="text-muted-foreground mt-1">{application.feedback}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

