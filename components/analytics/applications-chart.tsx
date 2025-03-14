"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    applications: 120,
    qualified: 65,
  },
  {
    name: "Feb",
    applications: 132,
    qualified: 70,
  },
  {
    name: "Mar",
    applications: 101,
    qualified: 55,
  },
  {
    name: "Apr",
    applications: 134,
    qualified: 78,
  },
  {
    name: "May",
    applications: 190,
    qualified: 95,
  },
  {
    name: "Jun",
    applications: 212,
    qualified: 105,
  },
  {
    name: "Jul",
    applications: 169,
    qualified: 90,
  },
  {
    name: "Aug",
    applications: 209,
    qualified: 115,
  },
  {
    name: "Sep",
    applications: 176,
    qualified: 98,
  },
  {
    name: "Oct",
    applications: 189,
    qualified: 110,
  },
  {
    name: "Nov",
    applications: 204,
    qualified: 120,
  },
  {
    name: "Dec",
    applications: 236,
    qualified: 135,
  },
]

export function ApplicationsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="applications" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="qualified" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

