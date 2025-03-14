"use client"

import { Progress } from "@/components/ui/progress"

export function SkillsAnalytics() {
  return (
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">{skill.name}</div>
            <div className="text-sm text-muted-foreground">{skill.count} jobs</div>
          </div>
          <Progress value={skill.percentage} className="h-2" />
        </div>
      ))}
    </div>
  )
}

const skills = [
  {
    name: "JavaScript",
    count: 18,
    percentage: 75,
  },
  {
    name: "React",
    count: 16,
    percentage: 67,
  },
  {
    name: "TypeScript",
    count: 14,
    percentage: 58,
  },
  {
    name: "Node.js",
    count: 12,
    percentage: 50,
  },
  {
    name: "Python",
    count: 10,
    percentage: 42,
  },
]

