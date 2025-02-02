import React from "react";

const DashboardTableBody = ({ index, user, value, teamName, selected }) => {
  return (
    <tbody className={`text-center border-t border-gray-300 ${selected}`}>
      <tr>
        <td className="pt-3">{index}</td>
        <td className="text-left pt-3 font-semibold">{user}</td>
        <td className="pt-3 font-bold">{value}</td>
      </tr>
      <tr>
        <td></td>
        <td className="text-left text-sm pb-3">{teamName}</td>
        <td></td>
      </tr>
    </tbody>
  );
};

export default DashboardTableBody;
