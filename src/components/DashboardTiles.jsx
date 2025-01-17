import React from "react";

const DashboardTiles = ({ tileHeading, tileValue }) => {
  return (
    <div className="p-10 w-full rounded-2xl shadow-lg shadow-neutral-400">
      <h1 className="text-2xl ">{tileHeading}</h1>
      <h2 className="text-6xl text-primary">{tileValue}</h2>
    </div>
  );
};

export default DashboardTiles;
