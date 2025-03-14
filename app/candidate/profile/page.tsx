import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, Check, Edit, Globe, Linkedin, Mail, MapPin, Phone, Twitter, Upload } from "lucide-react"
import { ProfileSkills } from "@/components/candidate/profile-skills"
import { ProfileEducation } from "@/components/candidate/profile-education"
import { ProfileExperience } from "@/components/candidate/profile-experience"

export default function CandidateProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
        <div className="flex items-center space-x-2">
          <Button>Save Changes</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        {/* Profile Summary Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Alex Morgan" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <Button size="icon" variant="outline" className="absolute bottom-3 right-0 h-8 w-8 rounded-full">
                  <Camera className="h-4 w-4" />
                  <span className="sr-only">Upload avatar</span>
                </Button>
              </div>
              <CardTitle className="text-xl">Alex Morgan</CardTitle>
              <CardDescription className="text-md">Senior Frontend Developer</CardDescription>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">UI/UX</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>alex.morgan@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                  <span>linkedin.com/in/alexmorgan</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>alexmorgan.dev</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Twitter className="h-4 w-4 text-muted-foreground" />
                  <span>@alexmorgandev</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Profile Visibility</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="public-profile" className="flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span>Public Profile</span>
                    </Label>
                    <Switch id="public-profile" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="recruiter-search" className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-muted-foreground" />
                      <span>Visible in Recruiter Search</span>
                    </Label>
                    <Switch id="recruiter-search" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="job-alerts" className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-muted-foreground" />
                      <span>Open to Job Opportunities</span>
                    </Label>
                    <Switch id="job-alerts" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Profile Completion</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Completion</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      <span>Basic Information</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      <span>Contact Details</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      <span>Skills</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      <span>Experience</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-3 w-3 rounded-full border border-muted-foreground"></div>
                      <span>Portfolio (Optional)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Export Profile
            </Button>
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </CardFooter>
        </Card>

        {/* Main Profile Content */}
        <div className="md:col-span-5 space-y-4">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="Alex" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Morgan" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="headline">Professional Headline</Label>
                    <Input id="headline" defaultValue="Senior Frontend Developer" />
                    <p className="text-sm text-muted-foreground">
                      This appears below your name and is the first thing recruiters see
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea
                      id="summary"
                      rows={5}
                      defaultValue="Senior Frontend Developer with 7+ years of experience building responsive and performant web applications using React, TypeScript, and modern frontend frameworks. Passionate about creating intuitive user interfaces and optimizing web performance."
                    />
                    <p className="text-sm text-muted-foreground">
                      Write a short summary about yourself, your experience, and what you're looking for
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="alex.morgan@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="San Francisco" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select defaultValue="CA">
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          <SelectItem value="IL">Illinois</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="US">
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                        <SelectItem value="AU">Australia</SelectItem>
                        <SelectItem value="DE">Germany</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <div className="flex items-center">
                      <span className="bg-muted px-3 py-2 rounded-l-md border border-r-0 border-input text-muted-foreground">
                        linkedin.com/in/
                      </span>
                      <Input id="linkedin" className="rounded-l-none" defaultValue="alexmorgan" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Personal Website</Label>
                    <Input id="website" type="url" defaultValue="https://alexmorgan.dev" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter/X Profile</Label>
                    <div className="flex items-center">
                      <span className="bg-muted px-3 py-2 rounded-l-md border border-r-0 border-input text-muted-foreground">
                        @
                      </span>
                      <Input id="twitter" className="rounded-l-none" defaultValue="alexmorgandev" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub Profile</Label>
                    <div className="flex items-center">
                      <span className="bg-muted px-3 py-2 rounded-l-md border border-r-0 border-input text-muted-foreground">
                        github.com/
                      </span>
                      <Input id="github" className="rounded-l-none" defaultValue="alexmorgan" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Job Preferences</CardTitle>
                  <CardDescription>Set your job preferences to get better matches</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Desired Job Title</Label>
                    <Input id="job-title" defaultValue="Senior Frontend Developer" />
                  </div>

                  <div className="space-y-2">
                    <Label>Job Types</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="full-time" defaultChecked />
                        <Label htmlFor="full-time">Full-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="part-time" />
                        <Label htmlFor="part-time">Part-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="contract" defaultChecked />
                        <Label htmlFor="contract">Contract</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="freelance" />
                        <Label htmlFor="freelance">Freelance</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Work Location</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="remote" defaultChecked />
                        <Label htmlFor="remote">Remote</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="hybrid" defaultChecked />
                        <Label htmlFor="hybrid">Hybrid</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="on-site" />
                        <Label htmlFor="on-site">On-site</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Expected Salary Range ($)</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Input id="salary-min" type="number" placeholder="Minimum" defaultValue="120000" />
                      <Input id="salary-max" type="number" placeholder="Maximum" defaultValue="160000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="relocation">Willing to Relocate</Label>
                    <Select defaultValue="selective">
                      <SelectTrigger id="relocation">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes, anywhere</SelectItem>
                        <SelectItem value="selective">Yes, to select locations</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred-locations">Preferred Locations</Label>
                    <Textarea
                      id="preferred-locations"
                      placeholder="Enter cities or regions you prefer"
                      defaultValue="San Francisco Bay Area, Seattle, New York, Remote"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notice-period">Notice Period</Label>
                    <Select defaultValue="2-weeks">
                      <SelectTrigger id="notice-period">
                        <SelectValue placeholder="Select notice period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="1-week">1 week</SelectItem>
                        <SelectItem value="2-weeks">2 weeks</SelectItem>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="2-months">2+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="mt-4">
              <ProfileSkills />
            </TabsContent>

            <TabsContent value="experience" className="mt-4">
              <ProfileExperience />
            </TabsContent>

            <TabsContent value="education" className="mt-4">
              <ProfileEducation />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

