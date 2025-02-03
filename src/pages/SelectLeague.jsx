import React, { useEffect, useState } from "react";
import CenteredTile from "../components/CenteredTile";
import ConfirmButton from "../components/ConfirmButton";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const SelectLeague = ({ teamIdResponse, setLeagueIdResponse }) => {
  const [leagueId, setLeagueId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { data, loading, err } = useFetch(
    `https://fantasy.premierleague.com/api/entry/${teamIdResponse}/`
  );

  const handleSelectLeague = (id) => {
    setLeagueId(id);
  };

  const handleContinue = () => {
    if (!leagueId) {
      setError("*Please select a league");
    } else {
      setLeagueIdResponse(leagueId);
      localStorage.setItem("leagueId", leagueId);
      navigate("/dashboard");
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <CenteredTile>
      <h1 className="md:text-2xl text-xl font-bold mb-4">Select a League</h1>
      {data &&
        data.leagues.classic.map((league) => (
          <p
            className={`cursor-pointer p-2 hover:bg-gray-200 w-full mb-4 ${
              league.id === leagueId ? "bg-gray-200" : ""
            }`}
            key={league.id}
            onClick={() => handleSelectLeague(league.id)}
          >
            {league.name}
          </p>
        ))}
      <ConfirmButton name="Continue" onClick={handleContinue} />
      {error && <p className="mb-3 text-red-500 font-semibold">{error}</p>}
    </CenteredTile>
  );
};

export default SelectLeague;
