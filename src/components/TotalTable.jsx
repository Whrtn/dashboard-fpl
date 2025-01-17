import React from "react";
import DashboardTableBody from "./DashboardTableBody";

const TotalTable = () => {
  return (
    <table className="shadow-lg shadow-neutral-400 w-full border-collapse text-lg">
      <thead className="text-center text-white bg-primary ">
        <tr>
          <th className="py-3">#</th>
          <th className="text-left py-3">Captain</th>
          <th className="py-3">Total</th>
        </tr>
      </thead>
      <DashboardTableBody
        index="1"
        user="Dan Wharton"
        value="1106"
        captain="Cunha (C)"
        viceCaptain="Salah (V)"
      />
    </table>
  );
};

export default TotalTable;
