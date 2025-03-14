import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Download, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award } from "lucide-react"
import { ResumeViewer } from "@/components/applications/resume-viewer"
import { AIAnalysis } from "@/components/applications/ai-analysis"

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the application data based on the ID
  const application = {
    id: params.id,
    candidate: {
      name: "Olivia Johnson",
      avatar: "/placeholder.svg?height=128&width=128",
      email: "olivia.johnson@example.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      resumeUrl: "#",
    },
    position: "Senior Frontend Developer",
    department: "Engineering",
    appliedDate: "May 4, 2023",
    status: "Qualified",
    matchScore: 92,
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 98 },
      { name: "HTML/CSS", level: 85 },
      { name: "Node.js", level: 75 },
    ],
    experience: [
      {
        company: "Tech Innovations Inc.",
        position: "Frontend Developer",
        duration: "2019 - 2023",
        description:
          "Led development of responsive web applications using React and TypeScript. Implemented state management with Redux and optimized performance.",
      },
      {
        company: "Digital Solutions LLC",
        position: "Web Developer",
        duration: "2016 - 2019",
        description:
          "Developed and maintained client websites. Collaborated with designers to implement UI/UX improvements.",
      },
    ],
    education: [
      {
        institution: "University of California, Berkeley",
        degree: "B.S. Computer Science",
        year: "2016",
      },
    ],
    certifications: ["AWS Certified Developer", "React Certification"],
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/applications">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h2 className="text-3xl font-bold tracking-tight">Application Details</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button>Schedule Interview</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={application.candidate.avatar} alt={application.candidate.name} />
                <AvatarFallback>{application.candidate.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{application.candidate.name}</CardTitle>
              <CardDescription className="text-md">{application.position}</CardDescription>
              <div className="mt-2 flex items-center gap-2">
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
                <div
                  className={`text-center font-medium rounded-full px-2 py-1 text-xs ${
                    application.matchScore >= 80
                      ? "bg-green-100 text-green-800"
                      : application.matchScore >= 60
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {application.matchScore}% Match
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{application.candidate.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{application.candidate.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{application.candidate.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Applied: {application.appliedDate}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Skills</h4>
                <div className="space-y-3">
                  {application.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Certifications</h4>
                <div className="space-y-2">
                  {application.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="ai-analysis">AI Analysis</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {application.experience.map((exp, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-start">
                          <Briefcase className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium">{exp.position}</h4>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                              <span>{exp.company}</span>
                              <span>•</span>
                              <span>{exp.duration}</span>
                            </div>
                            <p className="text-sm mt-1">{exp.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {application.education.map((edu, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-start">
                          <GraduationCap className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium">{edu.institution}</h4>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                              <span>{edu.degree}</span>
                              <span>•</span>
                              <span>{edu.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="resume" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resume</CardTitle>
                  <CardDescription>Original resume document submitted by the candidate</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResumeViewer />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ai-analysis" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI Analysis</CardTitle>
                  <CardDescription>AI-powered insights extracted from the candidate's resume</CardDescription>
                </CardHeader>
                <CardContent>
                  <AIAnalysis />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notes" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recruiter Notes</CardTitle>
                  <CardDescription>Internal notes and feedback about this candidate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md bg-muted p-4">
                      <div className="font-medium">Initial Screening Call</div>
                      <div className="text-sm text-muted-foreground">May 10, 2023 by Sarah Thompson</div>
                      <p className="mt-2 text-sm">
                        Candidate demonstrated strong technical knowledge and excellent communication skills. Has
                        experience with our tech stack and showed enthusiasm about our company mission. Recommend moving
                        forward to technical interview.
                      </p>
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <div className="font-medium">Technical Assessment</div>
                      <div className="text-sm text-muted-foreground">May 15, 2023 by Michael Chen</div>
                      <p className="mt-2 text-sm">
                        Completed coding challenge with high marks. Solution was well-structured and optimized. Code was
                        clean and well-documented. Demonstrated strong problem-solving skills.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

