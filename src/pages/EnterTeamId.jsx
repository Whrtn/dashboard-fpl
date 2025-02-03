import React, { useState, useEffect } from "react";
import CenteredTile from "../components/CenteredTile";
import ConfirmButton from "../components/ConfirmButton";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const EnterTeamId = ({ setTeamIdResponse }) => {
  const [teamId, setTeamId] = useState("");
  const [error, setError] = useState("");
  const [totalPlayers, setTotalPlayers] = useState(null);
  const navigate = useNavigate();

  const { data, loading, err } = useFetch(
    `https://fantasy.premierleague.com/api/bootstrap-static/`
  );

  // Set total players when data is fetched
  useEffect(() => {
    localStorage.clear();
    if (data?.total_players) {
      setTotalPlayers(data.total_players);
    }
  }, [data]);

  const handleInput = (e) => {
    setTeamId(e.target.value);
  };

  const handleContinue = () => {
    if (totalPlayers === null) {
      setError("*Loading total players, please try again.");
      return;
    }

    const trimmedTeamId = teamId.trim();
    const teamIdNumber = parseInt(trimmedTeamId, 10);

    if (trimmedTeamId === "") {
      setError("*This field cannot be empty");
    } else if (isNaN(teamIdNumber)) {
      setError("*This field must be a number");
    } else if (teamIdNumber <= 0 || teamIdNumber > totalPlayers) {
      setError("*Please enter a valid FPL Team ID");
    } else {
      setError("");
      setTeamIdResponse(teamId);
      localStorage.setItem("teamId", teamId);
      navigate("/select-league");
    }
  };

  const handleTeamIdHelp = () => {
    navigate("/team-id-help");
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

      <p
        className="text-sm text-gray-500 cursor-pointer"
        onClick={handleTeamIdHelp}
      >
        Where can I find this?
      </p>
    </CenteredTile>
  );
};

export default EnterTeamId;
