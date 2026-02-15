import React from "react";

export const DashboardBox = ({
  title,
  value,
  icon,
  borderColor = "border-blue-500",
}) => {
  return (
    <div
      className={`relative flex items-center justify-between rounded-xl border-l-4 bg-gray-100 p-6 shadow-sm ${borderColor}`}
    >
      <div>
        <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
          {title}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-800">{value}</h2>
      </div>

      <div className="text-4xl text-gray-300">{icon}</div>
    </div>
  );
};
