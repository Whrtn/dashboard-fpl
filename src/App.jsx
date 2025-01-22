import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EnterTeamId from "./pages/EnterTeamId";
import SelectLeague from "./pages/SelectLeague";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

const App = () => {
  const [teamIdResponse, setTeamIdResponse] = useState({});
  const [leagueIdResponse, setLeagueIdResponse] = useState({});

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/enter-team-id" />} />
          <Route
            path="/enter-team-id"
            element={<EnterTeamId setTeamIdResponse={setTeamIdResponse} />}
          />
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
