import React from "react";
import DashboardTiles from "../components/DashboardTiles";
import GWTable from "../components/GWTable";
import TotalTable from "../components/TotalTable";

const Dashboard = () => {
  return (
    <section className="w-full pt-40 container mx-auto">
      <div className="bg-primary text-2xl text-center p-10 rounded-2xl text-white shadow-neutral-400 shadow-lg mb-4">
        <h1 className="font-bold">Dan Wharton</h1>
        <h2>Ballon Dawson</h2>
        <h2>Radius IT</h2>
      </div>
      <div className="flex items-center justify-between gap-10 text-center font-bold mb-4">
        <DashboardTiles tileHeading="Team Value" tileValue="99.2m" />
        <DashboardTiles tileHeading="GW Points" tileValue="74" />
        <DashboardTiles tileHeading="Overall Points" tileValue="1106" />
      </div>
      <div className="flex items-center justify-between gap-10">
        <GWTable />
        <TotalTable />
      </div>
    </section>
  );
};

export default Dashboard;
