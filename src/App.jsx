import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EnterTeamId from "./pages/EnterTeamId";
import SelectLeague from "./pages/SelectLeague";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import TeamIdHelp from "./pages/TeamIdHelp";

const App = () => {
  const [teamIdResponse, setTeamIdResponse] = useState({});
  const [leagueIdResponse, setLeagueIdResponse] = useState({});

  useEffect(() => {
    const storedTeamId = localStorage.getItem("teamId");
    const storedLeagueId = localStorage.getItem("leagueId");
    if (storedTeamId) setTeamIdResponse(storedTeamId);
    if (storedLeagueId) setLeagueIdResponse(storedLeagueId);
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/enter-team-id" />} />
          <Route
            path="/enter-team-id"
            element={<EnterTeamId setTeamIdResponse={setTeamIdResponse} />}
          />

          <Route path="/team-id-help" element={<TeamIdHelp />} />

          <Route
            path="/select-league"
            element={
              <SelectLeague
                teamIdResponse={teamIdResponse}
                setLeagueIdResponse={setLeagueIdResponse}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                teamIdResponse={teamIdResponse}
                leagueIdResponse={leagueIdResponse}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
