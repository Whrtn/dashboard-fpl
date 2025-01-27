import React from "react";
import DashboardTiles from "../components/DashboardTiles";
import GWTable from "../components/GWTable";
import TotalTable from "../components/TotalTable";
import useFetch from "../hooks/useFetch";
import DashboardTableBody from "../components/DashboardTableBody";

const Dashboard = ({ teamIdResponse, leagueIdResponse }) => {
  const {
    data: teamData,
    loading: teamLoading,
    err: teamError,
  } = useFetch(
    `https://fantasy.premierleague.com/api/entry/${teamIdResponse}/`
  );
  const {
    data: leagueData,
    loading: leagueLoading,
    err: leagueError,
  } = useFetch(
    `https://fantasy.premierleague.com/api/leagues-classic/${leagueIdResponse}/standings/`
  );
  return (
    <section className="w-full pt-10 container mx-auto">
      <div className="bg-primary text-2xl text-center p-10 rounded-2xl text-white shadow-neutral-400 shadow-lg mb-4">
        <h1 className="font-bold">
          {teamData && teamData.player_first_name}{" "}
          {teamData && teamData.player_last_name}
        </h1>
        <h2>{teamData && teamData.name}</h2>
        <h2>{leagueData && leagueData.league.name}</h2>
      </div>
      <div className="flex items-center justify-between gap-10 text-center font-bold mb-4">
        <DashboardTiles
          tileHeading="Years Active"
          tileValue={teamData && teamData.years_active}
        />
        <DashboardTiles
          tileHeading="GW Points"
          tileValue={teamData && teamData.summary_event_points}
        />
        <DashboardTiles
          tileHeading="Overall Points"
          tileValue={teamData && teamData.summary_overall_points}
        />
      </div>
      <div className="flex items-center justify-between gap-10">
        <div className="w-full">
          <h1 className="font-bold text-xl py-2">Gameweek Standings</h1>
          <GWTable>
            {leagueData &&
              leagueData.standings.results
                .slice()
                .sort((a, b) => b.event_total - a.event_total)
                .map((leagueEntry, index) => (
                  <DashboardTableBody
                    key={leagueEntry.id}
                    index={index + 1}
                    user={leagueEntry.player_name}
                    value={leagueEntry.event_total}
                    captain="Salah"
                    viceCaptain="Jackson"
                    selected={
                      leagueEntry.entry.toString() === teamIdResponse
                        ? "bg-blue-100"
                        : ""
                    }
                  />
                ))}
          </GWTable>
        </div>
        <div className="w-full">
          <h1 className="font-bold text-xl py-2">Overall Standings</h1>
          <TotalTable>
            {leagueData &&
              leagueData.standings.results.map((leagueEntry, index) => (
                <DashboardTableBody
                  key={leagueEntry.id}
                  index={index + 1}
                  user={leagueEntry.player_name}
                  value={leagueEntry.total}
                  captain="Salah"
                  viceCaptain="Jackson"
                  selected={
                    leagueEntry.entry.toString() === teamIdResponse
                      ? "bg-blue-100"
                      : ""
                  }
                />
              ))}
          </TotalTable>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
