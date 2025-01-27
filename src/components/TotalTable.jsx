import React from "react";
import DashboardTableBody from "./DashboardTableBody";

const TotalTable = ({ children }) => {
  return (
    <table className="shadow-lg shadow-neutral-400 w-full border-collapse text-lg mb-10">
      <thead className="text-center text-white bg-primary ">
        <tr>
          <th className="py-3">#</th>
          <th className="text-left py-3">Captain</th>
          <th className="py-3">Total</th>
        </tr>
      </thead>
      {children}
    </table>
  );
};

export default TotalTable;
