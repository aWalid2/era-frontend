import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      <div className="space-y-6 text-center">
        <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

        <h2 className="text-2xl font-semibold text-gray-600">Page Not Found</h2>

        <p className="mx-auto max-w-md text-gray-500">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <Link
          to="/dashboard"
          className="bg-primary inline-block rounded-xl px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
