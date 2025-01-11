import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EnterTeamId from "./pages/EnterTeamId";
import SelectLeague from "./pages/SelectLeague";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/enter-team-id" />} />
          <Route path="/enter-team-id" element={<EnterTeamId />} />
          <Route path="/select-league" element={<SelectLeague />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
