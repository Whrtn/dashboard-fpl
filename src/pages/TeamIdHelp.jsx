import React from "react";
import CenteredTile from "../components/CenteredTile";
import ConfirmButton from "../components/ConfirmButton";
import { Navigate, useNavigate } from "react-router-dom";

const TeamIdHelp = () => {
  const navigate = useNavigate();

  const handleReturnToEnterTeamId = () => {
    navigate("/");
  };
  return (
    <CenteredTile>
      <h1 className="md:text-2xl text-xl font-bold mb-6">
        How to find your FPL Team ID
      </h1>
      <p className="mb-6">
        1. Go to{" "}
        <a
          href="https://fantasy.premierleague.com/"
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          FPL
        </a>{" "}
        on your preferred browser
      </p>
      <p className="mb-6">
        2. If not already logged in, log into your FPL account
      </p>
      <p className="mb-6">
        3. Click on the{" "}
        <span className="bg-[#00ff87] text-[#37003C] font-bold px-4 rounded-xl py-2">
          Points
        </span>{" "}
        tab
      </p>
      <p className="mb-6 break-all">
        4. Copy the ID from the URL. <br></br> E.g.
        https://fantasy.premierleague.com/entry/
        <span className="font-bold">0000000</span>/event/1
      </p>
      <ConfirmButton
        name="Back to Enter Team ID"
        onClick={handleReturnToEnterTeamId}
      />
    </CenteredTile>
  );
};

export default TeamIdHelp;
