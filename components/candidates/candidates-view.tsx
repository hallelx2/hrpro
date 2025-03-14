"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import {
  ArrowUpDown,
  ChevronDown,
  Download,
  Eye,
  MoreHorizontal,
  RefreshCw,
  SlidersHorizontal,
  Star,
  Trash,
  MessageSquare,
  CheckCircle2,
  Clock,
  AlertCircle,
  UserCheck,
  UserX,
} from "lucide-react"
import { CandidateCard } from "@/components/candidates/candidate-card"

// Define types
type Candidate = {
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

type StatusOption = {
  value: string
  label: string
  icon: React.ReactNode
  color: string
}

// Status options with icons and colors
const statusOptions: StatusOption[] = [
  {
    value: "all",
    label: "All Statuses",
    icon: <ChevronDown className="h-4 w-4" />,
    color: "bg-secondary text-secondary-foreground",
  },
  {
    value: "new",
    label: "New",
    icon: <Clock className="h-4 w-4" />,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    value: "screening",
    label: "Screening",
    icon: <AlertCircle className="h-4 w-4" />,
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  },
  {
    value: "interviewing",
    label: "Interviewing",
    icon: <MessageSquare className="h-4 w-4" />,
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    value: "assessment",
    label: "Assessment",
    icon: <SlidersHorizontal className="h-4 w-4" />,
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  },
  {
    value: "shortlisted",
    label: "Shortlisted",
    icon: <Star className="h-4 w-4" />,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    value: "offered",
    label: "Offered",
    icon: <CheckCircle2 className="h-4 w-4" />,
    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    value: "hired",
    label: "Hired",
    icon: <UserCheck className="h-4 w-4" />,
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  },
  {
    value: "rejected",
    label: "Rejected",
    icon: <UserX className="h-4 w-4" />,
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  },
]

// Mock data for candidates
const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "Olivia Johnson",
    email: "olivia.johnson@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Senior Frontend Developer",
    department: "Engineering",
    status: "shortlisted",
    matchScore: 92,
    appliedDate: "2023-05-04",
    lastActivity: "2023-05-15",
    tags: ["React", "TypeScript", "Remote"],
    source: "LinkedIn",
  },
  {
    id: "2",
    name: "James Wilson",
    email: "james.wilson@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Product Manager",
    department: "Product",
    status: "interviewing",
    matchScore: 78,
    appliedDate: "2023-05-10",
    lastActivity: "2023-05-18",
    tags: ["Product Strategy", "Agile", "Hybrid"],
    source: "Indeed",
  },
  {
    id: "3",
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "UX Designer",
    department: "Design",
    status: "shortlisted",
    matchScore: 85,
    appliedDate: "2023-05-15",
    lastActivity: "2023-05-20",
    tags: ["Figma", "User Research", "Remote"],
    source: "Referral",
  },
  {
    id: "4",
    name: "Liam Thompson",
    email: "liam.thompson@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Backend Engineer",
    department: "Engineering",
    status: "rejected",
    matchScore: 65,
    appliedDate: "2023-05-12",
    lastActivity: "2023-05-19",
    tags: ["Node.js", "Python", "On-site"],
    source: "Company Website",
  },
  {
    id: "5",
    name: "Emma Davis",
    email: "emma.davis@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Marketing Specialist",
    department: "Marketing",
    status: "interviewing",
    matchScore: 72,
    appliedDate: "2023-05-18",
    lastActivity: "2023-05-22",
    tags: ["Content Strategy", "SEO", "Hybrid"],
    source: "LinkedIn",
  },
  {
    id: "6",
    name: "Noah Garcia",
    email: "noah.garcia@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Senior Frontend Developer",
    department: "Engineering",
    status: "new",
    matchScore: 88,
    appliedDate: "2023-05-20",
    lastActivity: "2023-05-20",
    tags: ["React", "Vue", "Remote"],
    source: "Indeed",
  },
  {
    id: "7",
    name: "Ava Rodriguez",
    email: "ava.rodriguez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Product Manager",
    department: "Product",
    status: "new",
    matchScore: 58,
    appliedDate: "2023-05-21",
    lastActivity: "2023-05-21",
    tags: ["Product Development", "Scrum", "On-site"],
    source: "Referral",
  },
  {
    id: "8",
    name: "Ethan Brown",
    email: "ethan.brown@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "DevOps Engineer",
    department: "Engineering",
    status: "assessment",
    matchScore: 81,
    appliedDate: "2023-05-16",
    lastActivity: "2023-05-23",
    tags: ["AWS", "Docker", "Kubernetes", "Remote"],
    source: "LinkedIn",
  },
  {
    id: "9",
    name: "Isabella Lee",
    email: "isabella.lee@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Data Scientist",
    department: "Data",
    status: "offered",
    matchScore: 94,
    appliedDate: "2023-05-08",
    lastActivity: "2023-05-24",
    tags: ["Python", "Machine Learning", "Hybrid"],
    source: "Company Website",
  },
  {
    id: "10",
    name: "Mason Clark",
    email: "mason.clark@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Frontend Developer",
    department: "Engineering",
    status: "screening",
    matchScore: 76,
    appliedDate: "2023-05-19",
    lastActivity: "2023-05-22",
    tags: ["JavaScript", "React", "CSS", "Remote"],
    source: "Indeed",
  },
  {
    id: "11",
    name: "Charlotte Walker",
    email: "charlotte.walker@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Content Writer",
    department: "Marketing",
    status: "hired",
    matchScore: 89,
    appliedDate: "2023-05-05",
    lastActivity: "2023-05-25",
    tags: ["Content Creation", "SEO", "Remote"],
    source: "Referral",
  },
  {
    id: "12",
    name: "Lucas Hall",
    email: "lucas.hall@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "UI Designer",
    department: "Design",
    status: "rejected",
    matchScore: 62,
    appliedDate: "2023-05-14",
    lastActivity: "2023-05-21",
    tags: ["Figma", "Adobe XD", "On-site"],
    source: "LinkedIn",
  },
]

// Department options
const departmentOptions = [
  { value: "all", label: "All Departments" },
  { value: "Engineering", label: "Engineering" },
  { value: "Product", label: "Product" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Data", label: "Data" },
  { value: "Sales", label: "Sales" },
  { value: "HR", label: "HR" },
]

// Position options
const positionOptions = [
  { value: "all", label: "All Positions" },
  { value: "Senior Frontend Developer", label: "Senior Frontend Developer" },
  { value: "Frontend Developer", label: "Frontend Developer" },
  { value: "Backend Engineer", label: "Backend Engineer" },
  { value: "DevOps Engineer", label: "DevOps Engineer" },
  { value: "Product Manager", label: "Product Manager" },
  { value: "UX Designer", label: "UX Designer" },
  { value: "UI Designer", label: "UI Designer" },
  { value: "Marketing Specialist", label: "Marketing Specialist" },
  { value: "Content Writer", label: "Content Writer" },
  { value: "Data Scientist", label: "Data Scientist" },
]

// Source options
const sourceOptions = [
  { value: "all", label: "All Sources" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Indeed", label: "Indeed" },
  { value: "Referral", label: "Referral" },
  { value: "Company Website", label: "Company Website" },
  { value: "Job Fair", label: "Job Fair" },
  { value: "Other", label: "Other" },
]

export function CandidatesView() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get URL parameters or set defaults
  const currentStatus = searchParams.get("status") || "all"
  const currentDepartment = searchParams.get("department") || "all"
  const currentPosition = searchParams.get("position") || "all"
  const currentSource = searchParams.get("source") || "all"
  const currentPage = Number(searchParams.get("page") || "1")
  const currentSearch = searchParams.get("search") || ""
  const currentSort = searchParams.get("sort") || "appliedDate"
  const currentOrder = searchParams.get("order") || "desc"
  const currentView = searchParams.get("view") || "table"

  // State for selected candidates
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([])
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false)
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: undefined,
    to: undefined,
  })

  // State for search input
  const [searchInput, setSearchInput] = useState(currentSearch)

  // Items per page
  const itemsPerPage = 10

  // Update URL with filters
  const updateFilters = (params: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams.toString())

    // Update or delete parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value === "all" || value === "") {
        newParams.delete(key)
      } else {
        newParams.set(key, value)
      }
    })

    // Reset to page 1 when filters change
    if (!params.hasOwnProperty("page")) {
      newParams.delete("page")
    }

    router.push(`${pathname}?${newParams.toString()}`)
  }

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateFilters({ search: searchInput, page: "1" })
  }

  // Handle sort change
  const handleSort = (column: string) => {
    const newOrder = currentSort === column && currentOrder === "asc" ? "desc" : "asc"
    updateFilters({ sort: column, order: newOrder })
  }

  // Handle checkbox selection
  const toggleSelectCandidate = (id: string) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((candidateId) => candidateId !== id) : [...prev, id],
    )
  }

  // Handle select all
  const toggleSelectAll = () => {
    if (selectedCandidates.length === filteredCandidates.length) {
      setSelectedCandidates([])
    } else {
      setSelectedCandidates(filteredCandidates.map((c) => c.id))
    }
  }

  // Apply filters to candidates
  const filteredCandidates = mockCandidates.filter((candidate) => {
    // Filter by status
    if (currentStatus !== "all" && candidate.status !== currentStatus) {
      return false
    }

    // Filter by department
    if (currentDepartment !== "all" && candidate.department !== currentDepartment) {
      return false
    }

    // Filter by position
    if (currentPosition !== "all" && candidate.position !== currentPosition) {
      return false
    }

    // Filter by source
    if (currentSource !== "all" && candidate.source !== currentSource) {
      return false
    }

    // Filter by search term
    if (
      currentSearch &&
      !candidate.name.toLowerCase().includes(currentSearch.toLowerCase()) &&
      !candidate.email.toLowerCase().includes(currentSearch.toLowerCase()) &&
      !candidate.position.toLowerCase().includes(currentSearch.toLowerCase())
    ) {
      return false
    }

    // Filter by date range
    if (dateRange.from && new Date(candidate.appliedDate) < dateRange.from) {
      return false
    }
    if (dateRange.to && new Date(candidate.appliedDate) > dateRange.to) {
      return false
    }

    return true
  })

  // Sort candidates
  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    const aValue = a[currentSort as keyof Candidate]
    const bValue = b[currentSort as keyof Candidate]

    if (typeof aValue === "string" && typeof bValue === "string") {
      return currentOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    } else if (typeof aValue === "number" && typeof bValue === "number") {
      return currentOrder === "asc" ? aValue - bValue : bValue - aValue
    } else {
      // Default to string comparison
      return currentOrder === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue))
    }
  })

  // Paginate candidates
  const totalPages = Math.ceil(sortedCandidates.length / itemsPerPage)
  const paginatedCandidates = sortedCandidates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Generate pagination items
  const paginationItems: (number | string)[] = []
  const maxPaginationItems = 5

  if (totalPages <= maxPaginationItems) {
    // Show all pages if total pages is less than max items
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(i)
    }
  } else {
    // Show first page, last page, and pages around current page
    paginationItems.push(1)

    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)

    if (start > 2) {
      paginationItems.push("ellipsis")
    }

    for (let i = start; i <= end; i++) {
      paginationItems.push(i)
    }

    if (end < totalPages - 1) {
      paginationItems.push("ellipsis")
    }

    paginationItems.push(totalPages)
  }

  // Reset selected candidates when filters change
  useEffect(() => {
    setSelectedCandidates([])
  }, [currentStatus, currentDepartment, currentPosition, currentSearch, currentPage])

  // Update search input when URL changes
  useEffect(() => {
    setSearchInput(currentSearch)
  }, [currentSearch])

  // Get status badge color
  const getStatusBadge = (status: string) => {
    const statusOption = statusOptions.find((option) => option.value === status)
    return (
      <div className="flex items-center gap-1.5">
        {statusOption?.icon}
        <span>{statusOption?.label || status}</span>
      </div>
    )
  }

  // Get status badge color class
  const getStatusColorClass = (status: string) => {
    const statusOption = statusOptions.find((option) => option.value === status)
    return statusOption?.color || "bg-secondary text-secondary-foreground"
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  // Calculate days since application
  const getDaysSince = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // Render function for candidate content based on view
  function renderCandidateContent() {
    return (
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>
            {currentStatus === "all"
              ? "All Candidates"
              : `${statusOptions.find((s) => s.value === currentStatus)?.label} Candidates`}
          </CardTitle>
          <CardDescription>
            {filteredCandidates.length} candidate{filteredCandidates.length !== 1 ? "s" : ""} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredCandidates.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="rounded-full bg-muted p-3">
                <UserX className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">No candidates found</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                Try adjusting your filters or search criteria to find candidates.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  updateFilters({
                    status: "all",
                    department: "all",
                    position: "all",
                    source: "all",
                    search: "",
                    page: "1",
                  })
                  setDateRange({ from: undefined, to: undefined })
                }}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset Filters
              </Button>
            </div>
          ) : currentView === "table" ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40px]">
                      <Checkbox
                        checked={
                          selectedCandidates.length === paginatedCandidates.length && paginatedCandidates.length > 0
                        }
                        onCheckedChange={toggleSelectAll}
                        aria-label="Select all candidates"
                      />
                    </TableHead>
                    <TableHead>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 p-0 font-medium"
                        onClick={() => handleSort("name")}
                      >
                        Candidate
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Position</TableHead>
                    <TableHead>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 p-0 font-medium"
                        onClick={() => handleSort("status")}
                      >
                        Status
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead className="hidden lg:table-cell">
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 p-0 font-medium"
                        onClick={() => handleSort("matchScore")}
                      >
                        Match
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 p-0 font-medium"
                        onClick={() => handleSort("appliedDate")}
                      >
                        Applied
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedCandidates.map((candidate) => (
                    <TableRow key={candidate.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedCandidates.includes(candidate.id)}
                          onCheckedChange={() => toggleSelectCandidate(candidate.id)}
                          aria-label={`Select ${candidate.name}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={candidate.avatar} alt={candidate.name} />
                            <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{candidate.name}</div>
                            <div className="text-xs text-muted-foreground">{candidate.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div>
                          <div>{candidate.position}</div>
                          <div className="text-xs text-muted-foreground">{candidate.department}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={cn("gap-1", getStatusColorClass(candidate.status))}>
                          {getStatusBadge(candidate.status)}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div
                          className={`w-12 text-center font-medium rounded-full px-2 py-1 text-xs ${
                            candidate.matchScore >= 80
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : candidate.matchScore >= 60
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          }`}
                        >
                          {candidate.matchScore}%
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <div>
                          <div>{formatDate(candidate.appliedDate)}</div>
                          <div className="text-xs text-muted-foreground">
                            {getDaysSince(candidate.appliedDate)} days ago
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-end">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" asChild>
                                  <Link href={`/dashboard/candidates/${candidate.id}`}>
                                    <Eye className="h-4 w-4" />
                                    <span className="sr-only">View candidate</span>
                                  </Link>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View candidate profile</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
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
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginatedCandidates.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  isSelected={selectedCandidates.includes(candidate.id)}
                  onSelect={() => toggleSelectCandidate(candidate.id)}
                  getStatusColorClass={getStatusColorClass}
                  getStatusBadge={getStatusBadge}
                  formatDate={formatDate}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) {
                        updateFilters({ page: String(currentPage - 1) })
                      }
                    }}
                    className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {paginationItems.map((item, index) =>
                  item === "ellipsis" ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={item}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          updateFilters({ page: String(item) })
                        }}
                        isActive={currentPage === item}
                      >
                        {item}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < totalPages) {
                        updateFilters({ page: String(currentPage + 1) })
                      }
                    }}
                    className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Tabs
      defaultValue={currentStatus}
      value={currentStatus}
      onValueChange={(value) => updateFilters({ status: value, page: "1" })}
      className="space-y-4"
    >
      <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
        {statusOptions.map((status) => (
          <TabsTrigger
            key={status.value}
            value={status.value}
            className={cn(
              "rounded-md border data-[state=active]:border-primary",
              "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
            )}
          >
            <div className="flex items-center gap-1.5">
              {status.icon}
              <span>{status.label}</span>
              {status.value !== "all" && (
                <Badge variant="outline" className="ml-1 rounded-sm px-1">
                  {mockCandidates.filter((c) => c.status === status.value).length}
                </Badge>
              )}
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="all" className="m-0">
        {renderCandidateContent()}
      </TabsContent>

      {statusOptions.slice(1).map((status) => (
        <TabsContent key={status.value} value={status.value} className="m-0">
          {renderCandidateContent()}
        </TabsContent>
      ))}
    </Tabs>
  )
}
