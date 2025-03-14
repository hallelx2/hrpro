"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal, Eye, Star, CheckCircle2, X, MessageSquare } from "lucide-react"

interface CandidateTableProps {
  filter?: "recent" | "shortlisted" | "all"
}

export function CandidateTable({ filter = "all" }: CandidateTableProps) {
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([])

  // Filter candidates based on the provided filter
  const filteredCandidates =
    filter === "all"
      ? candidates
      : filter === "shortlisted"
        ? candidates.filter((c) => c.status === "Shortlisted")
        : candidates.slice(0, 5) // For "recent", just show the first 5

  const toggleSelectCandidate = (id: string) => {
    if (selectedCandidates.includes(id)) {
      setSelectedCandidates(selectedCandidates.filter((candidateId) => candidateId !== id))
    } else {
      setSelectedCandidates([...selectedCandidates, id])
    }
  }

  const toggleSelectAll = () => {
    if (selectedCandidates.length === filteredCandidates.length) {
      setSelectedCandidates([])
    } else {
      setSelectedCandidates(filteredCandidates.map((c) => c.id))
    }
  }

  return (
    <div>
      {selectedCandidates.length > 0 && (
        <div className="bg-muted/50 p-2 mb-4 rounded-md flex items-center justify-between">
          <div className="text-sm">{selectedCandidates.length} candidate(s) selected</div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <MessageSquare className="mr-1 h-4 w-4" /> Message
            </Button>
            <Button size="sm" variant="outline">
              <CheckCircle2 className="mr-1 h-4 w-4" /> Shortlist
            </Button>
            <Button size="sm" variant="outline">
              <X className="mr-1 h-4 w-4" /> Reject
            </Button>
          </div>
        </div>
      )}

      <div className="rounded-md border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="h-10 px-2 text-left align-middle font-medium">
                <Checkbox
                  checked={selectedCandidates.length === filteredCandidates.length && filteredCandidates.length > 0}
                  onCheckedChange={toggleSelectAll}
                  aria-label="Select all candidates"
                />
              </th>
              <th className="h-10 px-2 text-left align-middle font-medium">Candidate</th>
              <th className="h-10 px-2 text-left align-middle font-medium">Position</th>
              <th className="h-10 px-2 text-left align-middle font-medium">Status</th>
              <th className="h-10 px-2 text-left align-middle font-medium">Match</th>
              <th className="h-10 px-2 text-left align-middle font-medium">Applied</th>
              <th className="h-10 px-2 text-right align-middle font-medium w-[50px]"></th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.length === 0 ? (
              <tr>
                <td colSpan={7} className="h-24 text-center align-middle text-muted-foreground">
                  No candidates found
                </td>
              </tr>
            ) : (
              filteredCandidates.map((candidate) => (
                <tr key={candidate.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-2 align-middle">
                    <Checkbox
                      checked={selectedCandidates.includes(candidate.id)}
                      onCheckedChange={() => toggleSelectCandidate(candidate.id)}
                      aria-label={`Select ${candidate.name}`}
                    />
                  </td>
                  <td className="p-2 align-middle">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={candidate.avatar} alt={candidate.name} />
                        <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{candidate.name}</div>
                    </div>
                  </td>
                  <td className="p-2 align-middle">{candidate.position}</td>
                  <td className="p-2 align-middle">
                    <Badge
                      variant={
                        candidate.status === "Shortlisted"
                          ? "default"
                          : candidate.status === "In Review"
                            ? "secondary"
                            : candidate.status === "New"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {candidate.status}
                    </Badge>
                  </td>
                  <td className="p-2 align-middle">
                    <div
                      className={`w-10 text-center font-medium rounded-full px-2 py-1 text-xs ${
                        candidate.matchScore >= 80
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : candidate.matchScore >= 60
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {candidate.matchScore}%
                    </div>
                  </td>
                  <td className="p-2 align-middle text-sm">{candidate.appliedDate}</td>
                  <td className="p-2 align-middle text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/candidates/${candidate.id}`}>
                            <Eye className="mr-2 h-4 w-4" /> View Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Star className="mr-2 h-4 w-4" /> Shortlist
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" /> Contact
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <X className="mr-2 h-4 w-4" /> Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const candidates = [
  {
    id: "1",
    name: "Olivia Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "Senior Frontend Developer",
    status: "Shortlisted",
    matchScore: 92,
    appliedDate: "May 4, 2023",
  },
  {
    id: "2",
    name: "James Wilson",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "Product Manager",
    status: "In Review",
    matchScore: 78,
    appliedDate: "May 10, 2023",
  },
  {
    id: "3",
    name: "Sophia Martinez",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "UX Designer",
    status: "Shortlisted",
    matchScore: 85,
    appliedDate: "May 15, 2023",
  },
  {
    id: "4",
    name: "Liam Thompson",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "Backend Engineer",
    status: "Rejected",
    matchScore: 65,
    appliedDate: "May 12, 2023",
  },
  {
    id: "5",
    name: "Emma Davis",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "Marketing Specialist",
    status: "In Review",
    matchScore: 72,
    appliedDate: "May 18, 2023",
  },
  {
    id: "6",
    name: "Noah Garcia",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "Senior Frontend Developer",
    status: "New",
    matchScore: 88,
    appliedDate: "May 20, 2023",
  },
  {
    id: "7",
    name: "Ava Rodriguez",
    avatar: "/placeholder.svg?height=32&width=32",
    position: "Product Manager",
    status: "New",
    matchScore: 58,
    appliedDate: "May 21, 2023",
  },
]

