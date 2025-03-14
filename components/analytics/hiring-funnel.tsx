"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Applications",
    value: 1234,
    fill: "#8884d8",
  },
  {
    name: "Screened",
    value: 820,
    fill: "#83a6ed",
  },
  {
    name: "Interviewed",
    value: 420,
    fill: "#8dd1e1",
  },
  {
    name: "Technical",
    value: 190,
    fill: "#82ca9d",
  },
  {
    name: "Final Round",
    value: 90,
    fill: "#a4de6c",
  },
  {
    name: "Offers",
    value: 45,
    fill: "#d0ed57",
  },
  {
    name: "Hired",
    value: 32,
    fill: "#ffc658",
  },
]

export function HiringFunnel() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

