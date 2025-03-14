"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowUpRight,
  Bookmark,
  BookmarkCheck,
  BriefcaseIcon,
  Calendar,
  ChevronRight,
  Clock,
  Filter,
  MapPin,
  Search,
} from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type Job = {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
  requirements: string[]
  postedDate: string
  matchPercentage: number
  isSaved: boolean
  isRemote: boolean
  experience: string
  department: string
}

export function JobSearch() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechGlobe Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $150K",
      description:
        "We're looking for a Senior Frontend Developer with expertise in React, TypeScript, and modern frontend frameworks to join our growing team. You'll be responsible for building and maintaining high-quality web applications, collaborating with cross-functional teams, and mentoring junior developers.",
      requirements: [
        "5+ years of experience with JavaScript and modern frameworks",
        "Strong proficiency with React and TypeScript",
        "Experience with state management libraries (Redux, MobX, etc.)",
        "Knowledge of responsive design and cross-browser compatibility",
        "Excellent problem-solving and communication skills",
      ],
      postedDate: "2 days ago",
      matchPercentage: 92,
      isSaved: false,
      isRemote: true,
      experience: "5+ years",
      department: "Engineering",
    },
    {
      id: "2",
      title: "UI/UX Designer",
      company: "Creative Solutions",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90K - $110K",
      description:
        "Join our design team to create beautiful, intuitive user interfaces for our digital products. You'll work closely with product managers, developers, and other designers to deliver exceptional user experiences across web and mobile platforms.",
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency with design tools (Figma, Sketch, Adobe XD)",
        "Strong portfolio demonstrating your design process",
        "Experience with design systems and component libraries",
        "Knowledge of user research and usability testing",
      ],
      postedDate: "1 week ago",
      matchPercentage: 87,
      isSaved: true,
      isRemote: false,
      experience: "3+ years",
      department: "Design",
    },
    {
      id: "3",
      title: "Product Manager",
      company: "Innovate Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$130K - $160K",
      description:
        "Lead product development cycles from concept to launch. Work with cross-functional teams to deliver user-centered products that drive business growth. Define product vision, strategy, and roadmap based on market research and user feedback.",
      requirements: [
        "4+ years of product management experience",
        "Strong analytical and problem-solving skills",
        "Experience with agile development methodologies",
        "Excellent communication and stakeholder management",
        "Technical background preferred",
      ],
      postedDate: "3 days ago",
      matchPercentage: 85,
      isSaved: false,
      isRemote: true,
      experience: "4+ years",
      department: "Product",
    },
    {
      id: "4",
      title: "Full Stack Developer",
      company: "Tech Startups Ltd.",
      location: "Austin, TX",
      type: "Contract",
      salary: "$100K - $130K",
      description:
        "Build scalable web applications using modern technologies. Contribute to both frontend and backend development with a focus on performance and user experience. Work in a fast-paced startup environment with opportunities for growth and learning.",
      requirements: [
        "3+ years of full stack development experience",
        "Proficiency with JavaScript/TypeScript, React, and Node.js",
        "Experience with databases (SQL and NoSQL)",
        "Knowledge of cloud services (AWS, Azure, or GCP)",
        "Strong problem-solving skills and attention to detail",
      ],
      postedDate: "1 week ago",
      matchPercentage: 82,
      isSaved: false,
      isRemote: false,
      experience: "3+ years",
      department: "Engineering",
    },
    {
      id: "5",
      title: "DevOps Engineer",
      company: "Cloud Systems Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$110K - $140K",
      description:
        "Join our DevOps team to build and maintain our cloud infrastructure. You'll be responsible for implementing CI/CD pipelines, automating deployment processes, and ensuring the reliability and scalability of our systems.",
      requirements: [
        "3+ years of experience in DevOps or SRE roles",
        "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
        "Experience with containerization (Docker, Kubernetes)",
        "Proficiency with infrastructure as code (Terraform, CloudFormation)",
        "Scripting skills (Python, Bash, etc.)",
      ],
      postedDate: "2 weeks ago",
      matchPercentage: 78,
      isSaved: false,
      isRemote: true,
      experience: "3+ years",
      department: "Engineering",
    },
    {
      id: "6",
      title: "Data Scientist",
      company: "Data Insights Co.",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$115K - $145K",
      description:
        "Analyze complex datasets to extract insights and drive business decisions. Develop and implement machine learning models to solve real-world problems. Collaborate with cross-functional teams to communicate findings and implement solutions.",
      requirements: [
        "Master's or PhD in a quantitative field",
        "3+ years of experience in data science or related field",
        "Proficiency with Python and data science libraries",
        "Experience with machine learning and statistical modeling",
        "Strong communication and data visualization skills",
      ],
      postedDate: "3 weeks ago",
      matchPercentage: 75,
      isSaved: true,
      isRemote: false,
      experience: "3+ years",
      department: "Data",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    jobType: [] as string[],
    location: [] as string[],
    remote: false,
    experience: [] as string[],
    salary: [0, 200] as [number, number],
    department: [] as string[],
    postedDate: [] as string[],
  })

  const toggleSaveJob = (jobId: string) => {
    setJobs(jobs.map((job) => (job.id === jobId ? { ...job, isSaved: !job.isSaved } : job)))
  }

  const filteredJobs = jobs.filter((job) => {
    // Search term filter
    if (
      searchTerm &&
      !job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.company.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Job type filter
    if (filters.jobType.length > 0 && !filters.jobType.includes(job.type)) {
      return false
    }

    // Location filter
    if (filters.location.length > 0 && !filters.location.some((loc) => job.location.includes(loc))) {
      return false
    }

    // Remote filter
    if (filters.remote && !job.isRemote) {
      return false
    }

    // Experience filter
    if (filters.experience.length > 0 && !filters.experience.some((exp) => job.experience.includes(exp))) {
      return false
    }

    // Salary filter
    const minSalary = Number.parseInt(job.salary.replace(/[^0-9]/g, "").substring(0, 3))
    if (minSalary < filters.salary[0] || minSalary > filters.salary[1]) {
      return false
    }

    // Department filter
    if (filters.department.length > 0 && !filters.department.includes(job.department)) {
      return false
    }

    // Posted date filter
    if (filters.postedDate.length > 0) {
      const isRecent = job.postedDate.includes("day") || job.postedDate.includes("hour")
      const isWithinWeek = job.postedDate.includes("week") && Number.parseInt(job.postedDate) <= 1
      const isWithinMonth = job.postedDate.includes("week") && Number.parseInt(job.postedDate) <= 4

      if (
        (filters.postedDate.includes("24h") && !job.postedDate.includes("day") && !job.postedDate.includes("hour")) ||
        (filters.postedDate.includes("week") && !isRecent && !isWithinWeek) ||
        (filters.postedDate.includes("month") && !isRecent && !isWithinWeek && !isWithinMonth)
      ) {
        return false
      }
    }

    return true
  })

  const handleFilterChange = (key: keyof typeof filters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const toggleFilter = (key: "jobType" | "location" | "experience" | "department" | "postedDate", value: string) => {
    setFilters((prev) => {
      const currentValues = prev[key]
      return {
        ...prev,
        [key]: currentValues.includes(value) ? currentValues.filter((v) => v !== value) : [...currentValues, value],
      }
    })
  }

  const clearFilters = () => {
    setFilters({
      jobType: [],
      location: [],
      remote: false,
      experience: [],
      salary: [0, 200],
      department: [],
      postedDate: [],
    })
    setSearchTerm("")
  }

  const activeFilterCount =
    filters.jobType.length +
    filters.location.length +
    filters.experience.length +
    filters.department.length +
    filters.postedDate.length +
    (filters.remote ? 1 : 0) +
    (filters.salary[0] > 0 || filters.salary[1] < 200 ? 1 : 0)

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs, companies, or keywords"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <Badge className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filter Jobs</SheetTitle>
                <SheetDescription>Refine your job search results</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">Active Filters: {activeFilterCount}</h3>
                  {activeFilterCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear All
                    </Button>
                  )}
                </div>

                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="job-type">
                    <AccordionTrigger>Job Type</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["Full-time", "Part-time", "Contract", "Freelance", "Internship"].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                              id={`job-type-${type}`}
                              checked={filters.jobType.includes(type)}
                              onCheckedChange={() => toggleFilter("jobType", type)}
                            />
                            <Label htmlFor={`job-type-${type}`}>{type}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="location">
                    <AccordionTrigger>Location</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["San Francisco", "New York", "Remote", "Austin", "Chicago"].map((location) => (
                          <div key={location} className="flex items-center space-x-2">
                            <Checkbox
                              id={`location-${location}`}
                              checked={filters.location.includes(location)}
                              onCheckedChange={() => toggleFilter("location", location)}
                            />
                            <Label htmlFor={`location-${location}`}>{location}</Label>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <Switch
                          id="remote-only"
                          checked={filters.remote}
                          onCheckedChange={(checked) => handleFilterChange("remote", checked)}
                        />
                        <Label htmlFor="remote-only">Remote Only</Label>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="experience">
                    <AccordionTrigger>Experience Level</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["Entry Level", "1+ years", "3+ years", "5+ years", "7+ years", "10+ years"].map((exp) => (
                          <div key={exp} className="flex items-center space-x-2">
                            <Checkbox
                              id={`exp-${exp}`}
                              checked={filters.experience.includes(exp)}
                              onCheckedChange={() => toggleFilter("experience", exp)}
                            />
                            <Label htmlFor={`exp-${exp}`}>{exp}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="salary">
                    <AccordionTrigger>Salary Range ($K)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>${filters.salary[0]}K</span>
                          <span>${filters.salary[1]}K</span>
                        </div>
                        <Slider
                          min={0}
                          max={200}
                          step={10}
                          value={[filters.salary[0], filters.salary[1]]}
                          onValueChange={(value) => handleFilterChange("salary", value)}
                          className="my-4"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="department">
                    <AccordionTrigger>Department</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["Engineering", "Design", "Product", "Marketing", "Sales", "Data", "HR"].map((dept) => (
                          <div key={dept} className="flex items-center space-x-2">
                            <Checkbox
                              id={`dept-${dept}`}
                              checked={filters.department.includes(dept)}
                              onCheckedChange={() => toggleFilter("department", dept)}
                            />
                            <Label htmlFor={`dept-${dept}`}>{dept}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="date-posted">
                    <AccordionTrigger>Date Posted</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {[
                          { id: "24h", label: "Last 24 hours" },
                          { id: "week", label: "Last week" },
                          { id: "month", label: "Last month" },
                        ].map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={`date-${option.id}`}
                              checked={filters.postedDate.includes(option.id)}
                              onCheckedChange={() => toggleFilter("postedDate", option.id)}
                            />
                            <Label htmlFor={`date-${option.id}`}>{option.label}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="pt-4 border-t">
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="salary-high">Highest Salary</SelectItem>
              <SelectItem value="salary-low">Lowest Salary</SelectItem>
              <SelectItem value="match">Best Match</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Jobs</TabsTrigger>
          <TabsTrigger value="matches">Best Matches</TabsTrigger>
          <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
          <TabsTrigger value="applied">Applied Jobs</TabsTrigger>
        </TabsList>

        <div className="text-sm text-muted-foreground">
          Showing {filteredJobs.length} jobs
          {activeFilterCount > 0 && ` with ${activeFilterCount} active filters`}
        </div>

        <TabsContent value="all" className="space-y-4">
          {filteredJobs.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                <Search className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No jobs found</h3>
                <p className="text-sm text-muted-foreground max-w-md mt-2">
                  We couldn't find any jobs matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} onSaveToggle={toggleSaveJob} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="matches" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs
              .filter((job) => job.matchPercentage >= 80)
              .sort((a, b) => b.matchPercentage - a.matchPercentage)
              .map((job) => (
                <JobCard key={job.id} job={job} onSaveToggle={toggleSaveJob} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs
              .filter((job) => job.isSaved)
              .map((job) => (
                <JobCard key={job.id} job={job} onSaveToggle={toggleSaveJob} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="applied" className="space-y-4">
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-10 text-center">
              <Calendar className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No applications yet</h3>
              <p className="text-sm text-muted-foreground max-w-md mt-2">
                You haven't applied to any jobs yet. Start your job search and apply to positions that match your skills
                and interests.
              </p>
              <Button className="mt-4">Browse Jobs</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function JobCard({ job, onSaveToggle }: { job: Job; onSaveToggle: (id: string) => void }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <CardDescription>{job.company}</CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onSaveToggle(job.id)}>
              {job.isSaved ? <BookmarkCheck className="h-5 w-5 text-primary" /> : <Bookmark className="h-5 w-5" />}
              <span className="sr-only">{job.isSaved ? "Unsave" : "Save"} job</span>
            </Button>
            <Badge
              className={
                job.matchPercentage >= 90
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : job.matchPercentage >= 80
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    : job.matchPercentage >= 70
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              }
            >
              {job.matchPercentage}% Match
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2 text-sm mb-3">
          <div className="flex items-center">
            <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <BriefcaseIcon className="mr-1 h-3 w-3 text-muted-foreground" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center">
            <ArrowUpRight className="mr-1 h-3 w-3 text-muted-foreground" />
            <span>{job.salary}</span>
          </div>
        </div>
        <div className="mt-2">
          <p className="line-clamp-3 text-sm text-muted-foreground">{job.description}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {job.requirements.slice(0, 3).map((req, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {req.split(" ")[0]}
            </Badge>
          ))}
          {job.requirements.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{job.requirements.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4 pb-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          <span>Posted {job.postedDate}</span>
        </div>
        <Button asChild>
          <Link href={`/candidate/jobs/${job.id}`}>
            View Job <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

