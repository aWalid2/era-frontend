"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", users: 2, projects: 1, tasks: 20 },
  { month: "Feb", users: 5, projects: 3, tasks: 30 },
  { month: "Mar", users: 8, projects: 4, tasks: 40 },
  { month: "Apr", users: 6, projects: 5, tasks: 50 },
  { month: "May", users: 10, projects: 7, tasks: 70 },
  { month: "Jun", users: 12, projects: 9, tasks: 80 },
];

export default function GrowthChart() {
  return (
    <div className="h-150 w-full rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">
        Growth Overview
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis allowDecimals={false} />

          <Tooltip />

          {/* <Legend /> */}

          <Area
            type="monotone"
            dataKey="users"
            stroke="#3B82F6"
            fill="rgba(59,130,246,0.2)"
            strokeWidth={2}
            name="Users"
          />

          <Area
            type="monotone"
            dataKey="projects"
            stroke="#10B981"
            fill="rgba(16,185,129,0.2)"
            strokeWidth={2}
            name="Projects"
          />
          <Area
            type="monotone"
            dataKey="tasks"
            stroke="#10B981"
            fill="rgba(16,185,129,0.2)"
            strokeWidth={2}
            name="Tasks"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
