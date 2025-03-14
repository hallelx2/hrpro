"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GraduationCap, Plus, Pencil, Trash2 } from "lucide-react"
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

type Education = {
  id: string
  institution: string
  degree: string
  fieldOfStudy: string
  startDate: string
  endDate: string
  current: boolean
  description: string
  location: string
}

export function ProfileEducation() {
  const [educations, setEducations] = useState<Education[]>([
    {
      id: "1",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      startDate: "2012-09",
      endDate: "2016-05",
      current: false,
      description: "Graduated with honors. Specialized in Human-Computer Interaction and Software Engineering.",
      location: "Berkeley, CA",
    },
    {
      id: "2",
      institution: "Stanford University",
      degree: "Master of Science",
      fieldOfStudy: "Computer Science",
      startDate: "2016-09",
      endDate: "2018-06",
      current: false,
      description: "Focused on Web Technologies and User Interface Design. Thesis on Responsive Web Frameworks.",
      location: "Stanford, CA",
    },
  ])

  const [newEducation, setNewEducation] = useState<Omit<Education, "id">>({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
    location: "",
  })

  const [editingEducation, setEditingEducation] = useState<Education | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleAddEducation = () => {
    if (newEducation.institution.trim() && newEducation.degree.trim()) {
      setEducations([
        ...educations,
        {
          id: Date.now().toString(),
          ...newEducation,
        },
      ])
      setNewEducation({
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
        location: "",
      })
      setIsAddDialogOpen(false)
    }
  }

  const handleUpdateEducation = () => {
    if (editingEducation && editingEducation.institution.trim() && editingEducation.degree.trim()) {
      setEducations(educations.map((edu) => (edu.id === editingEducation.id ? editingEducation : edu)))
      setEditingEducation(null)
      setIsEditDialogOpen(false)
    }
  }

  const handleRemoveEducation = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id))
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
            <CardTitle>Education</CardTitle>
            <CardDescription>Add your educational background</CardDescription>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Education
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add Education</DialogTitle>
                <DialogDescription>Add your educational background to your profile</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Input
                    id="institution"
                    value={newEducation.institution}
                    onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                    placeholder="University or School Name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="degree">Degree</Label>
                    <Input
                      id="degree"
                      value={newEducation.degree}
                      onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                      placeholder="e.g. Bachelor of Science"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="field-of-study">Field of Study</Label>
                    <Input
                      id="field-of-study"
                      value={newEducation.fieldOfStudy}
                      onChange={(e) => setNewEducation({ ...newEducation, fieldOfStudy: e.target.value })}
                      placeholder="e.g. Computer Science"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input
                      id="start-date"
                      type="month"
                      value={newEducation.startDate}
                      onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input
                      id="end-date"
                      type="month"
                      value={newEducation.endDate}
                      onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
                      disabled={newEducation.current}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="current"
                    checked={newEducation.current}
                    onCheckedChange={(checked) => {
                      setNewEducation({
                        ...newEducation,
                        current: checked === true,
                        endDate: checked === true ? "" : newEducation.endDate,
                      })
                    }}
                  />
                  <Label htmlFor="current">I am currently studying here</Label>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={newEducation.location}
                    onChange={(e) => setNewEducation({ ...newEducation, location: e.target.value })}
                    placeholder="City, State, Country"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newEducation.description}
                    onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
                    placeholder="Describe your studies, achievements, activities, etc."
                    rows={3}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddEducation}>Add Education</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {educations.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <GraduationCap className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">No education added yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Add your educational background to help employers understand your qualifications
                </p>
                <Button onClick={() => setIsAddDialogOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Education
                </Button>
              </div>
            ) : (
              educations.map((education) => (
                <div key={education.id} className="rounded-lg border p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">{education.institution}</h3>
                      <p className="text-sm">
                        {education.degree} in {education.fieldOfStudy}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(education.startDate)} -{" "}
                        {education.current ? "Present" : formatDate(education.endDate)}
                      </p>
                      <p className="text-sm text-muted-foreground">{education.location}</p>
                      {education.description && <p className="text-sm mt-2">{education.description}</p>}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingEducation(education)
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
                        onClick={() => handleRemoveEducation(education.id)}
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
            <DialogTitle>Edit Education</DialogTitle>
            <DialogDescription>Update your educational information</DialogDescription>
          </DialogHeader>
          {editingEducation && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="edit-institution">Institution</Label>
                <Input
                  id="edit-institution"
                  value={editingEducation.institution}
                  onChange={(e) => setEditingEducation({ ...editingEducation, institution: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-degree">Degree</Label>
                  <Input
                    id="edit-degree"
                    value={editingEducation.degree}
                    onChange={(e) => setEditingEducation({ ...editingEducation, degree: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-field-of-study">Field of Study</Label>
                  <Input
                    id="edit-field-of-study"
                    value={editingEducation.fieldOfStudy}
                    onChange={(e) => setEditingEducation({ ...editingEducation, fieldOfStudy: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-start-date">Start Date</Label>
                  <Input
                    id="edit-start-date"
                    type="month"
                    value={editingEducation.startDate}
                    onChange={(e) => setEditingEducation({ ...editingEducation, startDate: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-end-date">End Date</Label>
                  <Input
                    id="edit-end-date"
                    type="month"
                    value={editingEducation.endDate}
                    onChange={(e) => setEditingEducation({ ...editingEducation, endDate: e.target.value })}
                    disabled={editingEducation.current}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="edit-current"
                  checked={editingEducation.current}
                  onCheckedChange={(checked) => {
                    setEditingEducation({
                      ...editingEducation,
                      current: checked === true,
                      endDate: checked === true ? "" : editingEducation.endDate,
                    })
                  }}
                />
                <Label htmlFor="edit-current">I am currently studying here</Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-location">Location</Label>
                <Input
                  id="edit-location"
                  value={editingEducation.location}
                  onChange={(e) => setEditingEducation({ ...editingEducation, location: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={editingEducation.description}
                  onChange={(e) => setEditingEducation({ ...editingEducation, description: e.target.value })}
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateEducation}>Update Education</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

