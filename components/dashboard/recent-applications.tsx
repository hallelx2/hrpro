"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function RecentApplications() {
  return (
    <div className="space-y-8">
      {applications.map((application) => (
        <div key={application.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={application.avatar} alt="Avatar" />
            <AvatarFallback>{application.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{application.name}</p>
            <p className="text-sm text-muted-foreground">{application.position}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Badge
              variant={
                application.status === "Qualified"
                  ? "default"
                  : application.status === "Review"
                    ? "outline"
                    : "secondary"
              }
            >
              {application.status}
            </Badge>
            <Button variant="ghost" size="sm">
              View
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

const applications = [
  {
    id: "1",
    name: "Olivia Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "Senior Frontend Developer",
    status: "Qualified",
  },
  {
    id: "2",
    name: "James Wilson",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "Product Manager",
    status: "Review",
  },
  {
    id: "3",
    name: "Sophia Martinez",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "UX Designer",
    status: "Qualified",
  },
  {
    id: "4",
    name: "Liam Thompson",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "Backend Engineer",
    status: "Rejected",
  },
  {
    id: "5",
    name: "Emma Davis",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "Marketing Specialist",
    status: "Review",
  },
]

