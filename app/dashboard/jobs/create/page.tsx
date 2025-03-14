"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { SkillsInput } from "@/components/jobs/skills-input"

export default function CreateJobPage() {
  const [activeTab, setActiveTab] = useState("details")

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Create New Job</h2>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="details">Job Details</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="preview">Preview & Publish</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the basic details about the job position</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="e.g. Senior Frontend Developer" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employment-type">Employment Type</Label>
                  <Select>
                    <SelectTrigger id="employment-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. Remote, New York, NY" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salary-range">Salary Range</Label>
                  <Input id="salary-range" placeholder="e.g. $80,000 - $120,000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="closing-date">Application Closing Date</Label>
                <Input id="closing-date" type="date" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button onClick={() => setActiveTab("requirements")}>Next: Requirements</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="requirements">
          <Card>
            <CardHeader>
              <CardTitle>Job Requirements</CardTitle>
              <CardDescription>Define the qualifications and skills needed for this position</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Required Skills</Label>
                <SkillsInput />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior Level (5-8 years)</SelectItem>
                    <SelectItem value="lead">Lead/Principal (8+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Select>
                  <SelectTrigger id="education">
                    <SelectValue placeholder="Select minimum education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="associate">Associate's Degree</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="none">No Specific Requirement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Additional Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="Enter any additional qualifications or requirements..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Certifications</Label>
                <div className="grid grid-cols-2 gap-2">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="flex items-center space-x-2">
                      <Checkbox id={`cert-${cert.id}`} />
                      <Label htmlFor={`cert-${cert.id}`} className="font-normal">
                        {cert.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("details")}>
                Previous: Details
              </Button>
              <Button onClick={() => setActiveTab("description")}>Next: Description</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="description">
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
              <CardDescription>Provide a detailed description of the job and responsibilities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="summary">Job Summary</Label>
                <Textarea id="summary" placeholder="Provide a brief overview of the position..." rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="responsibilities">Responsibilities</Label>
                <Textarea id="responsibilities" placeholder="List the key responsibilities for this role..." rows={6} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="benefits">Benefits & Perks</Label>
                <Textarea
                  id="benefits"
                  placeholder="Describe the benefits and perks offered with this position..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-info">About the Company</Label>
                <Textarea
                  id="company-info"
                  placeholder="Provide information about your company and culture..."
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("requirements")}>
                Previous: Requirements
              </Button>
              <Button onClick={() => setActiveTab("preview")}>Next: Preview & Publish</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>Preview & Publish</CardTitle>
              <CardDescription>Review your job posting before publishing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <span>Engineering</span>
                  <span>•</span>
                  <span>Full-time</span>
                  <span>•</span>
                  <span>Remote</span>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium">Job Summary</h4>
                  <p className="mt-1 text-sm">
                    We are looking for an experienced Frontend Developer to join our engineering team...
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium">Requirements</h4>
                  <ul className="mt-1 text-sm list-disc list-inside">
                    <li>5+ years of experience with modern JavaScript frameworks</li>
                    <li>Strong proficiency in React, TypeScript, and CSS</li>
                    <li>Experience with responsive design and cross-browser compatibility</li>
                    <li>Bachelor's degree in Computer Science or related field</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium">Responsibilities</h4>
                  <ul className="mt-1 text-sm list-disc list-inside">
                    <li>Develop and maintain frontend applications using React</li>
                    <li>Collaborate with designers and backend developers</li>
                    <li>Optimize applications for maximum performance</li>
                    <li>Ensure code quality through testing and code reviews</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Publishing Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="publish-now" />
                    <Label htmlFor="publish-now" className="font-normal">
                      Publish immediately
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-team" />
                    <Label htmlFor="notify-team" className="font-normal">
                      Notify team members
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="social-share" />
                    <Label htmlFor="social-share" className="font-normal">
                      Share on social media
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("description")}>
                Previous: Description
              </Button>
              <div className="space-x-2">
                <Button variant="outline">Save as Draft</Button>
                <Button>Publish Job</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const certifications = [
  { id: 1, name: "AWS Certified Solutions Architect" },
  { id: 2, name: "Google Cloud Professional" },
  { id: 3, name: "Microsoft Azure Administrator" },
  { id: 4, name: "Certified Scrum Master" },
  { id: 5, name: "PMP Certification" },
  { id: 6, name: "CISSP" },
]

