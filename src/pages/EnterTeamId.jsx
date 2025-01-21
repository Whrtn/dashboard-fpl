import React, { useState } from "react";
import CenteredTile from "../components/CenteredTile";
import ConfirmButton from "../components/ConfirmButton";
import useFetch from "../hooks/useFetch";

const EnterTeamId = () => {
  const [teamId, setTeamId] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setTeamId(e.target.value);
    console.log(teamId);
  };

  const handleContinue = () => {
    if (teamId.trim() == "") {
      setError("*This field cannot be empty");
    }
  };

  return (
    <CenteredTile>
      <h1 className="text-2xl font-bold mb-6">Enter Your Team ID</h1>

      <input
        type="text"
        placeholder="Team ID"
        className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none"
        onChange={handleInput}
      />

      {error && <p className="mb-3 text-red-500 font-semibold">{error}</p>}

      <ConfirmButton name="Continue" onClick={handleContinue} />

      <p className="text-sm text-gray-500 cursor-pointer">
        Where can I find this?
      </p>
    </CenteredTile>
  );
};

export default EnterTeamId;
