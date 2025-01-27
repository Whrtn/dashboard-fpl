import React from "react";

const DashboardTiles = ({ tileHeading, tileValue }) => {
  return (
    <div className="md:p-10 p-4 w-full rounded-2xl shadow-lg shadow-neutral-400 flex flex-col items-center justify-center">
      <h1 className="md:text-2xl sm:text-xl text-lg">{tileHeading}</h1>
      <h2 className="md:text-6xl text-4xl text-primary">{tileValue}</h2>
    </div>
  );
};

export default DashboardTiles;
