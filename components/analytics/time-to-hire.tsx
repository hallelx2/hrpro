"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Engineering",
    days: 22,
  },
  {
    name: "Product",
    days: 18,
  },
  {
    name: "Design",
    days: 15,
  },
  {
    name: "Marketing",
    days: 12,
  },
  {
    name: "Sales",
    days: 10,
  },
  {
    name: "HR",
    days: 14,
  },
]

export function TimeToHire() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} days`}
        />
        <Tooltip />
        <Bar dataKey="days" fill="#8884d8" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

