"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Loader2, MoreHorizontal, Plus, Search, UserPlus, Mail } from "lucide-react"
import { toast } from "sonner"

export default function TeamPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false)

  const handleInviteTeamMember = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast("Invitation sent")

    setIsLoading(false)
    setIsInviteDialogOpen(false)
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Team Management</h2>
        <div className="flex items-center space-x-2">
          <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Invite Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription>Invite a new team member to join your organization.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" placeholder="colleague@example.com" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    Role
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="recruiter">Recruiter</SelectItem>
                      <SelectItem value="hiring-manager">Hiring Manager</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="message" className="text-right">
                    Message
                  </Label>
                  <Input id="message" placeholder="Optional message" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsInviteDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleInviteTeamMember} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Invitation"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search team members..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="recruiter">Recruiter</SelectItem>
            <SelectItem value="hiring-manager">Hiring Manager</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Members</TabsTrigger>
          <TabsTrigger value="pending">Pending Invitations</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Team Members</CardTitle>
              <CardDescription>Manage your organization's team members and their roles.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge
                        variant={
                          member.role === "Admin" ? "default" : member.role === "Recruiter" ? "secondary" : "outline"
                        }
                      >
                        {member.role}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Role</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Remove Member</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Invitations</CardTitle>
              <CardDescription>Team members who have been invited but not yet joined.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingInvitations.map((invitation) => (
                  <div
                    key={invitation.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">{invitation.email}</div>
                        <div className="text-sm text-muted-foreground">Invited on {invitation.invitedDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{invitation.role}</Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Resend Invitation</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Cancel Invitation</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Resend All Invitations
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Roles & Permissions</CardTitle>
            <CardDescription>Configure roles and access permissions for your team.</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Role
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.name} className="border rounded-md">
                <div className="flex items-center justify-between p-4 border-b">
                  <div>
                    <h3 className="font-medium">{role.name}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{role.members} members</Badge>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {role.permissions.map((permission) => (
                    <div key={permission.name} className="flex items-start gap-2">
                      <div
                        className={`mt-0.5 h-4 w-4 rounded-full ${permission.allowed ? "bg-green-500" : "bg-muted"}`}
                      />
                      <div>
                        <div className="text-sm font-medium">{permission.name}</div>
                        <div className="text-xs text-muted-foreground">{permission.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const activeMembers = [
  {
    id: "1",
    name: "Sarah Thompson",
    email: "sarah.thompson@example.com",
    role: "Admin",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "Recruiter",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Jessica Williams",
    email: "jessica.williams@example.com",
    role: "Recruiter",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "David Johnson",
    email: "david.johnson@example.com",
    role: "Hiring Manager",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "Emma Garcia",
    email: "emma.garcia@example.com",
    role: "Viewer",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const pendingInvitations = [
  {
    id: "1",
    email: "robert.smith@example.com",
    role: "Recruiter",
    invitedDate: "May 25, 2023",
  },
  {
    id: "2",
    email: "jennifer.brown@example.com",
    role: "Hiring Manager",
    invitedDate: "May 23, 2023",
  },
  {
    id: "3",
    email: "thomas.wilson@example.com",
    role: "Viewer",
    invitedDate: "May 20, 2023",
  },
]

const roles = [
  {
    name: "Admin",
    description: "Full access to all features and settings",
    members: 1,
    permissions: [
      {
        name: "Manage Organization",
        description: "Edit organization settings and billing",
        allowed: true,
      },
      {
        name: "Manage Team",
        description: "Add, edit, and remove team members",
        allowed: true,
      },
      {
        name: "Manage Jobs",
        description: "Create, edit, and delete job postings",
        allowed: true,
      },
      {
        name: "Manage Applications",
        description: "Review and process all applications",
        allowed: true,
      },
      {
        name: "View Analytics",
        description: "Access recruitment analytics and reports",
        allowed: true,
      },
      {
        name: "Export Data",
        description: "Export data from the platform",
        allowed: true,
      },
    ],
  },
  {
    name: "Recruiter",
    description: "Can manage jobs and applications",
    members: 2,
    permissions: [
      {
        name: "Manage Organization",
        description: "Edit organization settings and billing",
        allowed: false,
      },
      {
        name: "Manage Team",
        description: "Add, edit, and remove team members",
        allowed: false,
      },
      {
        name: "Manage Jobs",
        description: "Create, edit, and delete job postings",
        allowed: true,
      },
      {
        name: "Manage Applications",
        description: "Review and process all applications",
        allowed: true,
      },
      {
        name: "View Analytics",
        description: "Access recruitment analytics and reports",
        allowed: true,
      },
      {
        name: "Export Data",
        description: "Export data from the platform",
        allowed: true,
      },
    ],
  },
  {
    name: "Hiring Manager",
    description: "Can review applications for their department",
    members: 1,
    permissions: [
      {
        name: "Manage Organization",
        description: "Edit organization settings and billing",
        allowed: false,
      },
      {
        name: "Manage Team",
        description: "Add, edit, and remove team members",
        allowed: false,
      },
      {
        name: "Manage Jobs",
        description: "Create, edit, and delete job postings",
        allowed: false,
      },
      {
        name: "Manage Applications",
        description: "Review and process all applications",
        allowed: true,
      },
      {
        name: "View Analytics",
        description: "Access recruitment analytics and reports",
        allowed: true,
      },
      {
        name: "Export Data",
        description: "Export data from the platform",
        allowed: false,
      },
    ],
  },
]
