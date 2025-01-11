import React from "react";
import CenteredTile from "../components/CenteredTile";
import ConfirmButton from "../components/ConfirmButton";

const EnterTeamId = () => {
  return (
    <CenteredTile>
      <h1 className="text-2xl font-bold mb-6">Enter Your Team ID</h1>

      <input
        type="text"
        placeholder="Team ID"
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none"
      />

      <ConfirmButton name="Continue" />

      <p className="text-sm text-gray-500 cursor-pointer">
        Where can I find this?
      </p>
    </CenteredTile>
  );
};

export default EnterTeamId;
