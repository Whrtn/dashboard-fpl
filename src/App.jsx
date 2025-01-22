import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EnterTeamId from "./pages/EnterTeamId";
import SelectLeague from "./pages/SelectLeague";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

const App = () => {
  const [teamIdResponse, setTeamIdResponse] = useState({});

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
            element={<SelectLeague teamIdResponse={teamIdResponse} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
