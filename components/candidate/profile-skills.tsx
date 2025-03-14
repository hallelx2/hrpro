"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { X, Plus, Save } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Skill = {
  id: string
  name: string
  level: number
  category: string
  yearsOfExperience: number
}

export function ProfileSkills() {
  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "React", level: 90, category: "Frontend", yearsOfExperience: 5 },
    { id: "2", name: "TypeScript", level: 85, category: "Frontend", yearsOfExperience: 4 },
    { id: "3", name: "JavaScript", level: 95, category: "Frontend", yearsOfExperience: 7 },
    { id: "4", name: "HTML/CSS", level: 90, category: "Frontend", yearsOfExperience: 7 },
    { id: "5", name: "Node.js", level: 75, category: "Backend", yearsOfExperience: 3 },
    { id: "6", name: "GraphQL", level: 70, category: "Backend", yearsOfExperience: 2 },
    { id: "7", name: "UI/UX Design", level: 80, category: "Design", yearsOfExperience: 4 },
    { id: "8", name: "Redux", level: 85, category: "Frontend", yearsOfExperience: 4 },
    { id: "9", name: "Next.js", level: 80, category: "Frontend", yearsOfExperience: 3 },
  ])

  const [newSkill, setNewSkill] = useState<Omit<Skill, "id">>({
    name: "",
    level: 50,
    category: "Frontend",
    yearsOfExperience: 1,
  })

  const [editingSkill, setEditingSkill] = useState<Skill | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      setSkills([
        ...skills,
        {
          id: Date.now().toString(),
          ...newSkill,
        },
      ])
      setNewSkill({
        name: "",
        level: 50,
        category: "Frontend",
        yearsOfExperience: 1,
      })
      setIsAddDialogOpen(false)
    }
  }

  const handleUpdateSkill = () => {
    if (editingSkill && editingSkill.name.trim()) {
      setSkills(skills.map((skill) => (skill.id === editingSkill.id ? editingSkill : skill)))
      setEditingSkill(null)
      setIsEditDialogOpen(false)
    }
  }

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id))
  }

  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert"
    if (level >= 70) return "Advanced"
    if (level >= 40) return "Intermediate"
    return "Beginner"
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>Skills & Expertise</CardTitle>
            <CardDescription>Add and manage your professional skills</CardDescription>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Skill
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Skill</DialogTitle>
                <DialogDescription>Add a new skill to your profile</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="skill-name">Skill Name</Label>
                  <Input
                    id="skill-name"
                    value={newSkill.name}
                    onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                    placeholder="e.g. React, Python, Project Management"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skill-category">Category</Label>
                  <Select
                    value={newSkill.category}
                    onValueChange={(value) => setNewSkill({ ...newSkill, category: value })}
                  >
                    <SelectTrigger id="skill-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Frontend">Frontend</SelectItem>
                      <SelectItem value="Backend">Backend</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="DevOps">DevOps</SelectItem>
                      <SelectItem value="Mobile">Mobile</SelectItem>
                      <SelectItem value="Data">Data</SelectItem>
                      <SelectItem value="Soft Skills">Soft Skills</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="skill-level">Proficiency Level: {getLevelLabel(newSkill.level)}</Label>
                    <span className="text-sm text-muted-foreground">{newSkill.level}%</span>
                  </div>
                  <Slider
                    id="skill-level"
                    min={0}
                    max={100}
                    step={5}
                    value={[newSkill.level]}
                    onValueChange={(value) => setNewSkill({ ...newSkill, level: value[0] })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="years-experience">Years of Experience</Label>
                  <Input
                    id="years-experience"
                    type="number"
                    min={0}
                    max={50}
                    value={newSkill.yearsOfExperience}
                    onChange={(e) =>
                      setNewSkill({ ...newSkill, yearsOfExperience: Number.parseInt(e.target.value) || 0 })
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddSkill}>Add Skill</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="space-y-3">
                <h3 className="text-lg font-medium">{category}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="flex flex-col space-y-2 rounded-lg border p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{skill.name}</div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">
                            {skill.yearsOfExperience} yr{skill.yearsOfExperience !== 1 ? "s" : ""}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => {
                              setEditingSkill(skill)
                              setIsEditDialogOpen(true)
                            }}
                          >
                            <Save className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => handleRemoveSkill(skill.id)}
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{getLevelLabel(skill.level)}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Skill</DialogTitle>
            <DialogDescription>Update your skill details</DialogDescription>
          </DialogHeader>
          {editingSkill && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-skill-name">Skill Name</Label>
                <Input
                  id="edit-skill-name"
                  value={editingSkill.name}
                  onChange={(e) => setEditingSkill({ ...editingSkill, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-skill-category">Category</Label>
                <Select
                  value={editingSkill.category}
                  onValueChange={(value) => setEditingSkill({ ...editingSkill, category: value })}
                >
                  <SelectTrigger id="edit-skill-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Frontend">Frontend</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="DevOps">DevOps</SelectItem>
                    <SelectItem value="Mobile">Mobile</SelectItem>
                    <SelectItem value="Data">Data</SelectItem>
                    <SelectItem value="Soft Skills">Soft Skills</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="edit-skill-level">Proficiency Level: {getLevelLabel(editingSkill.level)}</Label>
                  <span className="text-sm text-muted-foreground">{editingSkill.level}%</span>
                </div>
                <Slider
                  id="edit-skill-level"
                  min={0}
                  max={100}
                  step={5}
                  value={[editingSkill.level]}
                  onValueChange={(value) => setEditingSkill({ ...editingSkill, level: value[0] })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-years-experience">Years of Experience</Label>
                <Input
                  id="edit-years-experience"
                  type="number"
                  min={0}
                  max={50}
                  value={editingSkill.yearsOfExperience}
                  onChange={(e) =>
                    setEditingSkill({
                      ...editingSkill,
                      yearsOfExperience: Number.parseInt(e.target.value) || 0,
                    })
                  }
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateSkill}>Update Skill</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

