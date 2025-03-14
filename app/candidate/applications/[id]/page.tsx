"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseIcon,
  Building,
  Calendar,
  Check,
  CheckCircle,
  ChevronRight,
  Clock,
  File,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  X,
} from "lucide-react"

interface PageProps {
  params: {
    id: string;
  };
}

export default function ApplicationDetailPage({ params }: PageProps) {
  // In a real app, you would fetch the application data based on the ID
  const application = {
    id: params.id,
    jobTitle: "Senior Frontend Developer",
    company: "TechGlobe Inc.",
    companyLogo: "/placeholder.svg?height=50&width=50",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $150K",
    appliedDate: "May 15, 2023",
    status: "Interview",
    lastUpdated: "2 days ago",
    nextStep: "Technical Interview",
    nextStepDate: "May 28, 2023",
    jobDescription:
      "We're looking for a Senior Frontend Developer with expertise in React, TypeScript, and modern frontend frameworks to join our growing team. You'll be responsible for building and maintaining high-quality web applications, collaborating with cross-functional teams, and mentoring junior developers.",
    timeline: [
      {
        stage: "Application Submitted",
        date: "May 15, 2023",
        status: "completed",
        notes: "Your application was received and is being reviewed.",
      },
      {
        stage: "Resume Screening",
        date: "May 17, 2023",
        status: "completed",
        notes: "Your resume has been reviewed and selected for further consideration.",
      },
      {
        stage: "Phone Screening",
        date: "May 20, 2023",
        status: "completed",
        notes: "You've successfully completed the phone screening with our recruiter.",
      },
      {
        stage: "Technical Interview",
        date: "May 28, 2023",
        status: "upcoming",
        notes: "You've been invited for a technical interview with our engineering team.",
      },
      {
        stage: "Final Interview",
        date: "",
        status: "pending",
        notes: "",
      },
      {
        stage: "Decision",
        date: "",
        status: "pending",
        notes: "",
      },
    ],
    documents: [
      {
        name: "Resume",
        type: "PDF",
        size: "1.2 MB",
        uploadDate: "May 15, 2023",
      },
      {
        name: "Cover Letter",
        type: "PDF",
        size: "0.8 MB",
        uploadDate: "May 15, 2023",
      },
      {
        name: "Portfolio",
        type: "URL",
        size: "",
        uploadDate: "May 15, 2023",
      },
    ],
    messages: [
      {
        id: "1",
        sender: "Sarah Thompson",
        senderRole: "HR Manager",
        date: "May 17, 2023",
        content:
          "Thank you for applying to the Senior Frontend Developer position at TechGlobe Inc. We've reviewed your application and would like to schedule a phone screening to discuss your background and experience.",
      },
      {
        id: "2",
        sender: "Alex Morgan",
        senderRole: "You",
        date: "May 17, 2023",
        content:
          "Thank you for considering my application. I'm available for a phone screening and look forward to discussing the opportunity further.",
      },
      {
        id: "3",
        sender: "Sarah Thompson",
        senderRole: "HR Manager",
        date: "May 18, 2023",
        content:
          "Great! I've scheduled a phone screening for May 20, 2023, at 2:00 PM PST. Please confirm if this time works for you.",
      },
      {
        id: "4",
        sender: "Alex Morgan",
        senderRole: "You",
        date: "May 18, 2023",
        content: "The scheduled time works perfectly for me. I'll be available at 2:00 PM PST on May 20.",
      },
      {
        id: "5",
        sender: "Sarah Thompson",
        senderRole: "HR Manager",
        date: "May 21, 2023",
        content:
          "Thank you for your time during the phone screening yesterday. We'd like to invite you for a technical interview with our engineering team. The interview will be conducted via Zoom and will include a coding exercise and discussion about your technical experience.",
      },
    ],
    contacts: [
      {
        name: "Sarah Thompson",
        role: "HR Manager",
        email: "sarah.thompson@techglobe-example.com",
        phone: "(555) 123-4567",
      },
      {
        name: "Michael Chen",
        role: "Technical Recruiter",
        email: "michael.chen@techglobe-example.com",
        phone: "(555) 987-6543",
      },
    ],
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/candidate/applications">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Application Details</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-2xl">{application.jobTitle}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Building className="mr-1 h-4 w-4" />
                    {application.company}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" />
                      {application.location}
                    </Badge>
                    <Badge variant="outline" className="flex items-center">
                      <BriefcaseIcon className="mr-1 h-3 w-3" />
                      {application.type}
                    </Badge>
                    <Badge variant="outline" className="flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      {application.salary}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge
                    className={
                      application.status === "Interview"
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                        : ""
                    }
                  >
                    {application.status}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>Applied: {application.appliedDate}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Application Timeline</h3>
                  <div className="relative pl-6 border-l">
                    <div className="space-y-6">
                      {application.timeline.map((step, index) => (
                        <div key={index} className="relative">
                          <div
                            className={`absolute -left-[29px] h-6 w-6 rounded-full flex items-center justify-center ${
                              step.status === "completed"
                                ? "bg-primary"
                                : step.status === "upcoming"
                                  ? "bg-blue-500"
                                  : "bg-muted"
                            }`}
                          >
                            {step.status === "completed" ? (
                              <Check className="h-3 w-3 text-primary-foreground" />
                            ) : step.status === "upcoming" ? (
                              <Clock className="h-3 w-3 text-primary-foreground" />
                            ) : (
                              <div className="h-3 w-3" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium">{step.stage}</h4>
                            <p className="text-sm text-muted-foreground">{step.date || "Pending"}</p>
                            {step.notes && <p className="text-sm mt-1">{step.notes}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-2">Next Steps</h3>
                  {application.nextStep ? (
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <Clock className="h-5 w-5" />
                        <h4 className="font-medium">{application.nextStep}</h4>
                      </div>
                      <p className="text-sm mt-1">Scheduled for {application.nextStepDate}</p>
                      <div className="mt-4 flex gap-2">
                        <Button>Prepare for Interview</Button>
                        <Button variant="outline">Reschedule</Button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No upcoming steps at this time.</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="messages" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="job-details">Job Details</TabsTrigger>
            </TabsList>

            <TabsContent value="messages" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Communication History</CardTitle>
                  <CardDescription>Messages exchanged regarding your application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {application.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`rounded-lg p-4 ${message.senderRole === "You" ? "bg-primary/10 ml-8" : "border"}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{message.sender}</h4>
                          <p className="text-xs text-muted-foreground">{message.senderRole}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{message.date}</p>
                      </div>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="flex flex-col gap-4 border-t pt-4">
                  <div className="w-full">
                    <textarea
                      className="w-full min-h-[100px] p-3 rounded-md border border-input bg-transparent text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end w-full">
                    <Button>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Application Documents</CardTitle>
                  <CardDescription>Documents you've submitted with your application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {application.documents.map((doc, index) => (
                      <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <h4 className="font-medium">{doc.name}</h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              {doc.type && <span>{doc.type}</span>}
                              {doc.size && <span>•</span>}
                              {doc.size && <span>{doc.size}</span>}
                              <span>•</span>
                              <span>Uploaded on {doc.uploadDate}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="outline">
                    <File className="mr-2 h-4 w-4" />
                    Upload Additional Document
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="job-details" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Job Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{application.jobDescription}</p>
                  <div className="mt-4">
                    <Button variant="outline" asChild>
                      <Link href={`/candidate/jobs/${params.id}`}>
                        View Full Job Details <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current Stage</span>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    {application.status}
                  </Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Applied On</span>
                  <span>{application.appliedDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span>{application.lastUpdated}</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Application Progress</h3>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-1/2"></div>
                </div>
                <p className="text-xs text-muted-foreground">You're halfway through the application process</p>
              </div>

              <div className="pt-2 space-y-2">
                <Button className="w-full" asChild>
                  <Link href={`/candidate/applications/${params.id}/prepare`}>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Prepare for Interview
                  </Link>
                </Button>
                <Button variant="outline" className="w-full text-destructive hover:text-destructive">
                  <X className="mr-2 h-4 w-4" />
                  Withdraw Application
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Contacts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {application.contacts.map((contact, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground">{contact.role}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${contact.email}`} className="hover:underline">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${contact.phone}`} className="hover:underline">
                      {contact.phone}
                    </a>
                  </div>
                  {index < application.contacts.length - 1 && <Separator className="my-2" />}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you have any questions about your application or need assistance, our support team is here to help.
              </p>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
