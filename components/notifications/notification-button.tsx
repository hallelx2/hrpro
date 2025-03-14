"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function NotificationButton() {
  const [notifications, setNotifications] = useState(mockNotifications)
  const unreadCount = notifications.filter((n) => !n.read).length

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <div className="flex items-center justify-between p-4">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col gap-1">
              <span className="text-base font-semibold leading-none">Notifications</span>
              <span className="text-xs text-muted-foreground">You have {unreadCount} unread notifications</span>
            </div>
          </DropdownMenuLabel>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-auto px-2 py-1 text-xs" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">No notifications to display</div>
          ) : (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`p-0 focus:bg-accent ${!notification.read ? "bg-accent/40" : ""}`}
                onSelect={() => markAsRead(notification.id)}
              >
                <div className="flex w-full items-start gap-3 p-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={notification.avatar} alt={notification.sender} />
                    <AvatarFallback>{notification.sender[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{notification.sender}</p>
                    <p className="text-xs text-muted-foreground">{notification.content}</p>
                    <p className="text-xs text-muted-foreground/80">{notification.time}</p>
                  </div>
                  {!notification.read && <div className="flex h-2 w-2 rounded-full bg-primary"></div>}
                </div>
              </DropdownMenuItem>
            ))
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
          <a href="/dashboard/notifications" className="w-full rounded-sm p-2 text-center text-sm font-medium">
            View all notifications
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const mockNotifications = [
  {
    id: "1",
    sender: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Scheduled an interview with Robert Davis for Senior Frontend Developer position",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: "2",
    sender: "System",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "New application received for UX Designer position",
    time: "30 minutes ago",
    read: false,
  },
  {
    id: "3",
    sender: "Jessica Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Added feedback for UX Designer candidates",
    time: "2 hours ago",
    read: true,
  },
  {
    id: "4",
    sender: "David Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Updated the status of Olivia Johnson to 'Shortlisted'",
    time: "Yesterday",
    read: true,
  },
  {
    id: "5",
    sender: "System",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Job posting for 'Marketing Specialist' is expiring in 3 days",
    time: "2 days ago",
    read: true,
  },
]

