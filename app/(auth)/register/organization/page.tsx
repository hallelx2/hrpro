"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle2, Building2, Upload, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase } from "lucide-react"
import { toast } from "sonner"

export default function OrganizationRegistrationPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [logoFile, setLogoFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // Simulate registration delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (step < 3) {
      setStep(step + 1)
      setIsLoading(false)
      return
    }

    // For demo purposes, redirect to dashboard
    router.push("/dashboard")
    toast("Organization created successfully")

    setIsLoading(false)
  }

  return (
    <div className="container relative min-h-screen flex pt-10 pb-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px]">
        <div className="flex flex-col items-center space-y-2 text-center mb-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">JobHub</h1>
          </div>
          <p className="text-sm text-muted-foreground">Register your organization to start hiring talent</p>
        </div>

        <div className="relative mb-8">
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted"></div>
          <ol className="relative z-10 flex justify-between">
            <li className="flex items-center justify-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                  step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 1 ? <CheckCircle2 className="h-4 w-4" /> : "1"}
              </div>
              <span className="absolute mt-10 text-xs font-medium">Basic Info</span>
            </li>
            <li className="flex items-center justify-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                  step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 2 ? <CheckCircle2 className="h-4 w-4" /> : "2"}
              </div>
              <span className="absolute mt-10 text-xs font-medium">Company Details</span>
            </li>
            <li className="flex items-center justify-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                  step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                3
              </div>
              <span className="absolute mt-10 text-xs font-medium">Team Setup</span>
            </li>
          </ol>
        </div>

        <Card className="w-full">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <CardHeader>
                  <CardTitle>Organization Information</CardTitle>
                  <CardDescription>Tell us about your organization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Acme Inc." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-website">Company Website</Label>
                    <Input id="company-website" type="url" placeholder="https://example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-size">Company Size</Label>
                    <Select required defaultValue="11-50">
                      <SelectTrigger id="company-size">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1001+">1001+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-industry">Industry</Label>
                    <Select required defaultValue="tech">
                      <SelectTrigger id="company-industry">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </>
            )}

            {step === 2 && (
              <>
                <CardHeader>
                  <CardTitle>Company Details</CardTitle>
                  <CardDescription>Additional information about your organization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-logo">Company Logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md border flex items-center justify-center overflow-hidden bg-muted">
                        {logoFile ? (
                          <img
                            src={URL.createObjectURL(logoFile) || "/placeholder.svg"}
                            alt="Preview"
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <Building2 className="h-8 w-8 text-muted-foreground" />
                        )}
                      </div>
                      <label
                        htmlFor="logo-upload"
                        className="flex h-10 cursor-pointer items-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Logo
                        <Input
                          id="logo-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-description">Company Description</Label>
                    <Textarea
                      id="company-description"
                      placeholder="Tell candidates about your company culture, mission, and values"
                      rows={4}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="headquarters">Headquarters Location</Label>
                    <Input id="headquarters" placeholder="City, Country" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founded-year">Founded Year</Label>
                    <Input id="founded-year" type="number" placeholder="2010" required />
                  </div>
                </CardContent>
              </>
            )}

            {step === 3 && (
              <>
                <CardHeader>
                  <CardTitle>Team Setup</CardTitle>
                  <CardDescription>Invite team members to join your organization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="team-members">Invite Team Members (Optional)</Label>
                    <Textarea id="team-members" placeholder="Enter email addresses separated by commas" rows={3} />
                    <p className="text-xs text-muted-foreground">
                      Your team members will receive an email invitation to join your organization.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role-permissions">Role Permissions</Label>
                    <div className="space-y-3 border rounded-md p-4">
                      <div className="flex items-start space-x-3">
                        <input type="checkbox" id="admin-role" className="mt-1" defaultChecked aria-label="Admin role" />
                        <div>
                          <Label htmlFor="admin-role" className="font-medium">
                            Admin
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Can manage all aspects of the organization, including billing, team members, and job
                            postings
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <input type="checkbox" id="recruiter-role" className="mt-1" defaultChecked aria-label="Recruiter role" />
                        <div>
                          <Label htmlFor="recruiter-role" className="font-medium">
                            Recruiter
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Can create and manage job postings, review applications, and schedule interviews
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <input type="checkbox" id="hiring-manager-role" className="mt-1" aria-label="Hiring manager role" />
                        <div>
                          <Label htmlFor="hiring-manager-role" className="font-medium">
                            Hiring Manager
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Can view applications and provide feedback on candidates
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </>
            )}

            <CardFooter className="flex justify-between">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                  Back
                </Button>
              ) : (
                <Link href="/register">
                  <Button type="button" variant="outline">
                    Back to Registration
                  </Button>
                </Link>
              )}

              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {step < 3 ? "Saving..." : "Completing Registration..."}
                  </>
                ) : step < 3 ? (
                  "Continue"
                ) : (
                  "Complete Registration"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
