"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, CalendarIcon, Check } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function ScheduleInterviewPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [date, setDate] = useState<Date>()
  const [showTimeOptions, setShowTimeOptions] = useState<boolean>(false)

  const handleScheduleInterview = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Interview scheduled",
      description: "The interview has been successfully scheduled.",
    })

    setIsLoading(false)
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center gap-2 mb-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/interviews">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Schedule Interview</h2>
      </div>

      <Card>
        <form onSubmit={handleScheduleInterview}>
          <CardHeader>
            <CardTitle>Interview Details</CardTitle>
            <CardDescription>Schedule an interview with a candidate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Select Candidate</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {candidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="flex items-center gap-3 p-3 rounded-md border cursor-pointer hover:bg-accent"
                  >
                    <Avatar>
                      <AvatarImage src={candidate.avatar} alt={candidate.name} />
                      <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{candidate.name}</div>
                      <div className="text-sm text-muted-foreground">{candidate.position}</div>
                    </div>
                    <RadioGroup defaultValue="default">
                      <RadioGroupItem value={candidate.id} id={`candidate-${candidate.id}`} />
                    </RadioGroup>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="interview-type">Interview Type</Label>
                <Select required>
                  <SelectTrigger id="interview-type">
                    <SelectValue placeholder="Select interview type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="initial">Initial Screening</SelectItem>
                    <SelectItem value="technical">Technical Interview</SelectItem>
                    <SelectItem value="behavioral">Behavioral Interview</SelectItem>
                    <SelectItem value="culture">Cultural Fit</SelectItem>
                    <SelectItem value="final">Final Interview</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interview-format">Interview Format</Label>
                <Select required>
                  <SelectTrigger id="interview-format">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Video Call</SelectItem>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="inperson">In-Person</SelectItem>
                    <SelectItem value="takehome">Take-Home Assessment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Interview Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(date) => {
                        setDate(date)
                        setShowTimeOptions(!!date)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Interview Time</Label>
                <Select disabled={!showTimeOptions} required>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00">9:00 AM</SelectItem>
                    <SelectItem value="9:30">9:30 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="10:30">10:30 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="11:30">11:30 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:30">1:30 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="14:30">2:30 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="15:30">3:30 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="16:30">4:30 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select defaultValue="60" required>
                <SelectTrigger id="duration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="90">1.5 hours</SelectItem>
                  <SelectItem value="120">2 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Interviewers</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {interviewers.map((interviewer) => (
                  <div key={interviewer.id} className="flex items-center gap-3 p-3 rounded-md border">
                    <Avatar>
                      <AvatarImage src={interviewer.avatar} alt={interviewer.name} />
                      <AvatarFallback>{interviewer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{interviewer.name}</div>
                      <div className="text-sm text-muted-foreground">{interviewer.role}</div>
                    </div>
                    <Switch id={`interviewer-${interviewer.id}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location or Meeting Link</Label>
              <Input id="location" placeholder="e.g., Conference Room A or https://meet.google.com/..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Interview Description</Label>
              <Textarea
                id="description"
                placeholder="Enter interview details, topics to be covered, or special instructions..."
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="send-calendar" defaultChecked />
              <Label htmlFor="send-calendar">Send calendar invitation to candidate and interviewers</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="send-reminder" defaultChecked />
              <Label htmlFor="send-reminder">Send reminder 1 hour before interview</Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => window.history.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className="gap-1">
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Scheduling...
                </>
              ) : (
                <>
                  <Check className="h-4 w-4" />
                  Schedule Interview
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

const candidates = [
  {
    id: "1",
    name: "Jessica Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "UX Designer",
    status: "Shortlisted",
  },
  {
    id: "2",
    name: "Robert Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Senior Frontend Developer",
    status: "Shortlisted",
  },
  {
    id: "3",
    name: "Emily Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Product Manager",
    status: "Shortlisted",
  },
  {
    id: "4",
    name: "Daniel Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    position: "Backend Engineer",
    status: "In Review",
  },
]

const interviewers = [
  {
    id: "1",
    name: "Sarah Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "HR Manager",
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Technical Lead",
  },
  {
    id: "3",
    name: "David Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Engineering Manager",
  },
  {
    id: "4",
    name: "Amanda Parker",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Design Director",
  },
]

