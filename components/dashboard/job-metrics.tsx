"use client"

import { Progress } from "@/components/ui/progress"

export function JobMetrics() {
  return (
    <div className="space-y-5">
      {departments.map((department) => (
        <div key={department.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">{department.name}</div>
            <div className="text-sm text-muted-foreground">{department.count} positions</div>
          </div>
          <Progress value={department.percentage} className="h-2" />

          <div className="text-xs text-muted-foreground grid grid-cols-3 gap-1">
            <div>
              <span className="font-medium text-foreground">{department.openRoles}</span> Open
            </div>
            <div>
              <span className="font-medium text-foreground">{department.activelyRecruiting}</span> Recruiting
            </div>
            <div>
              <span className="font-medium text-foreground">{department.onHold}</span> On Hold
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const departments = [
  {
    name: "Engineering",
    count: 12,
    percentage: 50,
    openRoles: 6,
    activelyRecruiting: 4,
    onHold: 2,
  },
  {
    name: "Product & Design",
    count: 6,
    percentage: 25,
    openRoles: 3,
    activelyRecruiting: 2,
    onHold: 1,
  },
  {
    name: "Marketing",
    count: 3,
    percentage: 12.5,
    openRoles: 2,
    activelyRecruiting: 1,
    onHold: 0,
  },
  {
    name: "Sales",
    count: 2,
    percentage: 8.3,
    openRoles: 1,
    activelyRecruiting: 1,
    onHold: 0,
  },
  {
    name: "Operations",
    count: 1,
    percentage: 4.2,
    openRoles: 1,
    activelyRecruiting: 0,
    onHold: 0,
  },
]

