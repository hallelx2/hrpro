import type React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Download, Eye, MessageSquare, MoreHorizontal, Star, Trash } from "lucide-react"

interface Candidate {
  id: string
  name: string
  email: string
  avatar: string
  position: string
  department: string
  status: string
  matchScore: number
  appliedDate: string
  lastActivity: string
  tags: string[]
  source: string
}

interface CandidateCardProps {
  candidate: Candidate
  isSelected: boolean
  onSelect: () => void
  getStatusColorClass: (status: string) => string
  getStatusBadge: (status: string) => React.ReactNode
  formatDate: (dateString: string) => string
}

export function CandidateCard({
  candidate,
  isSelected,
  onSelect,
  getStatusColorClass,
  getStatusBadge,
  formatDate,
}: CandidateCardProps) {
  return (
    <Card className={cn("transition-all duration-200", isSelected ? "ring-2 ring-primary" : "")}>
      <CardContent className="p-0">
        <div className="p-4 pb-0 flex justify-between items-start">
          <Checkbox checked={isSelected} onCheckedChange={onSelect} aria-label={`Select ${candidate.name}`} />
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
                <MessageSquare className="mr-2 h-4 w-4" /> Message
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Star className="mr-2 h-4 w-4" /> Shortlist
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash className="mr-2 h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="p-4 text-center">
          <Avatar className="h-16 w-16 mx-auto mb-2">
            <AvatarImage src={candidate.avatar} alt={candidate.name} />
            <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="font-medium text-lg">{candidate.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{candidate.email}</p>

          <div className="flex flex-col gap-2 mt-4">
            <div className="text-sm">
              <span className="font-medium">Position:</span> {candidate.position}
            </div>
            <div className="text-sm">
              <span className="font-medium">Department:</span> {candidate.department}
            </div>
            <div className="text-sm">
              <span className="font-medium">Applied:</span> {formatDate(candidate.appliedDate)}
            </div>
            <div className="text-sm">
              <span className="font-medium">Source:</span> {candidate.source}
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <Badge className={cn("gap-1", getStatusColorClass(candidate.status))}>
              {getStatusBadge(candidate.status)}
            </Badge>

            <div
              className={`text-center font-medium rounded-full px-2 py-1 text-xs ${
                candidate.matchScore >= 80
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : candidate.matchScore >= 60
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              }`}
            >
              {candidate.matchScore}% Match
            </div>
          </div>

          {candidate.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-4">
              {candidate.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/dashboard/candidates/${candidate.id}`}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </Link>
        </Button>
        <Button variant="outline" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          Contact
        </Button>
      </CardFooter>
    </Card>
  )
}

