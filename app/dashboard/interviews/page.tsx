import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Filter, Search, SlidersHorizontal, UserPlus } from "lucide-react"

interface Interview {
  id: string;
  candidate: {
    name: string;
    avatar: string;
  };
  position: string;
  date: string;
  time: string;
  type: string;
  interviewer: string;
  status: string;
}

export default function InterviewsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Interviews</h2>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href="/dashboard/interviews/schedule">
              <UserPlus className="mr-2 h-4 w-4" />
              Schedule Interview
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search interviews..." className="pl-8" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Sort
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="canceled">Canceled</TabsTrigger>
          <TabsTrigger value="all">All Interviews</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingInterviews.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completedInterviews.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="canceled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Canceled Interviews</CardTitle>
              <CardDescription>Interviews that were scheduled but later canceled</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-muted-foreground">No canceled interviews found</div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingInterviews.concat(completedInterviews).map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Calendar</CardTitle>
          <CardDescription>Your interview schedule for the week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingDays.map((day) => (
              <div key={day.date} className="space-y-2">
                <div className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {day.date}
                </div>

                {day.interviews.length > 0 ? (
                  <div className="space-y-2">
                    {day.interviews.map((interview, index) => (
                      <div key={index} className="border rounded-md p-3 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={interview.candidate.avatar} alt={interview.candidate.name} />
                            <AvatarFallback>{interview.candidate.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{interview.candidate.name}</div>
                            <div className="text-sm text-muted-foreground">{interview.position}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{interview.time}</div>
                          <div className="text-xs text-muted-foreground">{interview.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border rounded-md p-3 text-center text-muted-foreground">No interviews scheduled</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard/interviews/calendar">View Full Calendar</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function InterviewCard({ interview }: { interview: Interview }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base">{interview.candidate.name}</CardTitle>
            <CardDescription>{interview.position}</CardDescription>
          </div>
          <Badge
            variant={
              interview.status === "Scheduled" ? "outline" : interview.status === "Completed" ? "default" : "secondary"
            }
          >
            {interview.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Date:</span>
            <span>{interview.date}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Time:</span>
            <span>{interview.time}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Type:</span>
            <span>{interview.type}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Interviewer:</span>
            <span>{interview.interviewer}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button variant="outline" size="sm">
          {interview.status === "Completed" ? "View Feedback" : "Reschedule"}
        </Button>
        <Button asChild size="sm">
          <Link href={`/dashboard/interviews/${interview.id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const upcomingInterviews = [
  {
    id: "1",
    candidate: {
      name: "Jessica Williams",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "UX Designer",
    date: "May 25, 2023",
    time: "2:00 PM - 3:00 PM",
    type: "Technical",
    interviewer: "Amanda Parker",
    status: "Scheduled",
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
    type: "Technical",
    interviewer: "David Johnson",
    status: "Scheduled",
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
    type: "Cultural Fit",
    interviewer: "Michael Chen",
    status: "Scheduled",
  },
]

const completedInterviews = [
  {
    id: "4",
    candidate: {
      name: "Daniel Smith",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "Backend Engineer",
    date: "May 18, 2023",
    time: "1:00 PM - 2:00 PM",
    type: "Technical",
    interviewer: "David Johnson",
    status: "Completed",
  },
  {
    id: "5",
    candidate: {
      name: "Sophia Martinez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "UX Designer",
    date: "May 15, 2023",
    time: "11:00 AM - 12:00 PM",
    type: "Portfolio Review",
    interviewer: "Amanda Parker",
    status: "Completed",
  },
]

const upcomingDays = [
  {
    date: "Today",
    interviews: [
      {
        candidate: {
          name: "Jessica Williams",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        position: "UX Designer",
        time: "2:00 PM",
        duration: "1 hour",
      },
    ],
  },
  {
    date: "Tomorrow",
    interviews: [],
  },
  {
    date: "May 26, 2023",
    interviews: [
      {
        candidate: {
          name: "Robert Davis",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        position: "Senior Frontend Developer",
        time: "10:30 AM",
        duration: "1 hour",
      },
    ],
  },
  {
    date: "May 27, 2023",
    interviews: [
      {
        candidate: {
          name: "Emily Johnson",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        position: "Product Manager",
        time: "3:15 PM",
        duration: "1 hour",
      },
    ],
  },
]
