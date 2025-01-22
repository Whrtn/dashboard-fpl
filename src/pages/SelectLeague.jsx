import React from "react";
import CenteredTile from "../components/CenteredTile";
import ConfirmButton from "../components/ConfirmButton";
import useFetch from "../hooks/useFetch";

const SelectLeague = ({ teamIdResponse }) => {
  const { data, loading, error } = useFetch(
    `https://fantasy.premierleague.com/api/entry/${teamIdResponse}/`
  );

  return (
    <CenteredTile>
      <h1 className="text-2xl font-bold mb-6">Select a League</h1>

      {data &&
        data.leagues.classic.map((league) => (
          <p
            className="cursor-pointer p-2 hover:bg-offwhite w-full mb-2"
            key={league.id}
          >
            {league.name}
          </p>
        ))}
      <ConfirmButton name="Continue" />
    </CenteredTile>
  );
};

export default SelectLeague;
