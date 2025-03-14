"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Check, X, AlertTriangle, BarChart3 } from "lucide-react"

export function AIAnalysis() {
  const [activeTab, setActiveTab] = useState("skills")

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h3 className="font-medium">AI-Powered Resume Analysis</h3>
        </div>
        <Button variant="outline" size="sm">
          Regenerate Analysis
        </Button>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <div className="mt-0.5 text-primary">
              <Check className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Strong Match for Position</p>
              <p className="text-sm text-muted-foreground">
                This candidate's skills and experience align well with the job requirements. The candidate has 7 years
                of relevant experience and demonstrates proficiency in all required technologies.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="mt-4 space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Required Skills Match</h4>
              <div className="space-y-3">
                {requiredSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        {skill.match ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <X className="h-4 w-4 text-red-500" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className={`h-2 ${skill.match ? "bg-green-100" : "bg-red-100"}`} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Additional Skills Detected</h4>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="experience" className="mt-4 space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Total Relevant Experience</h4>
              <Badge variant="outline" className="font-medium">
                7 years
              </Badge>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Experience Analysis</h4>
              <div className="space-y-3">
                <Card className="border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 text-green-500">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Tech Innovations Inc. (4 years)</p>
                        <p className="text-sm text-muted-foreground">
                          Highly relevant experience with the same tech stack required for this position. Led
                          development of similar applications and mentored junior developers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 text-yellow-500">
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Digital Solutions LLC (3 years)</p>
                        <p className="text-sm text-muted-foreground">
                          Partially relevant experience. Focused more on general web development rather than specific
                          framework expertise required for this role.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-4 space-y-4">
          <div className="space-y-4">
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-green-500">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Education Requirements Met</p>
                    <p className="text-sm text-muted-foreground">
                      B.S. in Computer Science from University of California, Berkeley. Meets the required Bachelor's
                      degree in Computer Science or related field.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h4 className="text-sm font-medium mb-2">Certifications</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>AWS Certified Developer</span>
                  <Badge variant="outline" className="ml-auto">
                    Relevant
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>React Certification</span>
                  <Badge variant="outline" className="ml-auto">
                    Highly Relevant
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="summary" className="mt-4 space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Overall Assessment</h4>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Match Score</div>
              </div>
              <Progress value={92} className="h-2 mb-4" />
              <p className="text-sm">
                This candidate is a strong match for the Senior Frontend Developer position. They have extensive
                experience with the required technologies and have demonstrated leadership in previous roles. Their
                educational background and certifications further validate their expertise in the field.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium mb-2">Strengths</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Strong React & TypeScript experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Leadership experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Performance optimization skills</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Relevant certifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium mb-2">Areas for Discussion</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <span>Experience with our specific industry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <span>Team management experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <span>Remote work experience</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Recommended Interview Questions</h4>
              <ol className="list-decimal list-inside text-sm space-y-2">
                <li>Can you describe your experience optimizing React application performance?</li>
                <li>How have you implemented state management in large-scale applications?</li>
                <li>Tell us about your experience working in remote or distributed teams.</li>
                <li>How do you approach mentoring junior developers?</li>
                <li>Describe a challenging technical problem you solved and your approach.</li>
              </ol>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const requiredSkills = [
  { name: "React", level: 95, match: true },
  { name: "TypeScript", level: 90, match: true },
  { name: "JavaScript", level: 98, match: true },
  { name: "Redux", level: 85, match: true },
  { name: "Node.js", level: 75, match: true },
  { name: "GraphQL", level: 40, match: false },
]

const additionalSkills = [
  "HTML5",
  "CSS3",
  "Responsive Design",
  "Performance Optimization",
  "Webpack",
  "Git",
  "Jest",
  "React Testing Library",
]

