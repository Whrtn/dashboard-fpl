import React, { useState } from "react";
import CenteredTile from "../components/CenteredTile";
import ConfirmButton from "../components/ConfirmButton";
import { useNavigate } from "react-router-dom";

const EnterTeamId = ({ setTeamIdResponse }) => {
  const [teamId, setTeamId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setTeamId(e.target.value);
  };

  const handleContinue = () => {
    if (teamId.trim() == "") {
      setError("*This field cannot be empty");
    } else {
      setTeamIdResponse(teamId);
      navigate("/select-league");
    }
  };

  return (
    <CenteredTile>
      <h1 className="md:text-2xl text-xl font-bold mb-6">Enter Your Team ID</h1>

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
