"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Users", value: 10, color: "#3B82F6" },
  { name: "Projects", value: 20, color: "#10B981" },
  { name: "Tasks", value: 40, color: "#934f64" },
];

export default function PiChart() {
  return (
    <div className="h-80 w-full rounded-xl bg-white py-3 sm:h-150">
      <ResponsiveContainer className="h-fit w-fit">
        <PieChart className="h-fit w-fit">
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            className="h-full w-full"
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
