"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, Plus, Pencil, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"

type Experience = {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

export function ProfileExperience() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      startDate: "2020-03",
      endDate: "",
      current: true,
      description:
        "Leading frontend development for enterprise SaaS products. Managing a team of 5 developers. Implementing modern React architecture and design systems. Improving performance and accessibility across all products.",
    },
    {
      id: "2",
      company: "Digital Solutions LLC",
      position: "Frontend Developer",
      location: "Seattle, WA",
      startDate: "2017-06",
      endDate: "2020-02",
      current: false,
      description:
        "Developed responsive web applications using React and TypeScript. Collaborated with UX designers to implement user interfaces. Optimized application performance and improved code quality.",
    },
    {
      id: "3",
      company: "WebTech Startup",
      position: "Junior Web Developer",
      location: "Portland, OR",
      startDate: "2016-01",
      endDate: "2017-05",
      current: false,
      description:
        "Built and maintained client websites using JavaScript, HTML, and CSS. Implemented responsive designs and ensured cross-browser compatibility.",
    },
  ])

  const [newExperience, setNewExperience] = useState<Omit<Experience, "id">>({
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
  })

  const [editingExperience, setEditingExperience] = useState<Experience | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleAddExperience = () => {
    if (newExperience.company.trim() && newExperience.position.trim()) {
      setExperiences([
        ...experiences,
        {
          id: Date.now().toString(),
          ...newExperience,
        },
      ])
      setNewExperience({
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      })
      setIsAddDialogOpen(false)
    }
  }

  const handleUpdateExperience = () => {
    if (editingExperience && editingExperience.company.trim() && editingExperience.position.trim()) {
      setExperiences(experiences.map((exp) => (exp.id === editingExperience.id ? editingExperience : exp)))
      setEditingExperience(null)
      setIsEditDialogOpen(false)
    }
  }

  const handleRemoveExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" })
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>Work Experience</CardTitle>
            <CardDescription>Add your professional experience</CardDescription>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Experience
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add Work Experience</DialogTitle>
                <DialogDescription>Add your professional experience to your profile</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={newExperience.company}
                    onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                    placeholder="Company Name"
                  />
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    value={newExperience.position}
                    onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
                    placeholder="Job Title"
                  />
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={newExperience.location}
                    onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
                    placeholder="City, State, Country"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input
                      id="start-date"
                      type="month"
                      value={newExperience.startDate}
                      onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input
                      id="end-date"
                      type="month"
                      value={newExperience.endDate}
                      onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })}
                      disabled={newExperience.current}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="current"
                    checked={newExperience.current}
                    onCheckedChange={(checked) => {
                      setNewExperience({
                        ...newExperience,
                        current: checked === true,
                        endDate: checked === true ? "" : newExperience.endDate,
                      })
                    }}
                  />
                  <Label htmlFor="current">I currently work here</Label>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newExperience.description}
                    onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                    placeholder="Describe your responsibilities, achievements, and skills used"
                    rows={4}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddExperience}>Add Experience</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {experiences.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <Briefcase className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">No work experience added yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Add your professional experience to showcase your skills and career progression
                </p>
                <Button onClick={() => setIsAddDialogOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Experience
                </Button>
              </div>
            ) : (
              experiences.map((experience) => (
                <div key={experience.id} className="rounded-lg border p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">{experience.position}</h3>
                      <p className="text-sm">{experience.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(experience.startDate)} -{" "}
                        {experience.current ? "Present" : formatDate(experience.endDate)}
                      </p>
                      <p className="text-sm text-muted-foreground">{experience.location}</p>
                      {experience.description && <p className="text-sm mt-2">{experience.description}</p>}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingExperience(experience)
                          setIsEditDialogOpen(true)
                        }}
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive"
                        onClick={() => handleRemoveExperience(experience.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Work Experience</DialogTitle>
            <DialogDescription>Update your professional experience</DialogDescription>
          </DialogHeader>
          {editingExperience && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="edit-company">Company</Label>
                <Input
                  id="edit-company"
                  value={editingExperience.company}
                  onChange={(e) => setEditingExperience({ ...editingExperience, company: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="edit-position">Position</Label>
                <Input
                  id="edit-position"
                  value={editingExperience.position}
                  onChange={(e) => setEditingExperience({ ...editingExperience, position: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="edit-location">Location</Label>
                <Input
                  id="edit-location"
                  value={editingExperience.location}
                  onChange={(e) => setEditingExperience({ ...editingExperience, location: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-start-date">Start Date</Label>
                  <Input
                    id="edit-start-date"
                    type="month"
                    value={editingExperience.startDate}
                    onChange={(e) => setEditingExperience({ ...editingExperience, startDate: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-end-date">End Date</Label>
                  <Input
                    id="edit-end-date"
                    type="month"
                    value={editingExperience.endDate}
                    onChange={(e) => setEditingExperience({ ...editingExperience, endDate: e.target.value })}
                    disabled={editingExperience.current}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="edit-current"
                  checked={editingExperience.current}
                  onCheckedChange={(checked) => {
                    setEditingExperience({
                      ...editingExperience,
                      current: checked === true,
                      endDate: checked === true ? "" : editingExperience.endDate,
                    })
                  }}
                />
                <Label htmlFor="edit-current">I currently work here</Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={editingExperience.description}
                  onChange={(e) => setEditingExperience({ ...editingExperience, description: e.target.value })}
                  rows={4}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateExperience}>Update Experience</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

