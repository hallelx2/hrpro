"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Building2, Upload, Save, Globe, MapPin, Loader2, Phone, Mail, LinkIcon } from "lucide-react"
import { toast } from "sonner"

export default function OrganizationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [logoUrl, setLogoUrl] = useState("/placeholder.svg?height=128&width=128")

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // In a real app, you would upload the file to a server
      // For demo purposes, we'll just create a local object URL
      const url = URL.createObjectURL(e.target.files[0])
      setLogoUrl(url)
    }
  }

  const handleSave = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)

    toast("Changes saved")
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Organization Profile</h2>
        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Organization Information</CardTitle>
              <CardDescription>Update your organization's basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Company Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 rounded-md flex items-center justify-center overflow-hidden border">
                    <img
                      src={logoUrl || "/placeholder.svg"}
                      alt="Company Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <label
                    htmlFor="logo-upload"
                    className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Logo
                    <Input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLogoChange}
                    />
                  </label>
                </div>
                <p className="text-xs text-muted-foreground">Recommended size: 400x400px. Max file size: 5MB.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="TechGlobe Inc." />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select defaultValue="technology">
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-size">Company Size</Label>
                  <Select defaultValue="51-200">
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="founded-year">Founded Year</Label>
                <Input id="founded-year" type="number" defaultValue="2010" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-description">Company Description</Label>
                <Textarea
                  id="company-description"
                  rows={4}
                  defaultValue="TechGlobe Inc. is a leading technology company focused on creating innovative solutions that transform how businesses operate. Our team is passionate about building products that make a difference in people's lives."
                />
                <p className="text-xs text-muted-foreground">
                  This description will be displayed on your public profile and job postings.
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Contact Information</Label>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company-email">Email</Label>
                      <div className="flex">
                        <div className="flex items-center bg-muted p-2 rounded-l-md border border-r-0">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Input id="company-email" className="rounded-l-none" defaultValue="careers@techglobe.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-phone">Phone</Label>
                      <div className="flex">
                        <div className="flex items-center bg-muted p-2 rounded-l-md border border-r-0">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Input id="company-phone" className="rounded-l-none" defaultValue="(555) 123-4567" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company-website">Website</Label>
                    <div className="flex">
                      <div className="flex items-center bg-muted p-2 rounded-l-md border border-r-0">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Input id="company-website" className="rounded-l-none" defaultValue="https://techglobe.com" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Connect your social media accounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <div className="flex">
                  <div className="flex items-center bg-muted p-2 rounded-l-md border border-r-0">
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="linkedin"
                    className="rounded-l-none"
                    placeholder="https://linkedin.com/company/techglobe"
                    defaultValue="https://linkedin.com/company/techglobe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <div className="flex">
                  <div className="flex items-center bg-muted p-2 rounded-l-md border border-r-0">
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="twitter"
                    className="rounded-l-none"
                    placeholder="https://twitter.com/techglobe"
                    defaultValue="https://twitter.com/techglobe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <div className="flex">
                  <div className="flex items-center bg-muted p-2 rounded-l-md border border-r-0">
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="facebook"
                    className="rounded-l-none"
                    placeholder="https://facebook.com/techglobe"
                    defaultValue="https://facebook.com/techglobe"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Branding Settings</CardTitle>
              <CardDescription>Customize how your organization appears to candidates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Brand Colors</Label>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex">
                      <Input
                        id="primary-color"
                        type="color"
                        className="w-12 h-10 p-1 rounded-l-md"
                        defaultValue="#6366f1"
                      />
                      <Input className="rounded-l-none" defaultValue="#6366f1" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="secondary-color">Secondary Color</Label>
                    <div className="flex">
                      <Input
                        id="secondary-color"
                        type="color"
                        className="w-12 h-10 p-1 rounded-l-md"
                        defaultValue="#4f46e5"
                      />
                      <Input className="rounded-l-none" defaultValue="#4f46e5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Cover Image</Label>
                <div className="border rounded-md overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=800"
                    alt="Cover Image"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  <label
                    htmlFor="cover-upload"
                    className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Cover Image
                    <Input id="cover-upload" type="file" accept="image/*" className="hidden" />
                  </label>
                  <Button variant="outline">Remove</Button>
                </div>
                <p className="text-xs text-muted-foreground">Recommended size: 1200x300px. Max file size: 10MB.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-tagline">Company Tagline</Label>
                <Input
                  id="company-tagline"
                  placeholder="A short slogan or tagline for your company"
                  defaultValue="Innovating for a better future"
                />
                <p className="text-xs text-muted-foreground">
                  This will appear alongside your company name in various places.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="career-page-headline">Career Page Headline</Label>
                <Input
                  id="career-page-headline"
                  placeholder="Main heading for your careers page"
                  defaultValue="Join our team and help shape the future"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="careers-description">Careers Page Description</Label>
                <Textarea
                  id="careers-description"
                  rows={4}
                  defaultValue="At TechGlobe, we're looking for passionate individuals who are excited about technology and innovation. We offer competitive benefits, a collaborative work environment, and opportunities for professional growth."
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-benefits">Display Benefits Section</Label>
                  <Switch id="show-benefits" defaultChecked />
                </div>
                <p className="text-xs text-muted-foreground">Show a benefits and perks section on your career page.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-team">Display Team Section</Label>
                  <Switch id="show-team" defaultChecked />
                </div>
                <p className="text-xs text-muted-foreground">Show team members and culture on your career page.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Candidate Experience</CardTitle>
              <CardDescription>Customize the application experience for candidates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="custom-application-form">Custom Application Form</Label>
                  <Switch id="custom-application-form" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Use a customized application form instead of the default one.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-response">Automated Response Emails</Label>
                  <Switch id="auto-response" defaultChecked />
                </div>
                <p className="text-xs text-muted-foreground">Automatically send confirmation emails to applicants.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="application-tracking">Allow Candidates to Track Applications</Label>
                  <Switch id="application-tracking" defaultChecked />
                </div>
                <p className="text-xs text-muted-foreground">
                  Allow candidates to view the status of their applications.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmation-message">Application Confirmation Message</Label>
                <Textarea
                  id="confirmation-message"
                  rows={3}
                  defaultValue="Thank you for applying to TechGlobe Inc. We've received your application and will review it shortly. You'll receive updates about your application status via email."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="locations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Locations</CardTitle>
              <CardDescription>Manage your organization's office locations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <Label>Office Locations</Label>
                <Button>
                  <MapPin className="mr-2 h-4 w-4" />
                  Add Location
                </Button>
              </div>

              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Headquarters</h3>
                      <div className="text-sm text-muted-foreground mt-1">
                        123 Tech Avenue, San Francisco, CA 94107, USA
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">Primary</Badge>
                        <Badge variant="outline">15 Open Positions</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive border-destructive hover:bg-destructive/10"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">New York Office</h3>
                      <div className="text-sm text-muted-foreground mt-1">
                        456 Madison Avenue, New York, NY 10022, USA
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">7 Open Positions</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive border-destructive hover:bg-destructive/10"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">London Office</h3>
                      <div className="text-sm text-muted-foreground mt-1">789 Oxford Street, London, W1D 1BS, UK</div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">2 Open Positions</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive border-destructive hover:bg-destructive/10"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Remote Work Policy</CardTitle>
              <CardDescription>Define your organization's remote work policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="remote-policy">Remote Work Policy</Label>
                <Select defaultValue="hybrid">
                  <SelectTrigger id="remote-policy">
                    <SelectValue placeholder="Select policy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Fully Remote</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="office">Office-based</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="remote-description">Remote Policy Description</Label>
                <Textarea
                  id="remote-description"
                  rows={4}
                  defaultValue="TechGlobe offers a hybrid work model with 2-3 days in the office per week. We believe in the importance of in-person collaboration while also providing flexibility for remote work. Some positions may be eligible for fully remote arrangements depending on the role."
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="worldwide-hiring">Hire Worldwide</Label>
                  <Switch id="worldwide-hiring" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Enable this to post jobs that can be done from anywhere in the world.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="remote-regions">Remote Hiring Regions</Label>
                <Select>
                  <SelectTrigger id="remote-regions">
                    <SelectValue placeholder="Select regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                    <SelectItem value="latin-america">Latin America</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="worldwide">Worldwide</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Departments & Teams</CardTitle>
              <CardDescription>Manage your organization's structure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <Label>Departments</Label>
                <Button>
                  <Building2 className="mr-2 h-4 w-4" />
                  Add Department
                </Button>
              </div>

              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Engineering</h3>
                      <div className="text-sm text-muted-foreground mt-1">
                        Software development and technical infrastructure
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">12 Open Positions</Badge>
                        <Badge variant="outline">25 Team Members</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Manage Teams
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 pl-4 border-l space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-medium">Frontend Team</h4>
                        <div className="text-xs text-muted-foreground">6 members</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-medium">Backend Team</h4>
                        <div className="text-xs text-muted-foreground">8 members</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-medium">DevOps Team</h4>
                        <div className="text-xs text-muted-foreground">4 members</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Product & Design</h3>
                      <div className="text-sm text-muted-foreground mt-1">
                        Product management and user experience design
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">6 Open Positions</Badge>
                        <Badge variant="outline">12 Team Members</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Manage Teams
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Marketing</h3>
                      <div className="text-sm text-muted-foreground mt-1">Brand management and marketing campaigns</div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">3 Open Positions</Badge>
                        <Badge variant="outline">8 Team Members</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Manage Teams
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hiring Managers</CardTitle>
              <CardDescription>Manage hiring managers for each department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>DJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">David Johnson</h3>
                        <div className="text-sm text-muted-foreground">Engineering Manager</div>
                      </div>
                    </div>
                    <div>
                      <Badge>Engineering</Badge>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>AP</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Amanda Parker</h3>
                        <div className="text-sm text-muted-foreground">Design Director</div>
                      </div>
                    </div>
                    <div>
                      <Badge>Product & Design</Badge>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Michael Rodriguez</h3>
                        <div className="text-sm text-muted-foreground">Marketing Director</div>
                      </div>
                    </div>
                    <div>
                      <Badge>Marketing</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="mt-4">Assign Hiring Manager</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
