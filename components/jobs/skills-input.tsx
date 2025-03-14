"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SkillsInput() {
  const [skills, setSkills] = useState<string[]>(["React", "TypeScript", "JavaScript"])
  const [inputValue, setInputValue] = useState("")

  const addSkill = () => {
    if (inputValue.trim() && !skills.includes(inputValue.trim())) {
      setSkills([...skills, inputValue.trim()])
      setInputValue("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex space-x-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a skill (e.g. React, Python, AWS)"
          className="flex-1"
        />
        <Button type="button" onClick={addSkill} variant="secondary">
          Add
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="px-2 py-1">
            {skill}
            <Button variant="ghost" size="sm" className="h-4 w-4 p-0 ml-2" onClick={() => removeSkill(skill)}>
              <X className="h-3 w-3" />
              <span className="sr-only">Remove {skill}</span>
            </Button>
          </Badge>
        ))}
      </div>
    </div>
  )
}

