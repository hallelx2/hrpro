"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 120,
  },
  {
    name: "Feb",
    total: 132,
  },
  {
    name: "Mar",
    total: 101,
  },
  {
    name: "Apr",
    total: 134,
  },
  {
    name: "May",
    total: 190,
  },
  {
    name: "Jun",
    total: 212,
  },
  {
    name: "Jul",
    total: 169,
  },
  {
    name: "Aug",
    total: 209,
  },
  {
    name: "Sep",
    total: 176,
  },
  {
    name: "Oct",
    total: 189,
  },
  {
    name: "Nov",
    total: 204,
  },
  {
    name: "Dec",
    total: 236,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

