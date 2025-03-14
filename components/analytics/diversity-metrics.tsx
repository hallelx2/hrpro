"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  {
    name: "Applied",
    Women: 42,
    Men: 52,
    "Non-Binary": 6,
  },
  {
    name: "Screened",
    Women: 45,
    Men: 49,
    "Non-Binary": 6,
  },
  {
    name: "Interviewed",
    Women: 48,
    Men: 46,
    "Non-Binary": 6,
  },
  {
    name: "Hired",
    Women: 50,
    Men: 44,
    "Non-Binary": 6,
  },
]

export function DiversityMetrics() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value}%`} />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
        <Bar dataKey="Women" stackId="a" fill="#8884d8" />
        <Bar dataKey="Men" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Non-Binary" stackId="a" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  )
}

