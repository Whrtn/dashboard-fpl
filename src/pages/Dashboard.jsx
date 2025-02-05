import React, { useState } from "react";
import DashboardTiles from "../components/DashboardTiles";
import TotalTable from "../components/TotalTable";
import useFetch from "../hooks/useFetch";
import DashboardTableBody from "../components/DashboardTableBody";
import LoadingSpinner from "../components/LoadingSpinner";
import { Navigate } from "react-router-dom";
import PaginationButton from "../components/PaginationButton";

const Dashboard = ({ teamIdResponse, leagueIdResponse }) => {
  let [pageCount, setPageCount] = useState(1);
  const {
    data: teamData,
    loading: teamLoading,
    err: teamError,
  } = useFetch(`https://fantasy.premierleague.com/api/entry/${teamIdResponse}`);
  const {
    data: leagueData,
    loading: leagueLoading,
    err: leagueError,
  } = useFetch(
    `https://fantasy.premierleague.com/api/leagues-classic/${leagueIdResponse}/standings/?page_standings=${pageCount}`
  );

  if (teamError || leagueError) {
    return <Navigate to="/" />;
  }

  if (teamLoading || leagueLoading) {
    return <LoadingSpinner />;
  }

  const handleNextPage = () => {
    setPageCount(pageCount + 1);
  };

  const handlePreviousPage = () => {
    setPageCount(pageCount - 1);
  };

  return (
    <section className="w-full pt-10 container mx-auto">
      <div
        className={
          "bg-primary sm:text-2xl text-xl text-center mx-4 sm:mx-0 p-10 rounded-2xl text-white shadow-neutral-400 shadow-lg mb-4 "
        }
      >
        <h1 className="font-bold">
          {teamData.player_first_name} {teamData.player_last_name}
        </h1>
        <h2>{teamData.name}</h2>
        <h2>{leagueData.league.name}</h2>
      </div>
      <div className="sm:flex-row mx-4 sm:mx-0 flex justify-between gap-4 text-center font-bold mb-4 ">
        <DashboardTiles
          tileHeading="Years Active"
          tileValue={teamData.years_active}
        />
        <DashboardTiles
          tileHeading="GW Points"
          tileValue={teamData.summary_event_points}
        />
        <DashboardTiles
          tileHeading="Overall Points"
          tileValue={teamData.summary_overall_points}
        />
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-between gap-4 mx-4 sm:mx-0">
        <div className="w-full">
          <h1 className="font-bold text-xl py-2 sm:text-left text-center">
            Overall Standings
          </h1>
          <TotalTable>
            {leagueData.standings.results.map((leagueEntry, index) => (
              <DashboardTableBody
                key={leagueEntry.id}
                index={leagueEntry.rank}
                user={leagueEntry.player_name}
                value={leagueEntry.total}
                teamName={leagueEntry.entry_name}
                selected={
                  leagueEntry.entry.toString() === teamIdResponse
                    ? "bg-blue-100"
                    : ""
                }
              />
            ))}
          </TotalTable>
          <div className="flex items-center mb-4 justify-center gap-4">
            <PaginationButton
              text="<"
              onclick={handlePreviousPage}
              isDisabled={pageCount === 1}
              disabledStyle={pageCount === 1 ? "bg-gray-300 text-gray-500" : ""}
            />

            <p>Page {pageCount}</p>
            <PaginationButton
              text=">"
              onclick={handleNextPage}
              isDisabled={!leagueData.standings.has_next}
              disabledStyle={
                !leagueData.standings.has_next
                  ? "bg-gray-300 text-gray-500"
                  : ""
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
