"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Eye, Star, UserCheck, UserX } from "lucide-react"

interface ApplicationTableProps {
  status?: string
}

export function ApplicationTable({ status }: ApplicationTableProps) {
  const [selectedApplications, setSelectedApplications] = useState<string[]>([])

  const filteredApplications = status ? applications.filter((app) => app.status === status) : applications

  const toggleSelectAll = () => {
    if (selectedApplications.length === filteredApplications.length) {
      setSelectedApplications([])
    } else {
      setSelectedApplications(filteredApplications.map((app) => app.id))
    }
  }

  const toggleSelectApplication = (id: string) => {
    if (selectedApplications.includes(id)) {
      setSelectedApplications(selectedApplications.filter((appId) => appId !== id))
    } else {
      setSelectedApplications([...selectedApplications, id])
    }
  }

  return (
    <div>
      {selectedApplications.length > 0 && (
        <div className="bg-muted/50 p-2 mb-4 rounded-md flex items-center justify-between">
          <div className="text-sm">{selectedApplications.length} application(s) selected</div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <UserCheck className="h-4 w-4 mr-1" /> Mark Qualified
            </Button>
            <Button size="sm" variant="outline">
              <UserX className="h-4 w-4 mr-1" /> Reject
            </Button>
          </div>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    selectedApplications.length === filteredApplications.length && filteredApplications.length > 0
                  }
                  onCheckedChange={toggleSelectAll}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>Candidate</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Match Score</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Applied</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredApplications.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                  No applications found
                </TableCell>
              </TableRow>
            ) : (
              filteredApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedApplications.includes(application.id)}
                      onCheckedChange={() => toggleSelectApplication(application.id)}
                      aria-label={`Select ${application.candidate.name}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={application.candidate.avatar} alt={application.candidate.name} />
                        <AvatarFallback>{application.candidate.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{application.candidate.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{application.position}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div
                        className={`w-10 text-center font-medium rounded-full px-2 py-1 text-xs ${
                          application.matchScore >= 80
                            ? "bg-green-100 text-green-800"
                            : application.matchScore >= 60
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {application.matchScore}%
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        application.status === "Qualified"
                          ? "default"
                          : application.status === "Review"
                            ? "outline"
                            : application.status === "New"
                              ? "secondary"
                              : "destructive"
                      }
                    >
                      {application.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{application.appliedDate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/applications/${application.id}`}>
                            <Eye className="h-4 w-4 mr-2" /> View Details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Star className="h-4 w-4 mr-2" /> Mark as Qualified
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserX className="h-4 w-4 mr-2" /> Reject Application
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const applications = [
  {
    id: "1",
    candidate: {
      name: "Olivia Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "Senior Frontend Developer",
    matchScore: 92,
    status: "Qualified",
    appliedDate: "May 4, 2023",
  },
  {
    id: "2",
    candidate: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "Product Manager",
    matchScore: 78,
    status: "Review",
    appliedDate: "May 10, 2023",
  },
  {
    id: "3",
    candidate: {
      name: "Sophia Martinez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "UX Designer",
    matchScore: 85,
    status: "Qualified",
    appliedDate: "May 15, 2023",
  },
  {
    id: "4",
    candidate: {
      name: "Liam Thompson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "Backend Engineer",
    matchScore: 65,
    status: "Rejected",
    appliedDate: "May 12, 2023",
  },
  {
    id: "5",
    candidate: {
      name: "Emma Davis",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "Marketing Specialist",
    matchScore: 72,
    status: "Review",
    appliedDate: "May 18, 2023",
  },
  {
    id: "6",
    candidate: {
      name: "Noah Garcia",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "Senior Frontend Developer",
    matchScore: 88,
    status: "New",
    appliedDate: "May 20, 2023",
  },
  {
    id: "7",
    candidate: {
      name: "Ava Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    position: "Product Manager",
    matchScore: 58,
    status: "New",
    appliedDate: "May 21, 2023",
  },
]

