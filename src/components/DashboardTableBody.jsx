import React from "react";

const DashboardTableBody = ({
  index,
  user,
  value,
  captain,
  viceCaptain,
  selected,
}) => {
  return (
    <tbody className={`text-center border-t border-gray-300 ${selected}`}>
      <tr>
        <td className="pt-3">{index}</td>
        <td className="text-left pt-3 font-semibold">{user}</td>
        <td className="pt-3 font-bold">{value}</td>
      </tr>
      <tr>
        <td></td>
        <td className="text-left text-sm">{captain} (c)</td>
        <td></td>
      </tr>
      <tr>
        <td className="pb-3"></td>
        <td className="text-left pb-3 text-sm">{viceCaptain} (v)</td>
        <td className="pb-3"></td>
      </tr>
    </tbody>
  );
};

export default DashboardTableBody;
