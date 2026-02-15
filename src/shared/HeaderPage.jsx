import React from "react";

const HeaderPage = ({ title, description }) => {
  return (
    <div className="mb-4">
      <h1 className="mb-2 text-xl font-bold sm:text-2xl">{title}</h1>
      <p className="text-sm text-gray-600 sm:text-base">{description}</p>
    </div>
  );
};

export default HeaderPage;
