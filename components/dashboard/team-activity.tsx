import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, CheckCircle2, Clock, FileText, MessageSquare, ThumbsUp, User, Users2Icon } from "lucide-react"

export function TeamActivity() {
  return (
    <div className="space-y-5">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start gap-4">
          <Avatar className="mt-1">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">{activity.user.name}</span>
              <Badge variant="outline" className="font-normal text-xs capitalize">
                {activity.user.role}
              </Badge>
            </div>
            <p className="text-sm flex items-center gap-1.5">
              {getActivityIcon(activity.action)}
              <span dangerouslySetInnerHTML={{ __html: activity.description }} />
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{activity.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function getActivityIcon(action: string) {
  switch (action) {
    case "job_posted":
      return <BriefcaseIcon className="h-3.5 w-3.5 text-primary" />
    case "candidate_screened":
      return <FileText className="h-3.5 w-3.5 text-primary" />
    case "interview_scheduled":
      return <Users2Icon className="h-3.5 w-3.5 text-primary" />
    case "feedback_added":
      return <MessageSquare className="h-3.5 w-3.5 text-primary" />
    case "candidate_hired":
      return <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
    case "candidate_rejected":
      return <ThumbsUp className="h-3.5 w-3.5 text-primary" />
    default:
      return <User className="h-3.5 w-3.5 text-primary" />
  }
}

const activities = [
  {
    user: {
      name: "Sarah Thompson",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "admin",
    },
    action: "job_posted",
    description: "posted a new job for <strong>Senior Frontend Developer</strong>",
    time: "10 minutes ago",
  },
  {
    user: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "recruiter",
    },
    action: "candidate_screened",
    description: "screened <strong>5 candidates</strong> for Product Manager position",
    time: "1 hour ago",
  },
  {
    user: {
      name: "Jessica Williams",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "recruiter",
    },
    action: "interview_scheduled",
    description: "scheduled an interview with <strong>Robert Davis</strong> for tomorrow",
    time: "2 hours ago",
  },
  {
    user: {
      name: "David Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "hiring manager",
    },
    action: "feedback_added",
    description: "provided feedback for <strong>UX Designer</strong> candidates",
    time: "Yesterday",
  },
  {
    user: {
      name: "Sarah Thompson",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "admin",
    },
    action: "candidate_hired",
    description: "marked <strong>Emily Parker</strong> as hired for Marketing Specialist",
    time: "Yesterday",
  },
]

