import React from "react";

const DashboardTableBody = ({ index, user, value, captain, viceCaptain }) => {
  return (
    <tbody className="text-center border-t border-gray-300">
      <tr>
        <td className="pt-3">{index}</td>
        <td className="text-left pt-3">{user}</td>
        <td className="pt-3">{value}</td>
      </tr>
      <tr>
        <td></td>
        <td className="text-left">{captain}</td>
        <td></td>
      </tr>
      <tr>
        <td className="pb-3"></td>
        <td className="text-left pb-3">{viceCaptain}</td>
        <td className="pb-3"></td>
      </tr>
    </tbody>
  );
};

export default DashboardTableBody;
