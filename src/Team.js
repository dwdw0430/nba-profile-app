import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamDepthChart from "./components/TeamDepthChart";
import TeamAppBar from "./components/TeamAppBar";

// Team Profile Home Page
// Consists of the team navigation bar and the team depth chart

function Team() {
  return (
    <>
      <TeamAppBar />
      <div>
        <TeamDepthChart />
      </div>
    </>
  );
}

export default Team;
