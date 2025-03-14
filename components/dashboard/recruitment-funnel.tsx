"use client"

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Applications",
    value: 352,
    color: "#c7d2fe", // Light indigo
  },
  {
    name: "Screened",
    value: 201,
    color: "#a5b4fc", // Indigo
  },
  {
    name: "Phone Screen",
    value: 142,
    color: "#818cf8", // Medium indigo
  },
  {
    name: "Interview",
    value: 87,
    color: "#6366f1", // Indigo/primary
  },
  {
    name: "Final Round",
    value: 42,
    color: "#4f46e5", // Dark indigo
  },
  {
    name: "Offers",
    value: 24,
    color: "#4338ca", // Darker indigo
  },
  {
    name: "Hired",
    value: 18,
    color: "#3730a3", // Darkest indigo
  },
]

export function RecruitmentFunnel() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 15,
            left: 10,
            bottom: 20,
          }}
          barSize={40}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 25, right: 25 }}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <Tooltip
            formatter={(value) => [`${value}`, "Candidates"]}
            labelStyle={{ fontWeight: "bold" }}
            contentStyle={{
              borderRadius: 8,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

