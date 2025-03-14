"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { AlertCircle, ArrowUpRight, Download, FileUp, Loader2, Save, Sparkles, Upload, Zap } from "lucide-react"

export default function CandidateResumePage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("upload")
  const [isSaving, setIsSaving] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [improvementMode, setImprovementMode] = useState(false)
  const [jobTitleForOpt, setJobTitleForOpt] = useState("")
  const [optimizationResults, setOptimizationResults] = useState(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleAnalyzeResume = async () => {
    if (!resumeFile) return

    setIsSaving(true)

    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setAnalysisComplete(true)
    setIsSaving(false)

    toast({
      title: "Resume analyzed successfully",
      description: "We've parsed your resume and extracted your skills and experience.",
    })
  }

  const handleOptimizeResume = async () => {
    if (!jobTitleForOpt) {
      toast({
        title: "Please enter a job title",
        description: "We need a job title to optimize your resume for.",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)

    // Simulate optimization delay
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setOptimizationResults({})
    setIsSaving(false)

    toast({
      title: "Resume optimized!",
      description: `Your resume has been optimized for ${jobTitleForOpt} positions.`,
    })
  }

  const handleSaveChanges = async () => {
    setIsSaving(true)

    // Simulate saving delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSaving(false)

    toast({
      title: "Changes saved!",
      description: "Your resume has been updated successfully.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Resume Management</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handleSaveChanges} disabled={isSaving}>
            {isSaving ? (
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
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="upload">Upload & Analyze</TabsTrigger>
          <TabsTrigger value="edit">Edit Resume</TabsTrigger>
          <TabsTrigger value="optimize">AI Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Your Resume</CardTitle>
              <CardDescription>
                Upload your resume and let our AI analyze it to extract your skills and experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="resume-upload"
                  className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted ${
                    resumeFile ? "border-primary" : "border-border"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {resumeFile ? (
                      <>
                        <FileUp className="w-10 h-10 mb-4 text-primary" />
                        <p className="text-sm font-medium">{resumeFile.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <Button variant="outline" size="sm" className="mt-4" onClick={() => setResumeFile(null)}>
                          Replace File
                        </Button>
                      </>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 mb-4 text-muted-foreground" />
                        <p className="mb-2 text-sm font-medium">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">PDF, DOCX or TXT (MAX. 5MB)</p>
                      </>
                    )}
                  </div>
                  <Input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              {resumeFile && !analysisComplete && (
                <div className="flex justify-center">
                  <Button onClick={handleAnalyzeResume} disabled={isSaving} className="mt-4">
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Analyze Resume
                      </>
                    )}
                  </Button>
                </div>
              )}

              {analysisComplete && (
                <div className="space-y-6 mt-8">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Resume Analysis Results</h3>
                    <p className="text-sm text-muted-foreground">Here's what our AI found in your resume</p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Detected Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">HTML/CSS</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">UI/UX Design</Badge>
                        <Badge variant="secondary">Figma</Badge>
                        <Badge variant="secondary">Git</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Experience Level</h4>
                      <div className="flex items-center gap-2">
                        <div className="font-medium">Senior (5-7 years)</div>
                        <Badge variant="outline">Detected</Badge>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="text-sm font-medium mb-2">Resume Strength</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Overall Score</span>
                          <span className="text-sm font-medium">78/100</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <AlertCircle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                          <span>Add more quantifiable achievements to strengthen impact</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                          <span>Include certifications to boost credibility</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                          <span>Improve summary to highlight unique value proposition</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Suggested Job Matches</h4>
                      <ul className="space-y-2 text-sm">
                        <li>Senior Frontend Developer (92% match)</li>
                        <li>UI/UX Designer (87% match)</li>
                        <li>Full Stack Developer (84% match)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button onClick={() => setActiveTab("edit")}>Edit Resume Details</Button>
                    <Button variant="outline" onClick={() => setActiveTab("optimize")}>
                      <Zap className="mr-2 h-4 w-4" />
                      Optimize with AI
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="edit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resume Information</CardTitle>
              <CardDescription>Edit your resume details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Alex Morgan" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex.morgan@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="headline">Professional Headline</Label>
                  <Input
                    id="headline"
                    defaultValue="Senior Frontend Developer with 6+ years of experience in React and TypeScript"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea
                    id="summary"
                    rows={4}
                    defaultValue="Experienced Frontend Developer with a proven track record in building responsive web applications using React and TypeScript. Passionate about creating intuitive user interfaces and optimizing application performance. Strong collaboration skills with designers and backend developers."
                  />
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4">Work Experience</h3>

                  {[1, 2].map((i) => (
                    <div key={i} className="space-y-4 mb-6 p-4 border rounded-md">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Experience {i}</h4>
                        <Button variant="ghost" size="sm">
                          Remove
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <Label>Company Name</Label>
                        <Input defaultValue={i === 1 ? "Tech Innovations Inc." : "Digital Solutions LLC"} />
                      </div>

                      <div className="space-y-2">
                        <Label>Job Title</Label>
                        <Input defaultValue={i === 1 ? "Senior Frontend Developer" : "Frontend Developer"} />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label>Start Date</Label>
                          <Input type="month" defaultValue={i === 1 ? "2019-01" : "2016-06"} />
                        </div>
                        <div className="space-y-2">
                          <Label>End Date</Label>
                          <Input type="month" defaultValue={i === 1 ? "2023-05" : "2019-01"} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                          rows={3}
                          defaultValue={
                            i === 1
                              ? "Led development of responsive web applications using React and TypeScript. Implemented state management with Redux and optimized performance."
                              : "Developed and maintained client websites. Collaborated with designers to implement UI/UX improvements."
                          }
                        />
                      </div>
                    </div>
                  ))}

                  <Button variant="outline" size="sm" className="mt-2">
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    Add Work Experience
                  </Button>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4">Education</h3>

                  <div className="space-y-4 mb-6 p-4 border rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Education</h4>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label>Institution</Label>
                      <Input defaultValue="University of California, Berkeley" />
                    </div>

                    <div className="space-y-2">
                      <Label>Degree</Label>
                      <Input defaultValue="B.S. Computer Science" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input type="month" defaultValue="2012-09" />
                      </div>
                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input type="month" defaultValue="2016-05" />
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="mt-2">
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    Add Education
                  </Button>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4">Skills</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="px-2 py-1 flex items-center gap-1">
                      React
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0 hover:bg-transparent">
                        ×
                      </Button>
                    </Badge>
                    <Badge className="px-2 py-1 flex items-center gap-1">
                      JavaScript
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0 hover:bg-transparent">
                        ×
                      </Button>
                    </Badge>
                    <Badge className="px-2 py-1 flex items-center gap-1">
                      TypeScript
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0 hover:bg-transparent">
                        ×
                      </Button>
                    </Badge>
                    <Badge className="px-2 py-1 flex items-center gap-1">
                      HTML/CSS
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0 hover:bg-transparent">
                        ×
                      </Button>
                    </Badge>
                    <Badge className="px-2 py-1 flex items-center gap-1">
                      Node.js
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0 hover:bg-transparent">
                        ×
                      </Button>
                    </Badge>
                    <Badge className="px-2 py-1 flex items-center gap-1">
                      UI/UX Design
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0 hover:bg-transparent">
                        ×
                      </Button>
                    </Badge>
                    <Badge className="px-2 py-1 flex items-center gap-1">
                      Figma
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0 hover:bg-transparent">
                        ×
                      </Button>
                    </Badge>
                    <Badge className="px-2 py-1 flex items-center gap-1">
                      Git
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0 hover:bg-transparent">
                        ×
                      </Button>
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Input placeholder="Add a skill..." />
                    <Button>Add</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("upload")}>
                Back
              </Button>
              <Button onClick={handleSaveChanges} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="optimize" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Resume Optimization</CardTitle>
              <CardDescription>Optimize your resume for specific job positions using our AI assistant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/10 border border-primary/20 rounded-md p-4">
                <div className="flex gap-2 items-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">AI Resume Optimization</h3>
                </div>
                <p className="text-sm mt-1">
                  Our AI will analyze your resume and suggest improvements to match it with the job description you're
                  targeting. This helps increase your chances of passing through Applicant Tracking Systems (ATS) and
                  catching the recruiter's attention.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Target Job Title</Label>
                  <Input
                    id="job-title"
                    placeholder="e.g. Senior Frontend Developer"
                    value={jobTitleForOpt}
                    onChange={(e) => setJobTitleForOpt(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job-description">Job Description (Optional)</Label>
                  <Textarea
                    id="job-description"
                    placeholder="Paste the job description here for more targeted optimization"
                    rows={5}
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="optimization-level">Optimization Level</Label>
                    <span className="text-sm text-muted-foreground">Moderate</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                  <p className="text-xs text-muted-foreground">
                    Higher levels will make more significant changes to match the job description. Lower levels will
                    preserve more of your original content.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="ats-optimize" />
                    <Label htmlFor="ats-optimize">Optimize for ATS Scanning</Label>
                  </div>
                  <p className="text-xs text-muted-foreground pl-5">
                    Format your resume to be easily parsed by Applicant Tracking Systems
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="keyword-optimize" defaultChecked />
                    <Label htmlFor="keyword-optimize">Enhance Keywords</Label>
                  </div>
                  <p className="text-xs text-muted-foreground pl-5">
                    Add relevant keywords from the job description to increase match rate
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="achievements-optimize" defaultChecked />
                    <Label htmlFor="achievements-optimize">Improve Achievements</Label>
                  </div>
                  <p className="text-xs text-muted-foreground pl-5">
                    Enhance achievement descriptions with quantifiable results
                  </p>
                </div>
              </div>

              <Button className="w-full" onClick={handleOptimizeResume} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Optimizing Resume...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Optimize My Resume
                  </>
                )}
              </Button>

              {optimizationResults && (
                <div className="pt-6 border-t space-y-4">
                  <h3 className="font-medium text-lg">Optimization Results</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Match Score Improvement</span>
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        +24%
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="space-y-1 flex-1">
                        <div className="text-xs flex justify-between">
                          <span>Before</span>
                          <span>68%</span>
                        </div>
                        <Progress value={68} className="h-2" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="text-xs flex justify-between">
                          <span>After</span>
                          <span>92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">What We Improved</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <ArrowUpRight className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Added 8 relevant keywords from the job description</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowUpRight className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Reformatted work experience to highlight achievements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowUpRight className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Enhanced professional summary to match job requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowUpRight className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Quantified 4 accomplishments with metrics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowUpRight className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Optimized formatting for better ATS compatibility</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <Button onClick={() => setActiveTab("edit")}>View Optimized Resume</Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download Optimized Version
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

